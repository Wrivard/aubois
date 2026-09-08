import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { TestimonialsSection, FAQContactSection } from "@/components/SharedSections";
import { ArrowRight, HardHat, CheckCircle, Building2, Ruler, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[100dvh] flex flex-col">
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
          <div className="absolute inset-0 bg-[#1B1B1B]/55"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center pt-20 pb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary-foreground border border-primary/30 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest uppercase">Entrepreneur Général RBQ</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
              Bâtir solide. <br />
              <span className="text-primary">Livrer juste.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              Chez Lavallée Construction, nous ne faisons pas de compromis sur la qualité. Des fondations aux finitions, chaque projet est géré avec la rigueur d'un chantier parfaitement maîtrisé.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/soumission">
                <Button size="lg" className="h-14 px-8 text-base font-bold uppercase tracking-wider w-full sm:w-auto">
                  Obtenir une soumission <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="#realisations">
                <Button size="lg" variant="outline" className="h-14 px-8 text-base font-bold uppercase tracking-wider w-full sm:w-auto bg-white/5 text-white border-white/20 hover:bg-white hover:text-secondary">
                  Voir nos projets
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-4xl font-extrabold text-white mb-1">15<span className="text-primary">+</span></p>
                <p className="text-xs uppercase tracking-widest text-white/75 font-bold">Années d'expérience</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-white mb-1">250<span className="text-primary">+</span></p>
                <p className="text-xs uppercase tracking-widest text-white/75 font-bold">Projets livrés</p>
              </div>
              <div className="hidden md:block">
                <p className="text-4xl font-extrabold text-white mb-1">100<span className="text-primary">%</span></p>
                <p className="text-xs uppercase tracking-widest text-white/75 font-bold">Garantie Qualité</p>
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
                <img src="/reno-general.jpg" alt="Rénovation générale d'une aire de vie lumineuse" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square bg-primary -z-0 clip-diagonal"></div>
              
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-secondary text-white p-6 shadow-xl z-20 hidden md:block w-48">
                <HardHat className="w-10 h-10 text-primary mb-4" />
                <p className="font-bold text-lg leading-tight">La sécurité avant tout.</p>
              </div>
            </div>
            
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">À propos de nous</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-secondary">La rigueur québécoise à votre service.</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Fondée sur des principes de transparence, de respect des échéanciers et d'excellence d'exécution, Lavallée Construction s'impose comme le partenaire de choix pour vos projets d'envergure.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Notre équipe cumule une expertise pointue tant dans le secteur résidentiel haut de gamme que commercial. Nous ne sommes pas juste des constructeurs ; nous sommes des gestionnaires de risques.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Équipe certifiée et continuellement formée",
                  "Transparence totale sur les coûts et matériaux",
                  "Respect scrupuleux des normes de la RBQ",
                  "Chantiers propres et sécuritaires"
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
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Nos Services</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-secondary">Expertise complète.</h2>
            <p className="text-lg text-muted-foreground">
              De la conception initiale à la remise des clés, nous couvrons tous les aspects de la construction avec le même niveau d'exigence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Résidentiel",
                desc: "Construction de maisons neuves haut de gamme et chalets. Design moderne et matériaux durables.",
                img: "/reno-cuisine.jpg",
                icon: <Building2 className="w-6 h-6" />
              },
              {
                title: "Commercial",
                desc: "Aménagement de bureaux, commerces et bâtiments industriels. Respect strict des échéanciers critiques.",
                img: "/reno-sous-sol.jpg",
                icon: <Ruler className="w-6 h-6" />
              },
              {
                title: "Rénovation Majeure",
                desc: "Agrandissements, ajouts d'étages et rénovations intérieures complètes. Une transformation sans tracas.",
                img: "/reno-salle-de-bain.jpg",
                icon: <HardHat className="w-6 h-6" />
              }
            ].map((srv, i) => (
              <div key={i} className="bg-white border border-border group hover:-translate-y-2 transition-transform duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={srv.img} alt={srv.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-primary text-white p-3 shadow-lg">
                    {srv.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-secondary">{srv.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{srv.desc}</p>
                  <a href="/soumission" className="inline-flex items-center font-bold text-primary hover:text-secondary transition-colors uppercase tracking-wider text-sm">
                    En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
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
              <h2 className="text-4xl md:text-5xl font-extrabold">Des fondations solides. Des résultats probants.</h2>
            </div>
            <Link href="/soumission">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-secondary uppercase tracking-wider font-bold">
                Votre projet ici
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "/projet-cuisine.jpg", title: "Cuisine des Érables", tag: "Cuisine" },
              { img: "/projet-agrandissement.jpg", title: "Agrandissement Beaulieu", tag: "Agrandissement" },
              { img: "/projet-salle-de-bain.jpg", title: "Salle de bain Saint-Lambert", tag: "Rénovation" },
            ].map((proj, i) => (
              <div key={i} className="group relative overflow-hidden bg-black aspect-[4/3]">
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-black/55 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 mb-3 w-fit">{proj.tag}</span>
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
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">En images</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-secondary">Des espaces pensés pour être vécus.</h2>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Du patio à l’aménagement intérieur, chaque détail est exécuté avec la même précision.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <figure className="overflow-hidden aspect-[16/10] bg-muted">
              <img
                src="/reno-patio.jpg"
                alt="Patio contemporain aménagé pour les soirées extérieures"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </figure>
            <figure className="overflow-hidden aspect-[16/10] bg-muted">
              <img
                src="/projet-patio.jpg"
                alt="Projet de patio résidentiel entouré de verdure"
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
          <img src="/cta-bg.jpg" alt="Blueprints" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-[#1B1B1B]/80"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Prêt à bâtir l'avenir ?</h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            Discutez de votre projet avec nos experts. Nous vous fournirons une estimation détaillée et transparente.
          </p>
          <Link href="/soumission">
            <Button size="lg" className="h-16 px-10 text-lg font-bold uppercase tracking-wider">
              Débuter votre soumission en ligne
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ & Contact */}
      <FAQContactSection />
    </MainLayout>
  );
}
