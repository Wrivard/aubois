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
        <div className="absolute inset-0 bg-[#1B1B1B]">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            poster="/lavallee-hero-poster.jpg"
            className="w-full h-full object-cover opacity-90"
          >
            <source src="/lavallee-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#1B1B1B]/65"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center pt-20 pb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary-foreground border border-primary/30 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest uppercase">Victoriaville · visuels d'illustration</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
              Construire avec rigueur. <br />
              <span className="text-primary">Réaliser avec fierté.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              O. Renaud Construction Inc. accompagne ses clients dans la réalisation de projets de construction à Victoriaville, avec une approche professionnelle et un souci constant du travail bien fait.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/soumission">
                <Button size="lg" className="h-14 px-8 text-base font-bold uppercase tracking-wider w-full sm:w-auto">
                  Demander une soumission <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="#realisations">
                <Button size="lg" variant="outline" className="h-14 px-8 text-base font-bold uppercase tracking-wider w-full sm:w-auto bg-white/5 text-white border-white/20 hover:bg-white hover:text-secondary">
                  Voir nos réalisations
                </Button>
              </a>
            </div>

            {/* Engagements */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-white mb-1">Écoute<span className="text-primary">.</span></p>
                <p className="text-xs uppercase tracking-widest text-white/75 font-bold">Comprendre vos besoins</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-white mb-1">Planification<span className="text-primary">.</span></p>
                <p className="text-xs uppercase tracking-widest text-white/75 font-bold">Avancer avec méthode</p>
              </div>
              <div className="hidden md:block">
                <p className="text-2xl md:text-3xl font-extrabold text-white mb-1">Fierté<span className="text-primary">.</span></p>
                <p className="text-xs uppercase tracking-widest text-white/75 font-bold">Le travail bien fait</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="a-propos" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square bg-muted relative z-10 clip-diagonal overflow-hidden">
                <img src="/reno-general.jpg" alt="Illustration d'un espace intérieur rénové" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square bg-primary -z-0 clip-diagonal"></div>
              
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-secondary text-white p-6 shadow-xl z-20 hidden md:block w-48">
                <HardHat className="w-10 h-10 text-primary mb-4" />
                <p className="font-bold text-lg leading-tight">Votre projet, notre engagement.</p>
              </div>
            </div>
            
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">À propos de O. Renaud Construction Inc.</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-secondary">Votre projet, notre engagement.</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                O. Renaud Construction Inc. est une entreprise de construction basée à Victoriaville. Chaque projet comporte ses propres défis, besoins et objectifs.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nous accompagnons nos clients dans leurs projets résidentiels et commerciaux, de construction et de rénovation, en misant sur la planification, la collaboration et le souci du travail bien fait.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Écouter et comprendre les besoins du projet",
                  "Organiser clairement les différentes étapes",
                  "Collaborer tout au long des travaux",
                  "Porter attention aux détails de l'exécution"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-secondary">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link href="/soumission">
                <Button className="font-bold uppercase tracking-wider">
                  Discuter de votre projet
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Nos Services</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-secondary">Construire et transformer votre propriété.</h2>
            <p className="text-lg text-muted-foreground">
                Votre maison ou votre bâtiment doit évoluer avec vos besoins. Découvrez les types de projets dont nous pouvons discuter avec vous à Victoriaville.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Construction résidentielle",
                desc: "Accompagnement dans la réalisation de projets résidentiels adaptés aux besoins du propriétaire et aux particularités du projet.",
                img: "/reno-cuisine.jpg",
                icon: <Building2 className="w-6 h-6" />
              },
              {
                title: "Construction commerciale",
                desc: "Participation à des projets commerciaux nécessitant coordination, efficacité et qualité d'exécution.",
                img: "/reno-sous-sol.jpg",
                icon: <Ruler className="w-6 h-6" />
              },
              {
                title: "Rénovation",
                desc: "Transformation et amélioration de bâtiments existants afin de les adapter à de nouveaux besoins.",
                img: "/reno-salle-de-bain.jpg",
                icon: <HardHat className="w-6 h-6" />
              },
              {
                title: "Agrandissement",
                desc: "Création de nouveaux espaces permettant de faire évoluer un bâtiment selon les besoins de ses occupants.",
                img: "/projet-agrandissement.jpg",
                icon: <Building2 className="w-6 h-6" />
              },
              {
                title: "Charpenterie et structure",
                desc: "Travaux de construction et de charpenterie intégrés aux projets, selon les besoins à évaluer.",
                img: "/reno-general.jpg",
                icon: <Ruler className="w-6 h-6" />
              },
              {
                title: "Gestion et réalisation de projet",
                desc: "Coordination des étapes nécessaires pour faire progresser un projet de construction de façon structurée.",
                img: "/quote-header.jpg",
                icon: <HardHat className="w-6 h-6" />
              }
            ].map((srv, i) => (
              <div key={i} className="bg-white border border-border group hover:-translate-y-2 transition-transform duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={srv.img} alt={`Image d'illustration — ${srv.title.toLowerCase()}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-primary text-secondary p-3 shadow-lg">
                    {srv.icon}
                  </div>
                </div>
                <div className="p-8">
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
      <section id="realisations" className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Nos Réalisations</span>
              <h2 className="text-4xl md:text-5xl font-extrabold">Des projets commerciaux qui prennent forme.</h2>
              <p className="text-white/80 mt-4">O. Renaud Construction Inc. a contribué au nouveau garage Integra Tire / Pneus FT à Victoriaville. Pour les autres types de projets, discutons de vos besoins.</p>
            </div>
            <Link href="/soumission">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-secondary uppercase tracking-wider font-bold">
                Discuter d'un projet commercial
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "/projet-cuisine.jpg", title: "Nouveau garage Integra Tire / Pneus FT — participation confirmée à Victoriaville (photo d'illustration)", tag: "Commercial" },
              { img: "/projet-agrandissement.jpg", title: "Agrandissement — discutons de votre projet (photo d'illustration)", tag: "Agrandissement" },
              { img: "/projet-salle-de-bain.jpg", title: "Rénovation — discutons de votre projet (photo d'illustration)", tag: "Rénovation" },
            ].map((proj, i) => (
              <div key={i} className="group relative overflow-hidden bg-black aspect-[4/3]">
                <img src={proj.img} alt={`Photo d'illustration sans lien avec les travaux de O. Renaud Construction : ${proj.tag.toLowerCase()}`} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <span className="absolute top-3 right-3 bg-secondary text-white px-2 py-1 text-xs font-bold">Photo d'illustration</span>
                <div className="absolute inset-0 bg-black/55 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block bg-primary text-secondary text-xs font-bold uppercase tracking-widest px-3 py-1 mb-3 w-fit">{proj.tag}</span>
                  <h3 className="text-2xl font-bold">{proj.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
                <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">En images</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-secondary">Un projet bien coordonné, du début à la fin.</h2>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Discussion, évaluation, planification, réalisation et finalisation : notre approche vise à garder le projet structuré et la communication efficace. Photos d'illustration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <figure className="overflow-hidden aspect-[16/10] bg-muted">
              <img
                src="/reno-patio.jpg"
                alt="Illustration d'un espace extérieur, non attribué à O. Renaud Construction"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </figure>
            <figure className="overflow-hidden aspect-[16/10] bg-muted">
              <img
                src="/projet-patio.jpg"
                alt="Illustration d'un patio résidentiel, non attribué à O. Renaud Construction"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Background */}
      <section className="relative py-32 bg-[#1B1B1B] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/cta-bg.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-[#1B1B1B]/80"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Un projet à réaliser?</h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              Résidentiel, commercial, construction ou rénovation : présentez-nous votre projet et voyons comment O. Renaud Construction Inc. peut y contribuer.
          </p>
          <Link href="/soumission">
            <Button size="lg" className="h-16 px-10 text-lg font-bold uppercase tracking-wider">
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
