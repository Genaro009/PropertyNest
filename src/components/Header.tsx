import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img
              src="/f68d54e6fb08c37ce860451db83b47b8~tplv-tiktokx-cropcenter_1080_1080.jpeg"
              alt="Plumtree Property Nest"
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Plumtree Property Nest</h1>
              <p className="text-xs text-gray-600 italic">Bringing people and properties together</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('properties')} className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Properties
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Contact
            </button>
            <a
              href="tel:+263771767179"
              className="flex items-center space-x-2 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
            >
              <Phone size={18} />
              <span>+263 77 176 7179</span>
            </a>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-yellow-600 transition-colors font-medium text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('properties')} className="text-gray-700 hover:text-yellow-600 transition-colors font-medium text-left">
                Properties
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-yellow-600 transition-colors font-medium text-left">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-yellow-600 transition-colors font-medium text-left">
                Contact
              </button>
              <a
                href="tel:+263771767179"
                className="flex items-center space-x-2 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors w-fit"
              >
                <Phone size={18} />
                <span>+263 77 176 7179</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
