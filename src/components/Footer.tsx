
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, YouTube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-college-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Evergreen University</h3>
            <p className="text-white/80 mb-4">
              Shaping tomorrow's leaders through excellence in education, research, and innovation since 1948.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-college-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-college-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-college-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-college-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-college-gold transition-colors">
                <YouTube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Academic Programs</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Campus Life</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Research</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Alumni</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Library</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Career Services</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Student Portal</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Financial Aid</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Campus Safety</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Technology Help</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-white/80 space-y-2">
              <p>123 University Avenue</p>
              <p>Evergreen, CA 94305</p>
              <p>United States</p>
              <p className="mt-4">Phone: (555) 123-4567</p>
              <p>Email: info@evergreen.edu</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Evergreen University. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-white/80 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-white/80 hover:text-white text-sm transition-colors">Terms of Use</Link>
            <Link to="#" className="text-white/80 hover:text-white text-sm transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
