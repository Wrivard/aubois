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
              <a href="#certifications">
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
                <img src="/photos/arbres-aubois/about.jpg" alt="Arboriste effectuant des travaux dans un arbre" className="w-full h-full object-cover object-bottom" loading="lazy" />
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
                  "Assurance responsabilité de 5 000 000 $",
                  "Certification Certified Arborist — ISA",
                  "Formation en élagage — Centre horticole de Laval",
                  "Interventions en hauteur avec une nacelle, selon le projet"
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
                Élagage, abattage, taille de haies et entretien des arbres à Montmagny et dans le secteur de Berthier-sur-Mer.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Élagage d’arbres",
                desc: "Travaux d’élagage adaptés aux caractéristiques de l’arbre, à son emplacement et aux besoins de votre propriété.",
                img: "/photos/arbres-aubois/service-elagage.webp",
                alt: "Arbres taillés dans un environnement résidentiel",
                icon: <Building2 className="w-6 h-6" />
              },
              {
                title: "Abattage d’arbres",
                desc: "Intervention adaptée aux dimensions de l’arbre, à son emplacement et aux éléments qui l’entourent.",
                img: "/photos/arbres-aubois/service-abattage.jpg",
                alt: "Arboriste équipé travaillant dans un arbre",
                icon: <Ruler className="w-6 h-6" />
              },
              {
                title: "Taille de haies",
                desc: "Entretien des haies selon leurs dimensions, leur accessibilité et les besoins de votre propriété.",
                img: "/photos/arbres-aubois/service-haies.webp",
                alt: "Haie entretenue le long d’une propriété résidentielle",
                icon: <HardHat className="w-6 h-6" />
              },
              {
                title: "Entretien des arbres",
                desc: "Interventions ciblées pour entretenir les arbres présents sur votre terrain et répondre à leurs besoins.",
                img: "/photos/arbres-aubois/service-entretien.jpg",
                alt: "Arboriste qui travaille dans un arbre à l’aide de cordes",
                icon: <Building2 className="w-6 h-6" />
              },
              {
                title: "Travaux en hauteur",
                desc: "Interventions nécessitant un accès en hauteur, avec des équipements adaptés aux conditions du terrain.",
                img: "/photos/arbres-aubois/service-hauteur.webp",
                alt: "Équipement de Service d’Arbres Aubois prêt pour des travaux arboricoles",
                icon: <Ruler className="w-6 h-6" />
              },
              {
                title: "Évaluation de projet arboricole",
                desc: "Discussion des travaux d’élagage, d’abattage ou de taille nécessaires pour votre propriété.",
                img: "/photos/arbres-aubois/service-evaluation.jpg",
                alt: "Arbres dans une cour arrière lors de l’évaluation d’un projet arboricole",
                icon: <HardHat className="w-6 h-6" />
              }
            ].map((srv, i) => (
              <div key={i} className="bg-white border border-border group hover:-translate-y-2 transition-transform duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={srv.img} alt={srv.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
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

      {/* Certifications Section */}
      <section id="certifications" className="py-16 md:py-20 xl:py-24 bg-forest text-white scroll-mt-32 xl:scroll-mt-36">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
            <span className="section-eyebrow text-white font-bold tracking-widest uppercase text-sm mb-4">Qualifications</span>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold">Assurance et certifications</h2>
            <p className="text-white/80 mt-4">Les accréditations et la couverture présentées ci-dessous proviennent des documents fournis pour Service d’Arbres Aubois.</p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12 items-center max-w-6xl mx-auto">
            {[
              { img: "/certifications/assurance-responsabilite.png", alt: "Badge d’assurance responsabilité indiquant une couverture de 5 000 000 $" },
              { img: "/certifications/isa-certified-arborist.png", alt: "Insigne Certified Arborist de l’ISA" },
              { img: "/certifications/elagage-centre-horticole-laval.png", alt: "Badge de formation en élagage du Centre de formation horticole de Laval" },
            ].map((credential) => (
              <figure key={credential.img} className="flex min-h-[330px] items-center justify-center overflow-visible py-3">
                <img src={credential.img} alt={credential.alt} className="block h-auto max-h-[300px] w-full max-w-[320px] object-contain mix-blend-screen" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="en-images" className="py-16 md:py-20 xl:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
                <span className="section-eyebrow text-secondary font-bold tracking-widest uppercase text-sm mb-4">En images</span>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-secondary">Les arbres en images.</h2>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
               Découvrez les interventions et les équipements photographiés par Service d’Arbres Aubois.
            </p>
          </div>
          <div className="grid auto-rows-[240px] grid-cols-1 gap-4 sm:auto-rows-[220px] sm:grid-cols-2 md:gap-5 xl:auto-rows-[220px] xl:grid-cols-3">
            {[
              { src: "/photos/arbres-aubois/gallery-1.jpg", alt: "Grand conifère sur un terrain résidentiel", width: 1536, height: 2048, layout: "sm:col-span-2 sm:row-span-2" },
              { src: "/photos/arbres-aubois/gallery-6.jpg", alt: "Arboriste en nacelle lors de travaux sur un arbre", width: 1536, height: 2048, layout: "" },
              { src: "/photos/arbres-aubois/gallery-10.jpg", alt: "Arboriste en équipement de sécurité près d’un arbre", width: 1440, height: 1920, layout: "xl:row-span-2" },
              { src: "/photos/arbres-aubois/gallery-souche.webp", alt: "Broyeur à proximité d’une souche après une intervention arboricole", width: 1462, height: 1950, layout: "" },
              { src: "/photos/arbres-aubois/gallery-9.jpg", alt: "Arboristes équipés lors d’une intervention", width: 1440, height: 1920, layout: "" },
            ].map((photo) => (
              <figure key={photo.src} className={`group relative overflow-hidden bg-muted ${photo.layout}`}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Background */}
      <section className="relative py-20 md:py-28 xl:py-32 bg-forest text-white overflow-hidden">
        <div className="absolute inset-0">
           <img src="/photos/arbres-aubois/cta.jpg" alt="" className="w-full h-full object-cover opacity-45" loading="lazy" />
          <div className="absolute inset-0 bg-forest/65"></div>
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
