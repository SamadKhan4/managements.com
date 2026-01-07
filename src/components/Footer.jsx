import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">

          {/* BRAND */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-primary to-accent rounded-xl w-11 h-11 flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white text-xl font-bold">EL</span>
              </div>
              <h3 className="text-xl font-bold tracking-wide">
                Elite Learning Academy
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Empowering learners with industry-driven education and career-focused
              skills since 2011.
            </p>

            <div className="flex items-center gap-4">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center
                             hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Courses", path: "/courses" },
                { name: "Placements", path: "/placements" },
                { name: "Blogs", path: "/blogs" },
                { name: "Contact Us", path: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PROGRAMS */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Programs</h4>
            <ul className="space-y-3">
              {[
                "Management",
                "Leadership",
                "Marketing",
                "Finance",
                "HR Management",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to="/courses"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>+91 99589 13539</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>shikhag@elitemanagement.in</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Elite Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
