import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { TestimonialsSection, FAQContactSection } from "@/components/SharedSections";
import {
  ArrowRight,
  HardHat,
  CheckCircle,
  Building2,
  Ruler,
  ChevronRight,
  TreePine,
  Axe,
  Scissors,
  Leaf,
  ShieldCheck,
  Award,
  GraduationCap,
} from "lucide-react";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col">
        <div className="absolute inset-0 bg-forest">
          <img
            className="w-full h-full object-cover opacity-90"
            src="/photos/arbres-aubois/generated/hero.jpg"
            alt=""
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-forest/65"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center pt-[150px] xl:pt-[169px] pb-8 sm:pb-10">
          <div className="max-w-3xl 2xl:max-w-5xl">
            <div className="section-eyebrow inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-white border border-primary/30 mb-6 backdrop-blur-sm">
              <span className="text-xs font-bold tracking-widest uppercase">Élagage · Essouchement · Abattage</span>
            </div>
            
            <h1 className="text-[clamp(2.5rem,5vw,5.5rem)] font-extrabold text-white leading-[1.08] mb-5 sm:mb-6 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
              Élagage et abattage d’arbres à Montmagny.
            </h1>
            
            <p className="text-base sm:text-lg xl:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              Élagage, essouchement, abattage, déchiquetage de branches et taille de haies à Montmagny, Berthier-sur-Mer et L’Islet. Service d’Arbres Aubois adapte chaque intervention à votre propriété.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12 xl:mb-16">
              <Link href="/soumission">
                <Button size="lg" className="h-14 px-5 sm:px-8 text-sm sm:text-base font-bold uppercase tracking-wider w-full sm:w-auto">
                  Demander une soumission <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="#services">
                <Button size="lg" variant="outline" className="h-14 px-5 sm:px-8 text-sm sm:text-base font-bold uppercase tracking-wider w-full sm:w-auto bg-white/5 text-white border-white/20 hover:bg-white hover:text-secondary">
                  Découvrir nos services
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-white/10">
              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-1">25<span className="text-primary">+</span></p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide sm:tracking-widest text-white/75 font-bold">Années d'expérience</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-1">3 500<span className="text-primary">+</span></p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide sm:tracking-widest text-white/75 font-bold">Travaux réalisés</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-1">2<span className="text-primary"> M$</span></p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide sm:tracking-widest text-white/75 font-bold">Assurance responsabilité</p>
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
                <img src="/photos/arbres-aubois/client/lift-equipment.jpg" alt="Lift sur roues et déchiqueteuse stationnés dans une cour résidentielle" className="w-full h-full object-cover object-bottom" loading="lazy" />
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
                Depuis 25 ans, Service d’Arbres Aubois accompagne les propriétaires pour l’élagage, l’essouchement, l’abattage, le déchiquetage de branches, la taille de haies et les conseils arboricoles. L’équipe dessert Montmagny, Berthier-sur-Mer et L’Islet.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Son nouveau lift sur roues facilite l’élagage des arbres de grande hauteur, l’accès aux cours arrière et le démontage dans des espaces restreints, tout en limitant l’impact sur le terrain. Chaque intervention est planifiée selon les lieux et les travaux à réaliser.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Plus de 3 500 travaux réalisés",
                  "Assurance responsabilité de 2 000 000 $",
                  "Certification en arboriculture",
                  "DEP en aménagement de la foresterie — École de foresterie de Duchesnay"
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
                Élagage, essouchement, abattage, déchiquetage de branches, taille de haies et conseils arboricoles à Montmagny, Berthier-sur-Mer et L’Islet.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Élagage d’arbres",
                desc: "Taille et entretien adaptés à l’arbre, à son emplacement et aux besoins de votre propriété.",
                img: "/photos/arbres-aubois/generated/service-pruning.jpg",
                alt: "Visuel illustratif d’un érable mature aux branches entretenues",
                icon: <TreePine className="w-6 h-6" />
              },
              {
                title: "Essouchement",
                desc: "Rognage de souches pour libérer l’espace après un abattage et faciliter l’aménagement du terrain.",
                img: "/photos/arbres-aubois/generated/service-stump-grinding.jpg",
                alt: "Visuel illustratif d’une rogneuse jaune près d’une souche",
                icon: <Axe className="w-6 h-6" />
              },
              {
                title: "Abattage d’arbres",
                desc: "Intervention adaptée aux dimensions de l’arbre, à son emplacement et aux éléments qui l’entourent.",
                img: "/photos/arbres-aubois/generated/service-removal.jpg",
                alt: "Visuel illustratif de troncs déposés après un abattage",
                icon: <Ruler className="w-6 h-6" />
              },
              {
                title: "Déchiquetage de branches",
                desc: "Déchiquetage des branches après les travaux pour dégager l’espace et faciliter le nettoyage du terrain.",
                img: "/photos/arbres-aubois/generated/service-chipping.jpg",
                alt: "Visuel illustratif d’une déchiqueteuse et de copeaux de bois",
                icon: <Building2 className="w-6 h-6" />
              },
              {
                title: "Taille de haies",
                desc: "Entretien des haies selon leurs dimensions, leur accessibilité et les besoins de votre propriété.",
                img: "/photos/arbres-aubois/generated/service-hedges.jpg",
                alt: "Visuel illustratif d’une haie de cèdres taillée",
                icon: <HardHat className="w-6 h-6" />
              },
              {
                title: "Conseil arboricole",
                desc: "Une discussion pour évaluer votre situation et déterminer les travaux à envisager pour vos arbres.",
                img: "/photos/arbres-aubois/generated/service-advice.jpg",
                alt: "Visuel illustratif d’arbres matures dans une cour résidentielle",
                icon: <Leaf className="w-6 h-6" />
              }
            ].map((srv, i) => (
              <div key={i} data-testid={`card-service-${i}`} className="bg-white border border-border group hover:-translate-y-2 transition-transform duration-300">
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
            <p className="text-white/80 mt-4">Les renseignements sur la couverture et le parcours professionnel de l’équipe.</p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12 items-center max-w-6xl mx-auto">
            {[
              { id: "assurance", icon: ShieldCheck, title: "Assurance responsabilité", detail: "Couverture de 2 000 000 $" },
              {
                id: "arboriculture",
                icon: Award,
                title: "Certification en arboriculture",
                detail: "Voir le référentiel de qualification au Québec",
                href: "https://www.quebec.ca/emploi/informer-metier-profession/profession-metier-reglemente/connaitre-certificats-qualification-obligatoire/arboriculture",
              },
              { id: "formation", icon: GraduationCap, title: "DEP en aménagement de la foresterie", detail: "École de foresterie de Duchesnay" },
            ].map(({ id, icon: Icon, title, detail, href }) => (
              <figure key={id} data-testid={`credential-${id}`} className="flex min-h-[330px] flex-col items-center justify-center gap-5 overflow-visible py-3 text-center">
                <Icon className="h-14 w-14 text-primary" aria-hidden="true" />
                <figcaption>
                  <h3 className="text-xl font-bold leading-snug text-white">{title}</h3>
                  {detail && (href ? (
                    <a
                      className="mt-3 inline-block text-base leading-relaxed text-white/75 underline underline-offset-4 hover:text-white"
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p className="mt-3 text-base leading-relaxed text-white/75">{detail}</p>
                  ))}
                </figcaption>
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
               La galerie combine des photos d’intervention avec des visuels générés à titre illustratif; les images générées ne représentent pas des chantiers précis.
            </p>
          </div>
          <div className="grid auto-rows-[240px] grid-cols-1 gap-4 sm:auto-rows-[220px] sm:grid-cols-2 md:gap-5 xl:auto-rows-[220px] xl:grid-cols-3">
            {[
              { src: "/photos/arbres-aubois/client/job-lift-wide-02.jpg", alt: "Travaux d’élagage en hauteur avec le lift sur roues et une déchiqueteuse", width: 1600, height: 1200, layout: "sm:col-span-2 sm:row-span-2" },
              { src: "/photos/arbres-aubois/client/job-lift-wide-01.jpg", alt: "Arboriste dans une nacelle lors de l’élagage d’un arbre", width: 1600, height: 1200, layout: "" },
              { src: "/photos/arbres-aubois/client/job-lift-vertical.jpg", alt: "Intervention en hauteur dans un arbre près d’une résidence", width: 1200, height: 1600, layout: "xl:row-span-2" },
              { src: "/photos/arbres-aubois/generated/gallery-tree.jpg", alt: "Visuel illustratif d’un grand conifère sur un terrain résidentiel", width: 1024, height: 1024, layout: "" },
              { src: "/photos/arbres-aubois/generated/gallery-cleanup.jpg", alt: "Visuel illustratif d’une déchiqueteuse et de branches après nettoyage", width: 1024, height: 1024, layout: "" },
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
           <img src="/photos/arbres-aubois/generated/cta.jpg" alt="" className="w-full h-full object-cover opacity-45" loading="lazy" />
          <div className="absolute inset-0 bg-forest/65"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-4xl">
             <span className="section-eyebrow text-white font-bold tracking-widest uppercase text-sm mb-4">Parlons de votre projet</span>
              <h2 className="text-3xl sm:text-4xl xl:text-6xl font-extrabold mb-6 leading-tight">Vos arbres ont besoin d’attention?</h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
               Élagage, essouchement, abattage, déchiquetage de branches ou taille de haies : Service d’Arbres Aubois est disponible pour discuter de vos besoins. Appelez-nous au <a href="tel:+14189418897" className="underline underline-offset-4">(418) 941-8897</a>.
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
