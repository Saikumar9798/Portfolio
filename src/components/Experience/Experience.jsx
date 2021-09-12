import React from "react";
import { ReactComponent as ReactLogo } from "../../assets/SVG/Experience.svg";
import AccordianContent from "./AccordianContent";

const Experience = () => {
  return (
    <section
      id="experience"
      className="sm:px-8 sm:py-8 xs:px-5 xs:py-6 lg:px-12 lg:py-6 shadow-xl z-10 bg-lightblue"
    >
      <div className="flex items-center justify-between gap-10 lg:flex-row xs:flex-col my-5 md:my-7 lg:my-10 text-darkblue min-w-full">
        <div className="w-full lg:w-1/2 flex flex-col" data-aos="fade-left">
          <span className="xs:text-4xl sm:text-3xl lg:text-6xl font-bold text-center">
            Experience
          </span>
          <div className="text-center lg:text-2xl mt-6 font-bold">
            Work and Internship
          </div>
          <div className="text-sm mt-2 lg:text-xl">
            {/* ⚡   */}
            <div className="flex leading-6 lg:leading-8 my-3 font-semibold text-darkblue text-center">
              I got an oppurtunity to work with an evolving startup as an
              Intern. Also, as a Software Engineer, I am currently working with
              a well established company. This varied experience made me more
              agile, productive and adaptive to the changing needs of the work.
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2" data-aos="slide-right">
          <ReactLogo />
        </div>
      </div>
      <AccordianContent />
    </section>
  );
};

export default Experience;
