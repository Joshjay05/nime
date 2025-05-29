import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  // Linkedin,
  Youtube,
} from "lucide-react";
import logo from "../public/asset/Nigeria.jpg";
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className=" flex items-center">
            <div className="w-40 h-20 rounded-lg overflow-hidden">
              <img
                src={logo}
                alt="NIME Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a
                  href="mailto:nimecommunitymena@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  nimecommunitymena@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <div className="text-gray-300">
                  <p>+2349139108720</p>
                  <p className="text-sm">
                    <a
                      href="https://wa.me/2348059286631"
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      +2349139108720 (WhatsApp Only)
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com/nime_community"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@nime_community</span>
              </a>
              <a
                href="https://facebook.com/nime_community"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span>Nigerians in the Middle East Community </span>
              </a>
              <a
                href="https://linkedin.com/company/leading-lingual-global"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-500 transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span>NIME COMMUNITY </span>
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                Find us @nime_community on all platforms
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2025 Nigerians in the Middle East and North Africa
            (NIME-North Africa). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
