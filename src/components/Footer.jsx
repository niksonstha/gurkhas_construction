import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Tagline */}
        <div>
          <Image
            src="/assets/logo.webp"
            alt="Gurkhas Construction Logo"
            width={120}
            height={60}
          />
          <p className="mt-4 text-sm text-gray-300">
            Building excellence with trust, safety, and craftsmanship.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-yellow-400">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-yellow-400" />
              <a
                href="https://g.co/kgs/wRM36du"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                25 Courtfield Avenue, Harrow HA1 2JX, United Kingdom
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" />
              +44 7427 227521 | +44 7578 494841
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-yellow-400" />
              info@gurkhasconstruction.co.uk
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://www.facebook.com/profile.php?id=100057628832417"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-yellow-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/consgurkhas/profilecard/?igsh=aThucHVkZ2J4dTE4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-yellow-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@gurkhasconstruction7640"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-yellow-400"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.tiktok.com/@gurkhascons?_t=8se5CRdIIr2&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-yellow-400"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Gurkhas Construction. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
