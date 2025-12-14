import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Index", href: "#top" },
    { name: "Projects", href: "#projects" },
    { name: "Info", href: "#about" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white text-black border-b border-black px-6 py-3 md:px-8">
      <div className="flex justify-between items-center">
        <Link href="/">
          <a className="font-mono text-sm tracking-tighter uppercase hover:underline decoration-1 underline-offset-4">
            ( Rup. Paul. Portfolio )
          </a>
        </Link>

        {/* Desktop Nav - Centered Button */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
           <button
            onClick={() => scrollToSection("#contact")}
            className="font-mono text-sm uppercase bg-black text-white px-4 py-1 hover:bg-neutral-800 transition-colors"
          >
            [ Hire_Me ]
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="font-mono text-sm uppercase hover:underline decoration-1 underline-offset-4"
            >
              {`0${i + 1} / ${link.name}`}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white text-black z-40 flex items-center justify-center">
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link, i) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-4xl font-sans font-light tracking-tighter hover:italic"
              >
                {link.name}
              </button>
            ))}
            <button
               onClick={() => scrollToSection("#contact")}
               className="text-4xl font-sans font-light tracking-tighter hover:italic"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
