import React, { useState } from "react";
import { NAVIGATION_LINKS } from "../assets/index";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileView = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault(); // Prevent default behavior

    const targetElement = document.querySelector(href); // Select the target section by href
    if (targetElement) {
      let offset = -85; // Declare 'offset' properly here
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      // Smooth scrolling to the target section
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false); // Close the mobile menu after a link is clicked
  };

  return (
    <div className="container">
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop  */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-6 w-full mx-5">
            <div>
              <a href="#">
                <img src={logo} alt="Logo" width={120} />
              </a>
            </div>
            <div className="flex items-center gap-4">
              {NAVIGATION_LINKS.map((item, index) => {
                return (
                  <li key={index} className="list-none">
                    <a
                      href={item.href}
                      className="text-sm hover:text-yellow-400"
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
        {/* Mobile  */}
        <div className="rounded-lg backdrop-blur-md lg:hidden mx-3">
          <div className="flex justify-between items-center">
            <div>
              <a href="#">
                <img src={logo} alt="Logo" width={100} />
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileView}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}{" "}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md p-2">
              {NAVIGATION_LINKS.map((item, index) => {
                return (
                  <li key={index} className="list-none">
                    <a
                      href={item.href}
                      className="text-sm hover:text-yellow-400"
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
