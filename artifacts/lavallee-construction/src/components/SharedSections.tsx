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
        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block text-center">Témoignages</span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-secondary text-center">Ce que nos clients disent de notre travail</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-10 border border-border bg-muted/50 relative rounded-xl">
            <div className="text-6xl text-primary/20 absolute top-6 left-6 font-serif leading-none">01</div>
            <p className="text-lg text-secondary font-medium leading-relaxed mb-8 relative z-10 mt-4">
              Aucun témoignage vérifié n’a encore été fourni pour publication.
            </p>
            <div>
              <p className="font-bold text-secondary text-lg">Témoignage à venir</p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">En attente d’un avis vérifié</p>
            </div>
          </div>
          
          <div className="p-10 border border-border bg-muted/50 relative rounded-xl">
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
    <section id="contact" className="bg-muted">
      <div className="container mx-auto px-6 md:px-12 pt-24 pb-32 grid lg:grid-cols-2 gap-16">
        
        <div>
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Questions fréquentes</span>
          <h2 className="text-4xl font-extrabold mb-10 text-secondary">Ce qu'il faut savoir</h2>
          
          <Accordion type="single" collapsible className="w-full bg-white border border-border rounded-xl overflow-hidden">
            {[
              ["Quels types de projets réalisez-vous?", "Nous réalisons la pose de céramique et de revêtements en carreaux pour les salles de bain, douches, cuisines, planchers, murs et espaces commerciaux."],
              ["Travaillez-vous également dans le commercial?", "Oui, Céramiques Appalaches inc. réalise des projets de pose de carreaux dans des espaces commerciaux."],
              ["Pouvez-vous réaliser des motifs comme un effet damier?", "Oui, des installations décoratives avec des carreaux contrastés, notamment un effet damier, font partie des projets présentés par l’entreprise."],
              ["Comment demander une soumission?", "Décrivez votre projet à l’aide du formulaire; votre messagerie préparera un courriel à envoyer."],
              ["Puis-je joindre des plans ou des photos?", "Oui. Vous pourrez joindre vos plans et photos au courriel avant de l’envoyer. Nous sommes basés à Thetford Mines et intervenons en Chaudière-Appalaches."]
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
          <p className="text-muted-foreground mb-10">Salle de bain, douche, cuisine, plancher ou projet commercial : présentez-nous votre espace et ce que vous souhaitez réaliser.</p>
          
          <div className="bg-white border border-border p-8 h-auto mb-10 rounded-xl">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Localisation</h4>
                  <p className="text-muted-foreground">Thetford Mines, Québec<br />Chaudière-Appalaches</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Téléphone</h4>
                  <a className="text-muted-foreground hover:text-secondary" href="tel:+14183349925">(418) 334-9925</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Courriel</h4>
                  <a className="text-muted-foreground hover:text-secondary break-all" href="mailto:ceramiquesappalaches@outlook.com">ceramiquesappalaches@outlook.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Full Bleed Embed Map */}
      <div className="w-full h-[400px]">
        <iframe
          title="Carte de Thetford Mines, Québec"
          className="block w-full h-full"
          style={{ border: 0 }}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Thetford%20Mines%2C%20Qu%C3%A9bec&z=11&output=embed"
        ></iframe>
      </div>
    </section>
  );
}