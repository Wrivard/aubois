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
        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block text-center">Témoignages</span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-secondary text-center">Ce que nos clients disent</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-10 border border-border bg-muted/50 relative">
            <div className="text-6xl text-primary/20 absolute top-6 left-6 font-serif leading-none">"</div>
            <p className="text-lg text-secondary font-medium leading-relaxed mb-8 relative z-10 mt-4">
              "Lavallée Construction a transformé notre vision en réalité avec une précision impressionnante. Le chantier était toujours propre et l'échéancier a été respecté au jour près."
            </p>
            <div>
              <p className="font-bold text-secondary text-lg">Martin Tremblay</p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Client Résidentiel</p>
            </div>
          </div>
          
          <div className="p-10 border border-border bg-muted/50 relative">
            <div className="text-6xl text-primary/20 absolute top-6 left-6 font-serif leading-none">"</div>
            <p className="text-lg text-secondary font-medium leading-relaxed mb-8 relative z-10 mt-4">
              "Pour l'agrandissement de nos bureaux, nous cherchions un entrepreneur fiable. Ils ont pris en charge la gestion complète sans interrompre nos opérations. Un service impeccable."
            </p>
            <div>
              <p className="font-bold text-secondary text-lg">Sophie Dubois</p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Directrice, Groupe Immobilier</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQContactSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16">
        
        <div>
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Questions fréquentes</span>
          <h2 className="text-4xl font-extrabold mb-10 text-secondary">Ce qu'il faut savoir</h2>
          
          <Accordion type="single" collapsible className="w-full bg-white border border-border">
            <AccordionItem value="item-1" className="border-b border-border px-6">
              <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline hover:text-primary">Comment obtenez-vous vos permis de construction ?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                Nous nous occupons de toutes les démarches administratives. Notre équipe travaille directement avec les municipalités pour obtenir tous les permis nécessaires avant le début des travaux, garantissant une conformité totale.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-border px-6">
              <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline hover:text-primary">Êtes-vous couvert par la RBQ et des assurances ?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                Absolument. Nous possédons une licence RBQ valide et sommes couverts par une assurance responsabilité civile complète de 5M$. Nous adhérons également à la garantie de construction résidentielle (GCR) pour les maisons neuves.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-border px-6">
              <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline hover:text-primary">Quel est le délai typique pour une soumission ?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                Après notre première rencontre et l'évaluation de vos plans, nous fournissons généralement une soumission détaillée et transparente dans un délai de 5 à 7 jours ouvrables, selon la complexité du projet.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="px-6 border-b-0">
              <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline hover:text-primary">Gérez-vous vous-mêmes les sous-traitants ?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                Oui, nous agissons à titre d'entrepreneur général. Nous gérons l'ensemble du chantier, incluant nos équipes internes et notre réseau de sous-traitants certifiés de confiance avec qui nous travaillons depuis des années.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div>
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Coordonnées</span>
          <h2 className="text-4xl font-extrabold mb-10 text-secondary">Où nous trouver</h2>
          
          <div className="bg-white border border-border p-8 mb-8">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Siège social</h4>
                  <p className="text-muted-foreground">1234 Boulevard Industriel<br />Montréal, QC H1X 2Y3</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Téléphone</h4>
                  <p className="text-muted-foreground">(514) 555-0199</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Courriel</h4>
                  <p className="text-muted-foreground">info@lavalleeconstruction.ca</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-border h-64 w-full flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")'}}></div>
            <div className="text-center relative z-10">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-2" />
              <span className="font-bold text-secondary uppercase tracking-widest text-sm">Zone de service : Grand Montréal</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
