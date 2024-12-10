import CalendlyLink from "@/components/calendlyLink";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold">DevCraft</h3>
            <p className="mt-4 text-gray-400">
              Building exceptional digital experiences with dedication and
              expertise.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#why-me"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Why Me
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#plans"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Plans
                </a>
              </li>
              <li>
                <a
                  href="#plans"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-400">orelsmail@gmail.com</li>
              <CalendlyLink
                text="Schedule a call"
                className="text-gray-400"
              />
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} DevCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
