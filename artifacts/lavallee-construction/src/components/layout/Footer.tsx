import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#1B1B1B] text-white pt-16 md:pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-8 mb-12 md:mb-16">
          <div className="lg:col-span-1 flex flex-col items-start">
            <img 
              src="/logo-ceramique-cardinal.png"
              alt="Céramique Cardinal"
              className="h-[150px] w-auto object-contain object-left mb-6 mix-blend-screen"
              loading="lazy"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Céramique Cardinal se spécialise dans l’installation de céramique et de revêtements en carreaux sur la Rive-Nord de Montréal, notamment pour des projets commerciaux et de grandes surfaces.
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
                <span className="font-bold text-white">T.</span>
                <a href="tel:+15144449393" className="hover:text-white">(514) 444-9393</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-white">C.</span>
                <a href="mailto:info@ceramiquecardinal.ca" className="hover:text-white break-all">info@ceramiquecardinal.ca</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-white">A.</span>
                <a href="https://ceramiquecardinal.ca" target="_blank" rel="noreferrer" className="hover:text-white">ceramiquecardinal.ca</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Votre projet</h3>
            <div className="mt-6">
              <Link href="/soumission">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 text-sm uppercase tracking-wide transition-colors w-full">
                  Obtenir une soumission gratuite
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs text-white/70">
          <p>© {new Date().getFullYear()} Céramique Cardinal. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="mailto:info@ceramiquecardinal.ca?subject=Confidentialit%C3%A9" className="hover:text-white transition-colors">Questions sur la confidentialité</a>
            <a href="mailto:info@ceramiquecardinal.ca" className="hover:text-white transition-colors">Nous écrire</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
