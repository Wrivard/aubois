import { renderToString } from "react-dom/server";
import App from "./App";
import { ErrorBoundary } from "./components/error-boundary";
export { publicPages, renderSeoHead, renderSitemap, renderRobots } from "./lib/seo";

export function renderPage(path: string) {
  return renderToString(
    <ErrorBoundary>
      <App ssrPath={path} />
    </ErrorBoundary>,
  );
}
