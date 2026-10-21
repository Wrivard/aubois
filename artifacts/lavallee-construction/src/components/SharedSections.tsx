import { MapPin, Phone, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function TestimonialsSection() {
  const reviews = [
    {
      name: "Tony Pelletier",
      initials: "TP",
      quote: "Je suis vraiment satisfait du service et de la qualité! Je le recommande vivement!",
    },
    {
      name: "Lyne Gobeil",
      initials: "LG",
      quote: "Service professionnel et rapide. Travail bien fait 🙂",
    },
  ];

  return (
    <section id="temoignages" className="py-16 md:py-20 xl:py-24 bg-[#1B1B1B] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <span className="section-eyebrow text-white font-bold tracking-widest uppercase text-sm mb-4">Avis Google</span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold mb-6 text-white">Ce que nos clients disent de nous.</h2>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-lg">
            <span className="font-extrabold">5,0</span>
            <span className="text-amber-400 tracking-wide" aria-label="5 étoiles sur 5">★★★★★</span>
            <span className="text-white/70">2 avis</span>
          </div>
          <p className="mt-3 text-sm text-white/60">Commentaires traduits en français à partir des avis affichés par Google.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-white p-7 text-secondary shadow-xl transition-transform duration-300 hover:-translate-y-1 sm:p-9"
            >
              <div className="absolute inset-y-0 left-0 w-1.5 bg-primary" />
              <div className="mb-7 flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary text-sm font-bold text-primary-foreground">
                    {review.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-extrabold text-secondary">{review.name}</p>
                    <p className="mt-1 text-xs font-medium text-muted-foreground">Avis Google</p>
                  </div>
                </div>
                <span className="shrink-0 text-lg tracking-tight text-amber-500" aria-label="5 étoiles sur 5">★★★★★</span>
              </div>
              <blockquote className="flex-1 text-lg font-medium leading-relaxed sm:text-xl">
                « {review.quote} »
              </blockquote>
              <div className="mt-7 border-t border-border pt-4">
                <p className="text-xs font-medium text-muted-foreground">Traduction française de l’avis affiché par Google.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQContactSection() {
  return (
    <section id="contact" className="bg-muted scroll-mt-32 xl:scroll-mt-36">
      <div className="container mx-auto px-6 md:px-12 pt-16 md:pt-20 xl:pt-24 pb-20 xl:pb-32 grid lg:grid-cols-2 gap-10 xl:gap-16">
        
        <div>
          <span className="section-eyebrow text-secondary font-bold tracking-widest uppercase text-sm mb-4">Questions fréquentes</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 lg:mb-10 text-secondary">Ce qu'il faut savoir</h2>
          
          <Accordion type="single" collapsible className="w-full bg-white border border-border">
            {[
              ["Quels services offrez-vous?", "Service d’Arbres Aubois se spécialise dans l’élagage, l’abattage d’arbres, la taille de haies et l’entretien des arbres."],
              ["Pouvez-vous intervenir sur de grands arbres?", "L’entreprise a réalisé des projets nécessitant un accès en hauteur. Chaque situation est évaluée selon l’arbre et l’accessibilité du terrain."],
              ["Faites-vous de l’abattage près des maisons?", "Service d’Arbres Aubois réalise des projets d’abattage en milieu résidentiel. Communiquez avec nous pour faire évaluer votre situation."],
              ["Comment obtenir une soumission?", "Appelez-nous au (418) 941-8897 ou écrivez à matisaube1@gmail.com en décrivant les travaux souhaités."]
            ].map(([question, answer], i) => (
              <AccordionItem key={question} value={`item-${i + 1}`} className={`px-6 ${i < 3 ? "border-b border-border" : "border-b-0"}`}>
                <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline hover:text-secondary">{question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div>
          <span className="section-eyebrow text-secondary font-bold tracking-widest uppercase text-sm mb-4">Coordonnées</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-secondary">Parlons de vos arbres.</h2>
          <p className="text-muted-foreground mb-10">Vous souhaitez faire élaguer un arbre, planifier un abattage ou entretenir vos haies? Présentez-nous les détails de votre propriété.</p>
          
          <div className="bg-white border border-border p-5 sm:p-8 h-auto mb-10">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h4 className="font-bold text-secondary mb-1">Localités indiquées</h4>
                   <p className="text-muted-foreground">Montmagny et Berthier-sur-Mer, Québec</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Téléphone</h4>
                  <a className="text-muted-foreground hover:text-secondary" href="tel:+14189418897">(418) 941-8897</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Courriel</h4>
                   <a className="text-muted-foreground hover:text-secondary break-all" href="mailto:matisaube1@gmail.com">matisaube1@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Full Bleed Embed Map */}
      <div className="w-full h-[400px]">
        <iframe
          title="Carte de Montmagny et Berthier-sur-Mer, Québec"
          className="block w-full h-full"
          style={{ border: 0 }}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Montmagny%2C%20Qu%C3%A9bec&z=10&output=embed"
        ></iframe>
      </div>
    </section>
  );
}