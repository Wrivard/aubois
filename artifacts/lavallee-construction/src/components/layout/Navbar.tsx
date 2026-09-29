import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/#a-propos" },
    { name: "Réalisations", href: "/#realisations" },
    { name: "Contact", href: "/#contact" },
  ];

  const servicesLinks = [
    { name: "Salles de bain", href: "/#services" },
    { name: "Cuisines et dosserets", href: "/#services" },
    { name: "Planchers de céramique", href: "/#services" },
    { name: "Douches en céramique", href: "/#services" },
    { name: "Murs et installations décoratives", href: "/#services" },
    { name: "Projets commerciaux", href: "/#services" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1B1B1B] shadow-md py-3" : "bg-[#1B1B1B] py-4"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 relative flex items-center justify-between min-h-[94px] xl:min-h-[113px]">
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 z-50 block" aria-label="Céramiques Appalaches inc. — accueil" onClick={() => setMobileMenuOpen(false)}>
          <img
            src="/logo-ceramiques-appalaches.webp"
            alt="Céramiques Appalaches inc."
            className="h-[94px] xl:h-[113px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          <Link href="/" className="text-sm font-semibold text-white hover:underline transition-colors">
            Accueil
          </Link>
          <a href="/#a-propos" className="text-sm font-semibold text-white hover:underline transition-colors">
            À propos
          </a>
          
          <div 
            className="relative group"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <a href="/#services" className="text-sm font-semibold text-white hover:underline transition-colors flex items-center gap-1">
              Services <ChevronDown className="w-4 h-4" />
            </a>
            
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 pt-4 w-64">
                <div className="bg-[#1B1B1B] border border-[#333] shadow-lg flex flex-col p-2">
                  {servicesLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="px-4 py-2 text-sm font-medium text-white hover:bg-white/10 hover:underline transition-colors"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="/#realisations" className="text-sm font-semibold text-white hover:underline transition-colors">
            Réalisations
          </a>
          <a href="/#contact" className="text-sm font-semibold text-white hover:underline transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden xl:block">
          <Link href="/soumission">
            <Button size="lg" className="font-bold tracking-wide uppercase text-xs">
              Demander une soumission
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden relative z-50 p-2 -mr-2 ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#1B1B1B] z-40 xl:hidden flex flex-col pt-32 px-6 h-[100dvh] overflow-y-auto text-white">
          <nav className="flex flex-col gap-6 text-xl font-bold">
            <Link 
              href="/" 
              className="border-b border-[#333] pb-4 hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <a 
              href="/#a-propos" 
              className="border-b border-[#333] pb-4 hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </a>
            <div className="border-b border-[#333] pb-4">
              <span className="text-white/60 mb-4 block text-sm uppercase tracking-widest">Nos Services</span>
              <div className="flex flex-col gap-4 pl-4 border-l-2 border-primary">
                {servicesLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg hover:underline"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <a 
              href="/#realisations" 
              className="border-b border-[#333] pb-4 hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              Réalisations
            </a>
            <a 
              href="/#contact"
              className="border-b border-[#333] pb-4 hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
          
          <div className="mt-auto py-8">
            <Link href="/soumission" onClick={() => setMobileMenuOpen(false)}>
              <Button size="lg" className="w-full font-bold tracking-wide uppercase text-sm h-14">
                Demander une soumission
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
