import { MapPin, Phone, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 xl:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block text-center">Témoignages</span>
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold mb-10 md:mb-16 text-secondary text-center">Ce que nos clients disent de nous</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 sm:p-10 border border-border bg-muted/50 relative">
            <div className="text-6xl text-primary/20 absolute top-6 left-6 font-serif leading-none">01</div>
            <p className="text-lg text-secondary font-medium leading-relaxed mb-8 relative z-10 mt-4">
              Aucun témoignage vérifié n’a encore été fourni pour publication.
            </p>
            <div>
              <p className="font-bold text-secondary text-lg">Témoignage à venir</p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">En attente d’un avis vérifié</p>
            </div>
          </div>
          
          <div className="p-6 sm:p-10 border border-border bg-muted/50 relative">
            <div className="text-6xl text-primary/20 absolute top-6 left-6 font-serif leading-none">02</div>
            <p className="text-lg text-secondary font-medium leading-relaxed mb-8 relative z-10 mt-4">
              Cet espace accueillera un témoignage de client lorsqu’il sera disponible.
            </p>
            <div>
              <p className="font-bold text-secondary text-lg">Témoignage à venir</p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">En attente d’un avis vérifié</p>
            </div>
          </div>
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
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Questions fréquentes</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 lg:mb-10 text-secondary">Ce qu'il faut savoir</h2>
          
          <Accordion type="single" collapsible className="w-full bg-white border border-border">
            {[
              ["Quels types de projets réalisez-vous?", "Les Constructions Godin réalise des projets de construction et de rénovation résidentielle, notamment des transformations intérieures et des rénovations de cuisine."],
              ["La soumission est-elle gratuite?", "Oui. Vous pouvez présenter votre projet afin d’obtenir une soumission gratuite."],
              ["Dans quelles régions intervenez-vous?", "Les Constructions Godin dessert la Mauricie, Tadoussac et Baie-Comeau."],
              ["Puis-je vous envoyer des photos de mon projet?", "Oui. Vous pourrez joindre des photos ou des plans au courriel préparé avant de l’envoyer. Aucun fichier n’est téléversé sur ce site."]
            ].map(([question, answer], i) => (
              <AccordionItem key={question} value={`item-${i + 1}`} className={`px-6 ${i < 3 ? "border-b border-border" : "border-b-0"}`}>
                <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline hover:text-secondary">{question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div>
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Coordonnées</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-secondary">Parlons de votre projet.</h2>
          <p className="text-muted-foreground mb-10">Rénovation de cuisine, transformation intérieure ou projet de construction résidentielle : présentez-nous vos besoins pour discuter des prochaines étapes.</p>
          
          <div className="bg-white border border-border p-5 sm:p-8 h-auto mb-10">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Localisation</h4>
                   <p className="text-muted-foreground">Mauricie, Tadoussac et Baie-Comeau</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Téléphone</h4>
                  <a className="text-muted-foreground hover:text-secondary" href="tel:+18199449037">(819) 944-9037</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Courriel</h4>
                  <a className="text-muted-foreground hover:text-secondary break-all" href="mailto:lesconstructionsgodin@gmail.com">lesconstructionsgodin@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Full Bleed Embed Map */}
      <div className="w-full h-[400px]">
        <iframe
          title="Carte des secteurs desservis par Les Constructions Godin"
          className="block w-full h-full"
          style={{ border: 0 }}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Mauricie%2C%20Qu%C3%A9bec&z=8&output=embed"
        ></iframe>
      </div>
    </section>
  );
}