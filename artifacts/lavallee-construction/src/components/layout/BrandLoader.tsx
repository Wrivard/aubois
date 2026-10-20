import { useEffect, useState } from "react";

type BrandLoaderProps = {
  active: boolean;
  initial?: boolean;
};

export function BrandLoader({ active, initial = false }: BrandLoaderProps) {
  const [visible, setVisible] = useState(active);

  useEffect(() => {
    if (active) {
      setVisible(true);
      return;
    }
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = reducedMotion ? 0 : initial ? 360 : 220;
    const timeout = window.setTimeout(() => setVisible(false), delay);
    return () => window.clearTimeout(timeout);
  }, [active, initial]);

  if (!visible) return null;

  return (
    <div
      className={`brand-loader ${active ? "brand-loader--active" : "brand-loader--leaving"}`}
      aria-hidden="true"
      data-testid="brand-page-loader"
    >
      <div className="brand-loader__inner">
        <img
          className="brand-loader__logo"
          src="/logo-ceramique-cardinal.png"
          alt=""
          fetchPriority="high"
        />
        <div className="brand-loader__tileline">
          <span className="brand-loader__tile" />
          <span className="brand-loader__tile" />
          <span className="brand-loader__tile" />
          <span className="brand-loader__tile" />
        </div>
        <span className="brand-loader__caption">Pose soignée. Finition durable.</span>
      </div>
    </div>
  );
}
