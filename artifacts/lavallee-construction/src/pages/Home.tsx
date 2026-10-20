import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { TestimonialsSection, FAQContactSection } from "@/components/SharedSections";
import { ArrowRight, HardHat, CheckCircle, Building2, Ruler, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col">
        <div className="absolute inset-0 bg-forest">
          <img
            className="w-full h-full object-cover opacity-90"
            src="/photos/tile-patio.jpg"
            alt=""
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-forest/65"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center pt-[150px] xl:pt-[169px] pb-8 sm:pb-10">
          <div className="max-w-3xl 2xl:max-w-5xl">
            <div className="section-eyebrow inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-white border border-primary/30 mb-6 backdrop-blur-sm">
              <span className="text-xs font-bold tracking-widest uppercase">Installation de céramique et de carreaux</span>
            </div>
            
            <h1 className="text-[clamp(2.5rem,5vw,5.5rem)] font-extrabold text-white leading-[1.08] mb-5 sm:mb-6 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
              La précision au cœur de chaque installation.
            </h1>
            
            <p className="text-base sm:text-lg xl:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              Céramique Cardinal réalise des projets de pose de céramique et de revêtements en carreaux, des espaces intérieurs aux installations commerciales de grande envergure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12 xl:mb-16">
              <Link href="/soumission">
                <Button size="lg" className="h-14 px-5 sm:px-8 text-sm sm:text-base font-bold uppercase tracking-wider w-full sm:w-auto">
                  Demander une soumission <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="#realisations">
                <Button size="lg" variant="outline" className="h-14 px-5 sm:px-8 text-sm sm:text-base font-bold uppercase tracking-wider w-full sm:w-auto bg-white/5 text-white border-white/20 hover:bg-white hover:text-secondary">
                  Voir nos réalisations
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-white/10">
              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-1">15<span className="text-primary">+</span></p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide sm:tracking-widest text-white/75 font-bold">Années d'expérience</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-1">250<span className="text-primary">+</span></p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide sm:tracking-widest text-white/75 font-bold">Projets livrés</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-1">100<span className="text-primary">%</span></p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide sm:tracking-widest text-white/75 font-bold">Garantie qualité</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="a-propos" className="py-16 md:py-20 xl:py-24 bg-white relative scroll-mt-32 xl:scroll-mt-36">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-center">
            <div className="relative w-full max-w-xl lg:max-w-none mx-auto">
              <div className="aspect-square bg-muted relative z-10 clip-diagonal overflow-hidden">
                <img src="/photos/tile-vanity.jpg" alt="Photo d’illustration d’un revêtement intérieur en carreaux" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square bg-primary -z-0 clip-diagonal"></div>
              
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-forest text-white p-6 shadow-xl z-20 hidden xl:block w-48">
                <HardHat className="w-10 h-10 text-primary mb-4" />
                <p className="font-bold text-lg leading-tight">Précision et souci du détail.</p>
              </div>
            </div>
            
            <div>
              <span className="section-eyebrow text-secondary font-bold tracking-widest uppercase text-sm mb-4">À propos de Céramique Cardinal</span>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold mb-6 lg:mb-8 text-secondary">Des installations qui font toute la différence.</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                La céramique contribue à l’apparence et à la fonctionnalité d’un espace. Chez Céramique Cardinal, nous nous spécialisons dans l’installation de céramique et de revêtements en carreaux.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Chaque projet demande de la précision, une préparation adaptée et une attention constante aux détails. Notre approche vise à réaliser des installations soignées, adaptées aux caractéristiques de l’espace.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Installation de céramique",
                  "Pose de carreaux sur les planchers",
                  "Projets commerciaux et grandes surfaces",
                  "Revêtements intérieurs en carreaux"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-secondary">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link href="/soumission">
                <Button className="font-bold uppercase tracking-wider">
                  Parler de mon projet
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 xl:py-24 bg-muted border-y border-border scroll-mt-32 xl:scroll-mt-36">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                <span className="section-eyebrow text-secondary font-bold tracking-widest uppercase text-sm mb-4">Nos services</span>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold mb-6 text-secondary">Des installations adaptées à chaque projet.</h2>
            <p className="text-lg text-muted-foreground">
                Céramique Cardinal réalise des travaux de pose de céramique et de revêtements en carreaux. Les photos présentées sont des images d’illustration.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Installation de céramique",
                desc: "Travaux de pose de céramique adaptés aux dimensions, aux particularités et aux exigences de chaque espace.",
                img: "/photos/tile-bathroom.jpg",
                icon: <Building2 className="w-6 h-6" />
              },
              {
                title: "Planchers de céramique",
                desc: "Installation de carreaux sur les planchers afin de créer des surfaces fonctionnelles, uniformes et adaptées à l'utilisation prévue.",
                img: "/photos/tile-entry.jpg",
                icon: <Ruler className="w-6 h-6" />
              },
              {
                title: "Projets commerciaux",
                desc: "Travaux de céramique pour les espaces commerciaux nécessitant une planification et une exécution adaptées à la portée du projet.",
                img: "/photos/tile-kitchen.jpg",
                icon: <HardHat className="w-6 h-6" />
              },
              {
                title: "Grandes surfaces",
                desc: "Installation de céramique sur des superficies importantes, avec une attention particulière aux alignements et à l'uniformité du résultat.",
                img: "/photos/tile-patio.jpg",
                icon: <Building2 className="w-6 h-6" />
              },
              {
                title: "Murs et revêtements intérieurs",
                desc: "Pose de revêtements en carreaux sur différentes surfaces murales selon les besoins du projet.",
                img: "/photos/tile-fireplace.jpg",
                icon: <Ruler className="w-6 h-6" />
              },
              {
                title: "Installations spécialisées",
                desc: "Travaux de pose de céramique dans des environnements présentant des configurations ou des exigences particulières, notamment certains espaces de type spa.",
                img: "/photos/tile-stone-shower.jpg",
                icon: <HardHat className="w-6 h-6" />
              }
            ].map((srv, i) => (
              <div key={i} className="bg-white border border-border group hover:-translate-y-2 transition-transform duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={srv.img} alt={`Photo d’illustration pour le service ${srv.title.toLowerCase()}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-3 shadow-lg">
                    {srv.icon}
                  </div>
                </div>
                <div className="p-6 xl:p-8">
                  <h3 className="text-2xl font-bold mb-3 text-secondary">{srv.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{srv.desc}</p>
                  <a href="/soumission" className="inline-flex items-center font-bold text-secondary hover:text-primary transition-colors uppercase tracking-wider text-sm">
                    Parler de mon projet <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="realisations" className="py-16 md:py-20 xl:py-24 bg-forest text-white scroll-mt-32 xl:scroll-mt-36">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="section-eyebrow text-white font-bold tracking-widest uppercase text-sm mb-4">Nos Réalisations</span>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold">Nos réalisations</h2>
              <p className="text-white/80 mt-4">Découvrez des exemples d’installations en carreaux. Céramique Cardinal a notamment participé à un projet au SPA Strom.</p>
            </div>
            <Link href="/soumission">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-secondary uppercase tracking-wider font-bold">
                Discuter de mon projet
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              { img: "/photos/tile-white-shower.jpg", title: "Installation de carreaux", tag: "Photo illustrative", alt: "Photo d’illustration d’une installation de carreaux dans une douche" },
              { img: "/photos/tile-laundry.jpg", title: "Pose de céramique au sol", tag: "Photo illustrative", alt: "Photo d’illustration d’un plancher de céramique" },
              { img: "/photos/tile-vanity.jpg", title: "Revêtement intérieur en carreaux", tag: "Photo illustrative", alt: "Photo d’illustration d’un revêtement en carreaux dans une salle de bain" },
            ].map((proj, i) => (
              <div key={i} className="group relative overflow-hidden bg-black aspect-[4/3]">
                <img src={proj.img} alt={proj.alt} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-black/55 flex flex-col justify-end p-6 xl:p-8 opacity-100 xl:opacity-0 xl:group-hover:opacity-100 xl:group-focus-within:opacity-100 transition-opacity duration-300">
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1 mb-3 w-fit">{proj.tag}</span>
                  <h3 className="text-2xl font-bold">{proj.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 xl:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
                <span className="section-eyebrow text-secondary font-bold tracking-widest uppercase text-sm mb-4">En images</span>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-secondary">La céramique en images.</h2>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
               Les photos ci-dessous sont des images d’illustration. Elles présentent différents types de revêtements intérieurs en carreaux.
            </p>
          </div>
           <div className="grid sm:grid-cols-2 gap-6">
            <figure className="overflow-hidden aspect-[16/10] bg-muted">
              <img
                src="/photos/tile-kitchen.jpg"
                  alt="Photo d’illustration d’un dosseret et d’un comptoir en carreaux"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                 loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden aspect-[16/10] bg-muted">
              <img
                src="/photos/tile-bathroom.jpg"
                  alt="Photo d’illustration d’un plancher de salle de bain en carreaux"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                 loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden aspect-[16/10] bg-muted">
              <img
                src="/photos/tile-entry.jpg"
                  alt="Photo d’illustration d’un plancher d’entrée en carreaux"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                 loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden aspect-[16/10] bg-muted">
              <img
                src="/photos/tile-stone-shower.jpg"
                  alt="Photo d’illustration d’une douche avec revêtement en carreaux"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                 loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Background */}
      <section className="relative py-20 md:py-28 xl:py-32 bg-forest text-white overflow-hidden">
        <div className="absolute inset-0">
           <img src="/photos/tile-white-shower.jpg" alt="" className="w-full h-full object-cover opacity-20" loading="lazy" />
          <div className="absolute inset-0 bg-forest/80"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-4xl">
             <span className="section-eyebrow text-white font-bold tracking-widest uppercase text-sm mb-4">Parlons de votre projet</span>
             <h2 className="text-3xl sm:text-4xl xl:text-6xl font-extrabold mb-6 leading-tight">Un projet de céramique à réaliser?</h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              Plancher, surface commerciale ou installation spécialisée : Céramique Cardinal est disponible pour discuter de votre projet. Appelez-nous au <a href="tel:+15144449393" className="underline underline-offset-4">(514) 444-9393</a>.
          </p>
          <Link href="/soumission">
            <Button size="lg" className="min-h-14 md:h-16 px-6 md:px-10 text-sm sm:text-lg font-bold uppercase tracking-wider">
              Demander une soumission
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ & Contact */}
      <FAQContactSection />
    </MainLayout>
  );
}
