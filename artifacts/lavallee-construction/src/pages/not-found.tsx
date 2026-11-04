import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layout/MainLayout";

export default function NotFound() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Page introuvable (404) | Service d’Arbres Aubois";

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <MainLayout>
      <section className="relative isolate flex min-h-[60vh] items-center overflow-hidden bg-forest px-6 pb-16 pt-[156px] text-white sm:px-8 sm:pt-[176px] xl:min-h-[65vh] xl:px-12 xl:pt-[190px]">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(60,142,66,0.2),transparent_62%)]"
          aria-hidden="true"
        />
        <div className="container relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/75">
            <span aria-hidden="true" className="h-px w-6 bg-primary" />
            Erreur 404
            <span aria-hidden="true" className="h-px w-6 bg-primary" />
          </span>

          <p
            className="mt-5 text-[clamp(6rem,18vw,11rem)] font-extrabold leading-[0.85] tracking-tight text-primary"
            aria-hidden="true"
          >
            404
          </p>
          <h1 className="mt-7 text-3xl font-extrabold leading-tight text-white sm:text-4xl xl:text-5xl">
            Cette page est introuvable.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Le lien a peut-être changé ou la page n’existe plus. Retrouvez nos services d’élagage, d’abattage et d’essouchement à Montmagny et dans les environs.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/">
              <Button size="lg" className="w-full font-bold uppercase tracking-wide sm:w-auto">
                <Home aria-hidden="true" />
                Retour à l’accueil
              </Button>
            </Link>
            <Link href="/soumission">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/30 bg-white/5 text-white hover:bg-white/10 sm:w-auto"
              >
                Demander une soumission
                <ArrowRight aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
