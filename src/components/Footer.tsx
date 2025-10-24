import { Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/f68d54e6fb08c37ce860451db83b47b8~tplv-tiktokx-cropcenter_1080_1080.jpeg"
                alt="Plumtree Property Nest"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold">Plumtree Property Nest</h3>
                <p className="text-sm text-gray-400 italic">Bringing people and properties together</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted property partner in Plumtree, Zimbabwe. Founded and operated by Kevin Mupande.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-yellow-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-yellow-400 transition-colors"
                >
                  Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-yellow-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-yellow-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-yellow-400" />
                <a href="tel:+263771767179" className="hover:text-yellow-400 transition-colors">
                  +263 77 176 7179
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} className="text-yellow-400" />
                <span>Plumtree, Zimbabwe</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Plumtree Property Nest. All rights reserved.
            </p>
            <p className="flex items-center mt-4 md:mt-0">
              Crafted with <Heart size={16} className="mx-1 text-red-500" fill="currentColor" /> for Plumtree
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
