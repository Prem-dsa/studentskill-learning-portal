import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Branding */}
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              SkillSphere
            </h2>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              Empowering students to grow, learn, and unlock new opportunities.
              Gain job-ready skills with industry-level learning.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">
              Platform
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/dashboard" className="hover:text-white transition">Dashboard</Link></li>
              <li><Link to="/courses" className="hover:text-white transition">Courses</Link></li>
              <li><Link to="/profile" className="hover:text-white transition">Profile</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/careers" className="hover:text-white transition">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">News & Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-400" />
                hello@skillsphere.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-400" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-slate-400 mt-1" />
                <span>
                  Coimbatore, Tamil Nadu  
                  <br /> India
                </span> 
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} SkillSphere. All rights reserved.</p>

          <div className="flex items-center gap-4 mt-3 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition">Terms</Link>
            <Link to="/support" className="hover:text-white transition">Support</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
