
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-grey border-t border-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-display font-bold">
              <span className="text-white">M&M</span>
              <span className="gradient-text">FASHION</span>
            </div>
            <p className="text-gray-400 text-sm">
              Streetstyle Starts Here. Bold, affordable fashion for Gen Z in Kolkata.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="/lookbook" className="text-gray-400 hover:text-brand-neon transition-colors text-sm">
                Lookbook
              </a>
              <a href="/order" className="text-gray-400 hover:text-brand-neon transition-colors text-sm">
                Order Now
              </a>
              <a href="/about" className="text-gray-400 hover:text-brand-neon transition-colors text-sm">
                About Us
              </a>
              <a href="/contact" className="text-gray-400 hover:text-brand-neon transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Connect With Us</h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">
                16A Ganga Prasad Mukherjee Road<br />
                Bhawanipur, Kolkata
              </p>
              <div className="flex items-center space-x-4 pt-2">
                <a
                  href="https://instagram.com/mandm.fashion_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-neon transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-neon transition-colors text-sm font-medium"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-charcoal mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 M&M Fashion. All rights reserved. Made with ❤️ in Kolkata.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
