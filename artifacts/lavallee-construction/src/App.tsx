import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Home from '@/pages/Home';
import Soumission from '@/pages/Soumission';
import Confidentialite from '@/pages/Confidentialite';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';
import { BrandLoader } from '@/components/layout/BrandLoader';
import { RouteSeo } from '@/components/RouteSeo';

const queryClient = new QueryClient();

function RouteScrollReset() {
  const [location] = useLocation();

  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => { window.history.scrollRestoration = previous; };
  }, []);

  useLayoutEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      document.getElementById(hash)?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location]);

  return null;
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/soumission" component={Soumission} />
        <Route path="/politique-de-confidentialite" component={Confidentialite} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function BrandedMotion() {
  const [location] = useLocation();
  const [initialLoading, setInitialLoading] = useState(() =>
    typeof document !== 'undefined' && !document.getElementById('root')?.hasAttribute('data-prerendered')
  );
  const [routeLoading, setRouteLoading] = useState(false);
  const firstLocation = useRef(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeout = window.setTimeout(() => setInitialLoading(false), reducedMotion ? 0 : 520);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (firstLocation.current) {
      firstLocation.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRouteLoading(false);
      return;
    }
    setRouteLoading(true);
    const timeout = window.setTimeout(() => setRouteLoading(false), 220);
    return () => window.clearTimeout(timeout);
  }, [location]);

  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    root.classList.add("motion-enhanced");
    const targets = document.querySelectorAll<HTMLElement>(
      "main > section, main section > .container, main section article, main section figure, main section form, main section .xl\\:col-span-2"
    );
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.08, rootMargin: "0px 0px -36px 0px" }
    );
    targets.forEach((target, index) => {
      target.classList.add("reveal-on-scroll");
      target.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 55}ms`);
      observer.observe(target);
    });
    return () => {
      observer.disconnect();
      root.classList.remove("motion-enhanced");
    };
  }, [location]);

  return <BrandLoader active={initialLoading || routeLoading} initial={initialLoading} />;
}

function App({ ssrPath }: { ssrPath?: string }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')} ssrPath={ssrPath}>
          <RouteSeo />
          <RouteScrollReset />
          <BrandedMotion />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
