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
        <span className="section-eyebrow text-secondary font-bold tracking-widest uppercase text-sm mb-4 text-center">Témoignages</span>
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
          <span className="section-eyebrow text-secondary font-bold tracking-widest uppercase text-sm mb-4">Questions fréquentes</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 lg:mb-10 text-secondary">Ce qu'il faut savoir</h2>
          
          <Accordion type="single" collapsible className="w-full bg-white border border-border">
            {[
              ["Quels types de travaux réalisez-vous?", "Céramique Cardinal se spécialise dans la pose de céramique et de revêtements en carreaux pour différents types de projets."],
              ["Réalisez-vous des projets commerciaux?", "Oui. L'entreprise présente notamment des réalisations de céramique en milieu commercial."],
              ["Pouvez-vous installer de la céramique sur une grande superficie?", "Oui. Céramique Cardinal possède des réalisations démontrant des travaux d'installation sur de grandes surfaces."],
              ["Comment obtenir une soumission?", "Communiquez avec nous par téléphone ou par courriel en précisant les travaux à réaliser. Vous pourrez joindre vos photos ou vos plans au courriel préparé avant de l'envoyer."]
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
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-secondary">Parlons de votre projet de céramique.</h2>
          <p className="text-muted-foreground mb-10">Vous planifiez des travaux de pose de céramique, un projet commercial ou une installation sur une grande superficie? Présentez-nous les détails de votre projet.</p>
          
          <div className="bg-white border border-border p-5 sm:p-8 h-auto mb-10">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Secteur desservi</h4>
                   <p className="text-muted-foreground">À confirmer avec notre équipe</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Téléphone</h4>
                  <a className="text-muted-foreground hover:text-secondary" href="tel:+15144449393">(514) 444-9393</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Courriel</h4>
                   <a className="text-muted-foreground hover:text-secondary break-all" href="mailto:info@ceramiquecardinal.ca">info@ceramiquecardinal.ca</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Full Bleed Embed Map */}
      <div className="w-full h-[400px]">
        <iframe
          title="Carte générale du Québec — secteur desservi par Céramique Cardinal à confirmer"
          className="block w-full h-full"
          style={{ border: 0 }}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Quebec%2C%20Canada&z=5&output=embed"
        ></iframe>
      </div>
    </section>
  );
}