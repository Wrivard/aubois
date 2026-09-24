import { MapPin, Phone, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block text-center">Notre approche</span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-secondary text-center">Une approche axée sur le projet.</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-10 border border-border bg-muted/50 relative">
            <div className="text-6xl text-primary/20 absolute top-6 left-6 font-serif leading-none">01</div>
            <p className="text-lg text-secondary font-medium leading-relaxed mb-8 relative z-10 mt-4">
              Comprendre les besoins avant de commencer les travaux. Chaque projet est différent; nous prenons le temps de discuter de ses objectifs et de planifier les étapes à venir.
            </p>
            <div>
              <p className="font-bold text-secondary text-lg">Écoute et planification</p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Une démarche structurée</p>
            </div>
          </div>
          
          <div className="p-10 border border-border bg-muted/50 relative">
            <div className="text-6xl text-primary/20 absolute top-6 left-6 font-serif leading-none">02</div>
            <p className="text-lg text-secondary font-medium leading-relaxed mb-8 relative z-10 mt-4">
              Maintenir une communication efficace tout au long du projet, porter attention aux détails et contribuer à des réalisations dont l'équipe et le client peuvent être fiers.
            </p>
            <div>
              <p className="font-bold text-secondary text-lg">Collaboration et qualité</p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Le souci du travail bien fait</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQContactSection() {
  return (
    <section id="contact" className="bg-muted">
      <div className="container mx-auto px-6 md:px-12 pt-24 pb-32 grid lg:grid-cols-2 gap-16">
        
        <div>
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Questions fréquentes</span>
          <h2 className="text-4xl font-extrabold mb-10 text-secondary">Ce qu'il faut savoir</h2>
          
          <Accordion type="single" collapsible className="w-full bg-white border border-border">
            {[
              ["Quels types de projets réalisez-vous?", "Nous discutons de projets résidentiels et commerciaux, de construction, de rénovation ou d'agrandissement, selon leurs besoins."],
              ["Avez-vous réalisé des projets commerciaux?", "O. Renaud Construction Inc. a contribué au nouveau garage Integra Tire / Pneus FT à Victoriaville."],
              ["Faites-vous de la construction et de la rénovation résidentielles?", "Communiquez avec nous pour discuter de votre projet résidentiel et de ses besoins particuliers."],
              ["Comment demander une soumission?", "Décrivez votre projet à l'aide du formulaire; votre messagerie préparera un courriel à envoyer."],
              ["Puis-je joindre des plans ou des photos?", "Oui. Vous pourrez joindre vos plans et photos au courriel avant de l'envoyer."]
            ].map(([question, answer], i) => (
              <AccordionItem key={question} value={`item-${i + 1}`} className={`px-6 ${i < 4 ? "border-b border-border" : "border-b-0"}`}>
                <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline hover:text-secondary">{question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div>
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Coordonnées</span>
          <h2 className="text-4xl font-extrabold mb-4 text-secondary">Parlons de votre projet.</h2>
          <p className="text-muted-foreground mb-10">Vous avez un projet de construction, de rénovation ou un projet commercial à venir? Communiquez avec O. Renaud Construction Inc. pour en discuter.</p>
          
          <div className="bg-white border border-border p-8 h-auto mb-10">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Siège social</h4>
                  <p className="text-muted-foreground">1359 Notre-Dame Ouest<br />Victoriaville, QC G6T 2V6</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Téléphone</h4>
                  <a className="text-muted-foreground hover:text-secondary" href="tel:+18197401938">(819) 740-1938</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Courriel</h4>
                  <a className="text-muted-foreground hover:text-secondary break-all" href="mailto:info@orenaudconstruction.com">info@orenaudconstruction.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Full Bleed Embed Map */}
      <div className="w-full h-[400px]">
        <iframe
          title="Carte de Victoriaville, emplacement de O. Renaud Construction Inc."
          className="block w-full h-full"
          style={{ border: 0 }}
          loading="eager"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-72.04%2C46.02%2C-71.89%2C46.12&layer=mapnik&marker=46.06%2C-71.96"
        ></iframe>
      </div>
    </section>
  );
}