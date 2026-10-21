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
    { name: "Certifications", href: "/#certifications" },
    { name: "Contact", href: "/#contact" },
  ];

  const servicesLinks = [
    { name: "Élagage d’arbres", href: "/#services" },
    { name: "Abattage d’arbres", href: "/#services" },
    { name: "Taille de haies", href: "/#services" },
    { name: "Entretien des arbres", href: "/#services" },
    { name: "Travaux en hauteur", href: "/#services" },
    { name: "Évaluation d’un projet", href: "/#services" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1B1B1B] shadow-md py-3" : "bg-[#1B1B1B] py-4"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 relative flex items-center justify-between min-h-[94px] xl:min-h-[113px]">
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 z-50 block" aria-label="Service d’Arbres Aubois — accueil" onClick={() => setMobileMenuOpen(false)}>
          <img
            src="/logo-service-arbres-aubois.png"
            alt="Service d’Arbres Aubois"
            className="h-[94px] xl:h-[113px] w-auto object-contain mix-blend-screen"
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

          <a href="/#certifications" className="text-sm font-semibold text-white hover:underline transition-colors">
            Certifications
          </a>
          <a href="/#contact" className="text-sm font-semibold text-white hover:underline transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden xl:flex items-center gap-4">
          <a href="tel:+14189418897" className="text-sm font-semibold text-white whitespace-nowrap hover:underline">
            (418) 941-8897
          </a>
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
              href="/#certifications" 
              className="border-b border-[#333] pb-4 hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              Certifications
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
            <a href="tel:+14189418897" className="mt-3 block text-center text-sm font-semibold text-white/80 hover:underline">
              (418) 941-8897
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
