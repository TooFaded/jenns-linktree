import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-red-900 text-white text-center p-4 mt-8">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://instagram.com" className="hover:text-gray-300">
          <FaInstagram size="24" />
        </a>
        <a href="https://twitter.com" className="hover:text-gray-300">
          <FaXTwitter size="24" />
        </a>
        <a href="https://facebook.com" className="hover:text-gray-300">
          <FaFacebookF size="24" />
        </a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} TranscendTech. All rights reserved.
      </p>
      <p className="text-xs text-gray-400">Designed by Melvin Torres</p>
    </footer>
  );
}

export default Footer;
