import path from 'path';
import { readFile } from 'node:fs/promises';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

import runtimeErrorOverlay from '@replit/vite-plugin-runtime-error-modal';
import { normalizePath, publicPages, renderSeoHead, renderSitemap, renderRobots } from './src/lib/seo';

// Managed previews supply these values; standalone builds use Vite's defaults.
const rawPort = process.env.PORT ?? '5173';

if (!rawPort) {
  throw new Error(
    'PORT environment variable is required but was not provided.',
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH ?? '/';

if (!basePath) {
  throw new Error(
    'BASE_PATH environment variable is required but was not provided.',
  );
}

export default defineConfig({
  base: basePath,
  plugins: [
    {
      name: 'aubois-page-seo',
      transformIndexHtml: {
        order: 'pre',
        handler(html, context) {
          const route = context.originalUrl ?? context.path;
          return html.replace(
            /<!--seo-head:start-->[\s\S]*?<!--seo-head:end-->/,
            () => `<!--seo-head:start-->\n${renderSeoHead(route)}\n<!--seo-head:end-->`,
          );
        },
      },
      configureServer(server) {
        server.middlewares.use((request, response, next) => {
          const url = request.url?.split('?')[0];
          if (url !== '/sitemap.xml' && url !== '/robots.txt') return next();
          response.setHeader('Content-Type', url === '/sitemap.xml' ? 'application/xml; charset=utf-8' : 'text/plain; charset=utf-8');
          response.end(url === '/sitemap.xml' ? renderSitemap() : renderRobots());
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use(async (request, response, next) => {
          const pathname = normalizePath(request.url ?? '/');
          // Vite's default fallback serves the homepage for extensionless URLs,
          // bypassing directory index files. Serve each prerendered route instead.
          if (pathname in publicPages) {
            request.url = pathname === '/' ? '/index.html' : `${pathname}/index.html`;
            return next();
          }
          if (!path.extname(pathname)) {
            try {
              const html = await readFile(path.join(server.config.build.outDir, '404.html'));
              response.statusCode = 404;
              response.setHeader('Content-Type', 'text/html; charset=utf-8');
              response.end(html);
            } catch (error) {
              next(error);
            }
            return;
          }
          next();
        });
      },
    },
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== 'production' &&
    process.env.REPL_ID !== undefined
      ? [
          await import('@replit/vite-plugin-cartographer').then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, '..'),
            }),
          ),
          await import('@replit/vite-plugin-dev-banner').then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(
        import.meta.dirname,
        '..',
        '..',
        'attached_assets',
      ),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
