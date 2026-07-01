import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { FaFacebook, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-surface-container-highest border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="col-span-1">
          <div className="font-headline-md text-primary mb-4">MODERN HERITAGE</div>
          <p className="text-on-surface-variant font-body-md text-body-md mb-6 opacity-80">
            Crafted for the timeless discovery of Egypt. Redefining luxury travel through the lens of ancient majesty.
          </p>
        </div>
        <div>
          <h4 className="font-label-lg text-label-lg text-primary mb-6 uppercase tracking-wider">Experiences</h4>
          <ul className="space-y-4">
            <li><a className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Cultural Heritage</a></li>
            <li><a className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Sustainability</a></li>
            <li><a className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Nile Cruises</a></li>
            <li><a className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Red Sea diving</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-lg text-label-lg text-primary mb-6 uppercase tracking-wider">Company</h4>
          <ul className="space-y-4">
            <li><a className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">About Us</a></li>
            <li><a className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Inquiry</a></li>
            <li><a className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Newsletter</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-lg text-label-lg text-primary mb-6 uppercase tracking-wider">Follow Us</h4>
          <div className="flex gap-4">
            <a className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined">
                <FaFacebook />
              </span>
            </a>
            <a className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-sm">
                <BsInstagram />
              </span>
            </a>
            <a className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-sm">
                <BsWhatsapp />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-3 border-t border-outline-variant/30 pt-8 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant font-label-sm text-label-sm opacity-60">
          © 2024 Modern Heritage. All rights reserved. Crafted for the Timeless Discovery of Egypt.
        </p>
        <div className="flex gap-8">
          <a className="text-label-sm font-label-sm text-on-surface-variant opacity-60 hover:opacity-100" href="#">Privacy Policy</a>
          <a className="text-label-sm font-label-sm text-on-surface-variant opacity-60 hover:opacity-100" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}