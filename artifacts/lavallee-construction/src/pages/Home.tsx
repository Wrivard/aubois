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
            src="/photos/arbres-aubois/hero.jpg"
            alt=""
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-forest/65"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center pt-[150px] xl:pt-[169px] pb-8 sm:pb-10">
          <div className="max-w-3xl 2xl:max-w-5xl">
            <div className="section-eyebrow inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-white border border-primary/30 mb-6 backdrop-blur-sm">
              <span className="text-xs font-bold tracking-widest uppercase">Élagage · Abattage · Taille de haies</span>
            </div>
            
            <h1 className="text-[clamp(2.5rem,5vw,5.5rem)] font-extrabold text-white leading-[1.08] mb-5 sm:mb-6 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
              Vos arbres entre de bonnes mains.
            </h1>
            
            <p className="text-base sm:text-lg xl:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              Élagage, abattage d’arbres et taille de haies dans le secteur de Montmagny et de Berthier-sur-Mer. Service d’Arbres Aubois adapte chaque intervention à votre propriété.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12 xl:mb-16">
              <Link href="/soumission">
                <Button size="lg" className="h-14 px-5 sm:px-8 text-sm sm:text-base font-bold uppercase tracking-wider w-full sm:w-auto">
                  Demander une soumission <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="#realisations">
                <Button size="lg" variant="outline" className="h-14 px-5 sm:px-8 text-sm sm:text-base font-bold uppercase tracking-wider w-full sm:w-auto bg-white/5 text-white border-white/20 hover:bg-white hover:text-secondary">
                  Découvrir nos services
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
                <img src="/photos/arbres-aubois/about.jpg" alt="Photo d’illustration d’un arbre dans un environnement naturel" className="w-full h-full object-cover object-bottom" loading="lazy" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square bg-primary -z-0 clip-diagonal"></div>
              
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-forest text-white p-6 shadow-xl z-20 hidden xl:block w-48">
                <HardHat className="w-10 h-10 text-primary mb-4" />
                <p className="font-bold text-lg leading-tight">Des interventions adaptées à votre terrain.</p>
              </div>
            </div>
            
            <div>
              <span className="section-eyebrow text-secondary font-bold tracking-widest uppercase text-sm mb-4">À propos de Service d’Arbres Aubois</span>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold mb-6 lg:mb-8 text-secondary">Un service professionnel pour vos arbres.</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Les arbres contribuent à la beauté, au confort et au caractère de votre propriété. Leur entretien demande des interventions adaptées à leur état et à leur environnement.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Service d’Arbres Aubois se spécialise dans l’élagage, l’abattage et la taille de haies. Nous évaluons les travaux nécessaires en tenant compte de l’emplacement des arbres et des particularités du terrain.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Élagage et entretien des arbres",
                  "Abattage d’arbres en milieu résidentiel",
                  "Taille et entretien de haies",
                  "Interventions en hauteur, selon le projet"
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
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold mb-6 text-secondary">Des services adaptés à vos arbres.</h2>
            <p className="text-lg text-muted-foreground">
                Élagage, abattage, taille de haies et entretien des arbres à Montmagny et dans le secteur de Berthier-sur-Mer. Les photos présentées sont des images d’illustration.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Élagage d’arbres",
                desc: "Travaux d’élagage adaptés aux caractéristiques de l’arbre, à son emplacement et aux besoins de votre propriété.",
                img: "/photos/arbres-aubois/service-1.jpg",
                icon: <Building2 className="w-6 h-6" />
              },
              {
                title: "Abattage d’arbres",
                desc: "Intervention adaptée aux dimensions de l’arbre, à son emplacement et aux éléments qui l’entourent.",
                img: "/photos/arbres-aubois/service-2.jpg",
                icon: <Ruler className="w-6 h-6" />
              },
              {
                title: "Taille de haies",
                desc: "Entretien des haies selon leurs dimensions, leur accessibilité et les besoins de votre propriété.",
                img: "/photos/arbres-aubois/service-3.jpg",
                icon: <HardHat className="w-6 h-6" />
              },
              {
                title: "Entretien des arbres",
                desc: "Interventions ciblées pour entretenir les arbres présents sur votre terrain et répondre à leurs besoins.",
                img: "/photos/arbres-aubois/service-4.jpg",
                icon: <Building2 className="w-6 h-6" />
              },
              {
                title: "Travaux en hauteur",
                desc: "Interventions nécessitant un accès en hauteur, avec des équipements adaptés aux conditions du terrain.",
                img: "/photos/arbres-aubois/service-5.jpg",
                icon: <Ruler className="w-6 h-6" />
              },
              {
                title: "Évaluation de projet arboricole",
                desc: "Discussion des travaux d’élagage, d’abattage ou de taille nécessaires pour votre propriété.",
                img: "/photos/arbres-aubois/service-6.jpg",
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
              <p className="text-white/80 mt-4">Découvrez les types d’interventions arboricoles proposés par Service d’Arbres Aubois. Les images sont des illustrations et ne représentent pas des réalisations confirmées.</p>
            </div>
            <Link href="/soumission">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-secondary uppercase tracking-wider font-bold">
                Discuter de mon projet
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              { img: "/photos/arbres-aubois/project-1.jpg", title: "Abattage en milieu résidentiel", tag: "Illustration", alt: "Photo d’illustration d’un milieu résidentiel arboré" },
              { img: "/photos/arbres-aubois/project-2.jpg", title: "Entretien des arbres", tag: "Illustration", alt: "Photo d’illustration d’arbres dans un environnement naturel" },
              { img: "/photos/arbres-aubois/project-3.jpg", title: "Travaux arboricoles", tag: "Illustration", alt: "Photo d’illustration d’un paysage boisé" },
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
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-secondary">Les arbres en images.</h2>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
               Les photos ci-dessous sont des images d’illustration. Elles ne représentent pas des réalisations de Service d’Arbres Aubois.
            </p>
          </div>
           <div className="grid sm:grid-cols-2 gap-6">
            <figure className="overflow-hidden aspect-[16/10] bg-muted">
              <img
                src="/photos/arbres-aubois/gallery-1.jpg"
                  alt="Photo d’illustration d’un paysage boisé"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                 loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden aspect-[16/10] bg-muted">
              <img
                src="/photos/arbres-aubois/gallery-2.jpg"
                  alt="Photo d’illustration d’un environnement naturel avec des arbres"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                 loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden aspect-[16/10] bg-muted">
              <img
                src="/photos/arbres-aubois/gallery-3.jpg"
                  alt="Photo d’illustration d’une zone boisée"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                 loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden aspect-[16/10] bg-muted">
              <img
                src="/photos/arbres-aubois/gallery-4.jpg"
                  alt="Photo d’illustration d’un paysage naturel"
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
           <img src="/photos/arbres-aubois/cta.jpg" alt="" className="w-full h-full object-cover opacity-20" loading="lazy" />
          <div className="absolute inset-0 bg-forest/80"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-4xl">
             <span className="section-eyebrow text-white font-bold tracking-widest uppercase text-sm mb-4">Parlons de votre projet</span>
              <h2 className="text-3xl sm:text-4xl xl:text-6xl font-extrabold mb-6 leading-tight">Vos arbres ont besoin d’attention?</h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
               Élagage, abattage ou taille de haies : Service d’Arbres Aubois est disponible pour discuter de vos besoins. Appelez-nous au <a href="tel:+14189418897" className="underline underline-offset-4">(418) 941-8897</a>.
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
