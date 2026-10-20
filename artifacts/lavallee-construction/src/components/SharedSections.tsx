import { MapPin, Phone, Mail, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function TestimonialsSection() {
  return (
    <section id="temoignages" className="py-16 md:py-20 xl:py-24 bg-[#1B1B1B] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <span className="section-eyebrow text-white font-bold tracking-widest uppercase text-sm mb-4">Témoignages</span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold mb-6 text-white">Ce que nos clients disent de nous.</h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Quelques mots partagés par des clients de Céramique Cardinal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "BobonitA",
              detail: "Local Guide · 9 photos",
              quote: "Sébastien est venu effectuer l’appel de service chez nous pour une réparation de céramique. Service professionnel et bien fait. Ponctuel aussi. Merci encore.",
            },
            {
              name: "Pat Laroche",
              detail: "Google · 5 avis",
              quote: "Super gentil. Prend le temps qui faut pour conseiller, même pendant une journée de congé.",
            },
          ].map((review) => (
            <article
              key={review.name}
              className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-white p-7 text-secondary shadow-xl transition-transform duration-300 hover:-translate-y-1 sm:p-9"
            >
              <div className="absolute inset-y-0 left-0 w-1.5 bg-primary" />
              <div className="mb-8 flex items-center justify-between gap-4">
                <div className="flex gap-1 text-primary" role="img" aria-label="5 étoiles sur 5">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} className="h-5 w-5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <span className="bg-muted px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary">
                  Google
                </span>
              </div>
              <blockquote className="mb-8 flex-1 text-lg font-medium leading-relaxed sm:text-xl">
                « {review.quote} »
              </blockquote>
              <div className="border-t border-border pt-5">
                <p className="text-lg font-extrabold text-secondary">{review.name}</p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{review.detail}</p>
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
                   <p className="text-muted-foreground">Rive-Nord de Montréal</p>
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
          title="Carte de la Rive-Nord de Montréal — secteur desservi par Céramique Cardinal"
          className="block w-full h-full"
          style={{ border: 0 }}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Rive-Nord%20de%20Montr%C3%A9al&z=9&output=embed"
        ></iframe>
      </div>
    </section>
  );
}