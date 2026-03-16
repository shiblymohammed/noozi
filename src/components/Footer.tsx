import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

/**
 * Modern, professional footer for Noozi Productions.
 * Features company information, navigation links, contact details,
 * and social media links with a clean, contemporary design.
 */
const NooziFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-alpha text-white relative overflow-hidden">
      {/* Simple Top Border */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-beta/30 to-transparent"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 px-8 md:px-24 lg:px-44 xl:px-60 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img
                src="/images/logo.png"
                alt="Noozi Productions"
                className="h-12 object-contain mb-4"
              />
              <p className="text-gray-300 text-sm leading-relaxed font-poppins">
                Creative production company specializing in innovative digital solutions, 
                visual storytelling, and cutting-edge design experiences.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-beta rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-beta rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-beta rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-beta rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-paytone text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-beta transition-colors duration-300 text-sm font-poppins"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-beta transition-colors duration-300 text-sm font-poppins"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-300 hover:text-beta transition-colors duration-300 text-sm font-poppins"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/work" 
                  className="text-gray-300 hover:text-beta transition-colors duration-300 text-sm font-poppins"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-beta transition-colors duration-300 text-sm font-poppins"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-paytone text-white">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 text-sm font-poppins">Web Development</li>
              <li className="text-gray-300 text-sm font-poppins">UI/UX Design</li>
              <li className="text-gray-300 text-sm font-poppins">Brand Identity</li>
              <li className="text-gray-300 text-sm font-poppins">Digital Marketing</li>
              <li className="text-gray-300 text-sm font-poppins">Video Production</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-paytone text-white">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-beta mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-poppins">hello@nooziproductions.com</p>
                  <p className="text-gray-300 text-sm font-poppins">info@nooziproductions.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-beta mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-poppins">+1 (555) 123-4567</p>
                  <p className="text-gray-300 text-sm font-poppins">+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-beta mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-poppins">123 Creative Street</p>
                  <p className="text-gray-300 text-sm font-poppins">Design District, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm font-poppins">
              © {currentYear} Noozi Productions. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <Link 
                to="/privacy" 
                className="text-gray-400 hover:text-beta transition-colors duration-300 text-sm font-poppins"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-beta transition-colors duration-300 text-sm font-poppins"
              >
                Terms of Service
              </Link>
              <Link 
                to="/cookies" 
                className="text-gray-400 hover:text-beta transition-colors duration-300 text-sm font-poppins"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 bg-beta rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-zigma rounded-full blur-2xl"></div>
      </div>
    </footer>
  );
};

export default NooziFooter;