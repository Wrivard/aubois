import { useEffect } from "react";
import { useLocation } from "wouter";
import { renderSeoHead } from "@/lib/seo";

export function RouteSeo() {
  const [location] = useLocation();
  useEffect(() => {
    document.querySelectorAll("[data-site-seo]").forEach((element) => element.remove());
    document.head.insertAdjacentHTML("beforeend", renderSeoHead(location));
  }, [location]);
  return null;
}
