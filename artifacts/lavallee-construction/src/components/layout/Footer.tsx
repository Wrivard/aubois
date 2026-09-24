import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#1B1B1B] text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1 flex flex-col items-start">
            <img 
              src="/logo-orenaud.png"
              alt="O. Renaud Construction Inc."
              className="h-24 w-auto object-contain object-left mb-6"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Entreprise de construction basée à Victoriaville. Une approche professionnelle et un souci constant du travail bien fait.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Navigation</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Accueil</Link></li>
              <li><a href="/#a-propos" className="text-white/70 hover:text-white transition-colors text-sm font-medium">À propos</a></li>
              <li><a href="/#services" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Services</a></li>
              <li><a href="/#realisations" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Réalisations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Contact</h3>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">T.</span>
                <a href="tel:+18197401938" className="hover:text-white">(819) 740-1938</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">C.</span>
                <a href="mailto:info@orenaudconstruction.com" className="hover:text-white break-all">info@orenaudconstruction.com</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">A.</span>
                <span>1359 Notre-Dame Ouest,<br/>Victoriaville, QC G6T 2V6</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Projet commercial</h3>
            <div className="p-4 border border-white/10 bg-white/5 flex flex-col gap-2">
              <span className="text-xs text-white/70 uppercase tracking-widest font-bold">Victoriaville</span>
              <span className="text-lg font-medium">Participation au nouveau garage Integra Tire / Pneus FT</span>
            </div>
            <div className="mt-6">
              <Link href="/soumission">
                <button className="bg-primary hover:bg-primary/90 text-secondary font-bold py-3 px-6 text-sm uppercase tracking-wide transition-colors w-full">
                  Demander une soumission
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70">
          <p>© {new Date().getFullYear()} O. Renaud Construction Inc. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="mailto:info@orenaudconstruction.com?subject=Confidentialit%C3%A9" className="hover:text-white transition-colors">Questions sur la confidentialité</a>
            <a href="mailto:info@orenaudconstruction.com" className="hover:text-white transition-colors">Nous écrire</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
