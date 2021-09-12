import React from "react";
import Logo from "../Logo";
import Scrollspy from "react-scrollspy";
import "./index.css";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = React.useState(false);

  return (
    <section className="fixed top-0 left-0 w-full bg-lightblue shadow-md z-30 px-5 py-1 ">
      <div className="flex items-center justify-between">
        <div>
          <Logo className="text-xl md:text-2xl lg:text-4xl" />
        </div>

        <div>
          <Scrollspy
            items={["about", "education", "experience", "contact"]}
            currentClassName="active"
            className="hidden lg:flex lg:gap-4 xs:flex-col lg:flex-row"
          >
            <li
              className={`text-darkblue font-semibold cursor-pointer px-3 py-2 hover:bg-mediumblue rounded-sm transform-gpu transition-colors duration-250 ease-in text-lg`}
            >
              <a href="#about">About</a>
            </li>

            <li
              className={` text-darkblue font-semibold cursor-pointer px-3 py-2 hover:bg-mediumblue rounded-sm transform-gpu transition-colors duration-250 ease-in text-lg`}
            >
              <a href="#education">Education</a>
            </li>

            <li
              className={` text-darkblue font-semibold cursor-pointer px-3 py-2 hover:bg-mediumblue rounded-sm transform-gpu transition-colors duration-250 ease-in text-lg`}
            >
              <a href="#experience">Experience</a>
            </li>

            <li
              className={`text-darkblue font-semibold cursor-pointer px-3 py-2 hover:bg-mediumblue rounded-sm transform-gpu transition-colors duration-250 ease-in text-lg`}
            >
              <a href="#contact">Contact</a>
            </li>
          </Scrollspy>
        </div>

        <div className="relative lg:hidden text-xl lg:text-2xl focus:outline-none z-50">
          <button
            type="button"
            onClick={() => {
              setIsMenuActive(!isMenuActive);
            }}
          >
            {!isMenuActive && (
              <i className="fa block text-darkblue">&#xf0c9;</i>
            )}
            {isMenuActive && (
              <i className="fa block text-lightblue">&#xf00d;</i>
            )}
          </button>
        </div>
      </div>
      {isMenuActive && (
        <div className="fixed z-40 inset-0 flex w-full h-full flex-col items-center justify-center bg-darkblue bg-opacity-95">
          <ul>
            <a href="#about" onClick={() => setIsMenuActive(false)}>
              <li className="xs:text-sm xs:font-bold xs:px-2 xs:py-2 xs:my-2 md:text-2xl my-4 text-lightblue focus:text-darkblue hover:text-darkblue font-semibold cursor-pointer px-3 py-2 hover:bg-mediumblue rounded-sm transform-gpu transition-colors duration-250 ease-in">
                About
              </li>
            </a>
            <a href="#education" onClick={() => setIsMenuActive(false)}>
              <li className="xs:text-sm xs:font-bold xs:px-2 xs:py-2 xs:my-2 md:text-2xl my-4 text-lightblue focus:text-darkblue hover:text-darkblue font-semibold cursor-pointer px-3 py-2 hover:bg-mediumblue rounded-sm transform-gpu transition-colors duration-250 ease-in">
                Education
              </li>
            </a>
            <a href="#experience" onClick={() => setIsMenuActive(false)}>
              <li className="xs:text-sm xs:font-bold xs:px-2 xs:py-2 xs:my-2 md:text-2xl my-4 text-lightblue focus:text-darkblue hover:text-darkblue font-semibold cursor-pointer px-3 py-2 hover:bg-mediumblue rounded-sm transform-gpu transition-colors duration-250 ease-in">
                Experience
              </li>
            </a>
            <a href="#contact" onClick={() => setIsMenuActive(false)}>
              <li className="xs:text-sm xs:font-bold xs:px-2 xs:py-2 xs:my-2 md:text-2xl my-4 text-lightblue focus:text-darkblue hover:text-darkblue font-semibold cursor-pointer px-3 py-2 hover:bg-mediumblue rounded-sm transform-gpu transition-colors duration-250 ease-in">
                Contact
              </li>
            </a>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
