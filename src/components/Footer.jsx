import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-accent rounded-full w-10 h-10 flex items-center justify-center mr-3">
                <span className="text-white text-xl font-bold">EL</span>
              </div>
              <h3 className="text-xl font-bold">ELITE LEARNING ACADEMY</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Empowering learners with quality education and skills for success since 2011.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent-foreground transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent-foreground transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent-foreground transition-colors duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">QUICK LINKS</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-accent-foreground transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-accent-foreground transition-colors duration-300">About Us</Link></li>
              <li><Link to="/courses" className="text-muted-foreground hover:text-accent-foreground transition-colors duration-300">Courses</Link></li>
              <li><Link to="/placements" className="text-muted-foreground hover:text-accent-foreground transition-colors duration-300">Placements</Link></li>
              <li><Link to="/blogs" className="text-muted-foreground hover:text-accent-foreground transition-colors duration-300">Blogs</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-accent-foreground transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">SERVICES</h4>
            <ul className="space-y-3">
              <li><Link to="/courses#management" className="text-muted-foreground hover:text-accent-foreground transition-colors duration-300">Management</Link></li>
              <li><Link to="/courses#leadership" className="text-muted-foreground hover:text-accent-foreground transition-colors duration-300">Leadership</Link></li>
              <li><Link to="/courses#marketing" className="text-muted-foreground hover:text-accent-foreground transition-colors duration-300">Marketing</Link></li>
              <li><Link to="/courses#finance" className="text-muted-foreground hover:text-accent-foreground transition-colors duration-300">Finance</Link></li>
              <li><Link to="/courses#hr" className="text-muted-foreground hover:text-accent-foreground transition-colors duration-300">HR Management</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">CONTACT</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="text-accent mr-3" size={20} />
                <span className="text-muted-foreground">+91 9958913539</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-accent mr-3" size={20} />
                <span className="text-muted-foreground">shikhag@elitemanagement.in</span>
              </div>
              <div className="flex items-start">
                <MapPin className="text-accent mr-3 mt-1" size={20} />
                <span className="text-muted-foreground">New Delhi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Elite Management Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;