import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Logo from "../logo/Logo";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <h3 className="text-2xl font-title font-bold text-primary mb-2">
            <Logo warp={`flex-wrap`} />
          </h3>
          <p className="text-sm">
            Smart platform to manage your apartments, tenants, payments, and
            maintenance with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2 text-secondary">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutBuilding" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="/coupons" className="hover:text-primary">
                Coupons
              </Link>
            </li>
            {/* <li>
              <Link to="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-2 text-secondary">Resources</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/privacyPolicy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/termsService" className="hover:text-primary">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-primary">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-2 text-secondary">Follow Us</h4>
          <div className="flex items-center space-x-4 text-primary text-xl">
            <Link to="https://github.com/rjriajul1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-accent"
            >
              <FaGithub size={24} />
            </Link>
            <Link
            to="https://www.facebook.com/share/15sAk5BdUC/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-accent"
            >
              <FaFacebookF size={24} />
            </Link>
            <Link to="https://www.linkedin.com/in/riajul-karim"
            
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent"
            >
              <FaLinkedinIn size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-base-300 mt-10 pt-6 text-sm text-center">
        <p>
          &copy; {new Date().getFullYear()} Apartment Manager. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
