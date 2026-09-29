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
            poster="/photos/orenaud-15.jpg"
            className="w-full h-full object-cover opacity-90"
          >
            <source src="/lavallee-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#1B1B1B]/65"></div>
        </div>

        <div className="container hero-content relative z-10 mx-auto px-6 md:px-12 flex-1 flex flex-col justify-start pt-36 pb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-white border border-primary/30 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest uppercase">Pose de céramique à Thetford Mines</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
              La précision au cœur <br />
              <span className="text-primary">de chaque installation.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              Pose de céramique résidentielle et commerciale dans la région de Chaudière-Appalaches. Des installations soignées pour donner caractère et durabilité à vos espaces.
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
                <p className="text-xs uppercase tracking-widest text-white/75 font-bold">Garantie qualité</p>
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
                <img src="/photos/orenaud-03.jpg" alt="Image d’illustration d’un espace intérieur" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square bg-primary -z-0 clip-diagonal"></div>
              
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-secondary text-white p-6 shadow-xl z-20 hidden md:block w-48">
                <HardHat className="w-10 h-10 text-primary mb-4" />
                <p className="font-bold text-lg leading-tight">La précision dans chaque détail.</p>
              </div>
            </div>
            
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">À propos de Céramiques Appalaches inc.</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-secondary">La céramique, installée avec précision.</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Céramiques Appalaches inc. est un entrepreneur spécialisé en pose de céramique et de revêtements en carreaux dans la région de Chaudière-Appalaches.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Planchers, murs, salles de bain, cuisines ou installations décoratives : chaque projet demande une préparation adéquate, des découpes précises et une attention particulière aux détails.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Pose de céramique résidentielle et commerciale",
                  "Installation de carreaux sur murs et planchers",
                  "Alignements et découpes soignés",
                  "Motifs et compositions selon le projet"
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
      <section id="services" className="py-24 bg-muted border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Nos Services</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-secondary">La céramique adaptée à votre espace.</h2>
            <p className="text-lg text-muted-foreground">
                Découvrez nos services de pose de céramique pour les espaces résidentiels et commerciaux.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Salles de bain",
                desc: "Pose de céramique pour les planchers, murs, douches et différentes surfaces de salle de bain.",
                img: "/photos/orenaud-01.jpg",
                icon: <Building2 className="w-6 h-6" />
              },
              {
                title: "Cuisines et dosserets",
                desc: "Installation de carreaux pour les dosserets, murs et planchers afin de compléter l’aménagement de votre cuisine.",
                img: "/photos/orenaud-02.jpg",
                icon: <Ruler className="w-6 h-6" />
              },
              {
                title: "Planchers de céramique",
                desc: "Pose de céramique pour créer des surfaces durables, uniformes et adaptées à différents espaces.",
                img: "/photos/orenaud-06.jpg",
                icon: <HardHat className="w-6 h-6" />
              },
              {
                title: "Douches en céramique",
                desc: "Installation de carreaux pour les murs, planchers et différentes composantes de projets de douche.",
                img: "/photos/orenaud-13.jpg",
                icon: <Building2 className="w-6 h-6" />
              },
              {
                title: "Murs et installations décoratives",
                desc: "Pose de céramique sur murs et surfaces décoratives, incluant différents motifs et compositions selon le projet.",
                img: "/photos/orenaud-12.jpg",
                icon: <Ruler className="w-6 h-6" />
              },
              {
                title: "Projets commerciaux",
                desc: "Pose de revêtements en carreaux pour différents espaces commerciaux selon les besoins du projet.",
                img: "/photos/orenaud-05.jpg",
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
              <h2 className="text-4xl md:text-5xl font-extrabold">La céramique, selon votre projet.</h2>
              <p className="text-white/80 mt-4">Céramiques Appalaches inc. réalise des installations de carreaux pour différents espaces. Images présentées à titre d’illustration et non comme des réalisations de l’entreprise.</p>
            </div>
            <Link href="/soumission">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-secondary uppercase tracking-wider font-bold">
                Discuter de mon projet
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "/photos/orenaud-12.jpg", title: "Votre projet commercial", tag: "Commercial" },
              { img: "/photos/orenaud-13.jpg", title: "Votre projet de salle de bain", tag: "Salle de bain" },
              { img: "/photos/orenaud-08.jpg", title: "Votre projet de cuisine", tag: "Cuisine" },
            ].map((proj, i) => (
              <div key={i} className="group relative overflow-hidden bg-black aspect-[4/3]">
                <img src={proj.img} alt={`Photo d'illustration pour la catégorie ${proj.tag.toLowerCase()}`} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
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
              <h2 className="text-4xl md:text-5xl font-extrabold text-secondary">Votre projet, étape par étape.</h2>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
               Discussion, évaluation, planification, installation et finition : chaque étape tient compte de votre espace et du résultat recherché. Images fournies à titre d’illustration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <figure className="overflow-hidden aspect-[16/10] bg-muted">
              <img
                src="/photos/orenaud-07.jpg"
                 alt="Image d’illustration d’un espace intérieur"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </figure>
            <figure className="overflow-hidden aspect-[16/10] bg-muted">
              <img
                src="/photos/orenaud-04.jpg"
                 alt="Image d’illustration d’un espace commercial"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </figure>
            <figure className="overflow-hidden aspect-[16/10] bg-muted">
              <img
                src="/photos/orenaud-09.jpg"
                 alt="Image d’illustration d’un espace intérieur"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </figure>
            <figure className="overflow-hidden aspect-[16/10] bg-muted">
              <img
                src="/photos/orenaud-11.jpg"
                 alt="Image d’illustration d’un espace intérieur"
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
          <img src="/photos/orenaud-14.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-[#1B1B1B]/80"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Vous avez un projet de céramique?</h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              Présentez-nous votre projet et discutons de l’installation que vous souhaitez réaliser.
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
