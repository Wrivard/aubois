import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, writeFile, symlink, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import ts from "typescript";

// Preserve the deployed package boundaries. Bundling this test would hide
// CommonJS-to-ESM import errors that can crash a successfully built function.
const root = fileURLToPath(new URL("../", import.meta.url));
const temporary = await mkdtemp(path.join(os.tmpdir(), "aubois-vercel-api-"));
try {
  for (const file of [
    "api/package.json",
    "lib/api-zod/package.json",
    "lib/quote-emails/package.json",
  ]) {
    const contents = await readFile(path.join(root, file), "utf8");
    assert.equal(JSON.parse(contents).type, "module", `${file} must use native ES modules`);
    const destination = path.join(temporary, file);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, contents);
  }

  for (const file of [
    "api/quote-requests.ts",
    "lib/api-zod/src/generated/api.ts",
    "lib/quote-emails/src/index.ts",
  ]) {
    const source = await readFile(path.join(root, file), "utf8");
    const { outputText } = ts.transpileModule(source, {
      fileName: file,
      compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
    });
    const destination = path.join(temporary, file.replace(/\.ts$/, ".js"));
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, outputText);
  }
  await symlink(
    path.join(root, "lib/api-zod/node_modules"),
    path.join(temporary, "lib/api-zod/node_modules"),
    "dir",
  );

  const { default: handler } = await import(
    pathToFileURL(path.join(temporary, "api/quote-requests.js")).href
  );
  assert.equal(typeof handler.fetch, "function", "Vercel Web handler must be exported");
  const url = "https://example.com/api/quote-requests";
  assert.equal((await handler.fetch(new Request(url))).status, 405);
  assert.equal((await handler.fetch(new Request(url, { method: "POST", body: "{invalid" }))).status, 400);
  const input = {
    submissionId: "b01ce470-7814-4de3-9142-8a2657f18aae",
    projectType: "Élagage d’arbres",
    description: "Runtime smoke test, no real email.",
    address: "Test location",
    firstName: "Test",
    lastName: "Client",
    email: "client@example.com",
    phone: "418-555-0100",
    companyWebsite: "honeypot",
  };
  const discarded = await handler.fetch(new Request(url, { method: "POST", body: JSON.stringify(input) }));
  assert.equal(discarded.status, 202);
  assert.equal((await discarded.json()).submissionId, input.submissionId);

  const { sendQuoteEmails } = await import(
    pathToFileURL(path.join(temporary, "lib/quote-emails/src/index.js")).href
  );
  const messages = [];
  const result = await sendQuoteEmails(input, {
    apiKey: "synthetic-test-key",
    fromEmail: "bonjour@kua.quebec",
    recipientEmail: "owner@example.com",
  }, async (endpoint, options) => {
    assert.equal(endpoint, "https://api.resend.com/emails");
    messages.push(JSON.parse(options.body));
    return new Response('{"id":"synthetic"}', { status: 200 });
  });
  assert.deepEqual(result, { ok: true });
  assert.equal(messages.length, 2);
  assert.equal(messages[0].to[0], "owner@example.com");
  assert.equal(messages[1].to[0], "client@example.com");
  console.log("Vercel runtime checks passed: native ESM imports, handler responses, and both Resend messages.");
} finally {
  await rm(temporary, { recursive: true, force: true });
}
