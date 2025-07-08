"use client";
import { useCallback, useState } from "react";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
     // Function for smooth scrolling
      const handleSmoothScroll = useCallback((targetId: string) => {
        setIsOpen(false); // Close the sidebar
    
        if (targetId === "/") {
          window.scrollTo({ top: 100, behavior: "smooth" });
        } else {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, []);
    
    return (
        
    <div className="bg-blue-500 text-white py-6 text-center sticky top-0 px-5 shadow-md z-15">
       {/* Sticky Navbar */}
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-semibold"></div>
          <ul className="text-[18px] list-none flex gap-6 m-0 hidden md:flex">
            <li><button onClick={() => handleSmoothScroll("#about")} className="hover:text-blue-900 hover:underline transition-colors duration-200 cursor-pointer">About Me</button></li>
            <li><button onClick={() => handleSmoothScroll("#Experience")} className="hover:text-blue-900 hover:underline transition-colors duration-200 cursor-pointer">Experience</button></li>
            <li><button onClick={() => handleSmoothScroll("#Education")} className="hover:text-blue-900 hover:underline transition-colors duration-200 cursor-pointer">Education</button></li>
            <li><button onClick={() => handleSmoothScroll("#Skills")} className="hover:text-blue-900 hover:underline transition-colors duration-200 cursor-pointer">Skills</button></li>
            <li><button onClick={() => handleSmoothScroll("#Projects")} className="hover:text-blue-900 hover:underline transition-colors duration-200 cursor-pointer">Projects</button></li>
            <li><button onClick={() => handleSmoothScroll("#Contact")} className="hover:text-blue-900 hover:underline transition-colors duration-200 cursor-pointer">Contact</button></li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-blue-400 p-5 shadow-md">
            <ul className="text-[18px] list-none flex flex-col gap-6 m-0 text-center">
              <li><button onClick={() => handleSmoothScroll("#about")} className="text-white">About Me</button></li>
              <li><button onClick={() => handleSmoothScroll("#Experience")} className="text-white">Experience</button></li>
              <li><button onClick={() => handleSmoothScroll("#Education")} className="text-white">Education</button></li>
              <li><button onClick={() => handleSmoothScroll("#Skills")} className="text-white">Skills</button></li>
              <li><button onClick={() => handleSmoothScroll("#Projects")} className="text-white">Projects</button></li>
              <li><button onClick={() => handleSmoothScroll("#Contact")} className="text-white">Contact</button></li>
            </ul>
          </div>
        )}
      </div>

    );
}
export default Header;


