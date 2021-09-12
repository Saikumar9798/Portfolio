import React from "react";
import { ReactComponent as ReactLogo } from "../../assets/SVG/landingImage.svg";

const About = () => {
  return (
    <section
      id="about"
      className="sm:px-8 sm:py-8 xs:px-5 xs:py-10 lg:px-12 lg:py-8 shadow-xl z-10"
    >
      <div className="flex items-center justify-between gap-10 lg:flex-row xs:flex-col my-5 md:my-7 lg:my-10 text-darkblue min-w-full">
        <div className="w-full lg:w-1/2 flex flex-col" data-aos="slide-right">
          <span className="xs:text-4xl sm:text-3xl lg:text-6xl font-bold">
            Saikumar G. V.
          </span>
          <div className="text-sm mt-2 lg:text-xl">
            <div className="flex leading-6 lg:leading-8 my-3 font-semibold">
              ⚡ I am an aspiring individual, with a strong uphold in web
              design, development and allied technologies.
            </div>
            <div className="flex leading-6 lg:leading-8 mb-3 font-semibold">
              ⚡ Being an electronics graduate, I do bring a vast experience of
              working at a scale of chip level to UI design.
            </div>

            {/*} Bound to my love for automating
            things, I have authored a video course on Google Cloud Platform's
            (GCP) IoT Core, which is live on{" "}
            <a
              href="https://www.udemy.com/course/introduction-to-google-cloud-iot/"
              className="font-semibold text-green-700"
            >
              Udemy.
            </a> */}
            <div className="flex gap-4 items-center justify-start sm:justify-evenly md:justify-start flex-wrap mt-5 mb-2">
              <a href="https://www.linkedin.com/in/venkata-saikumar-gollapudi/">
                <i className="fab flex items-center justify-center fa-linkedin-in fa-lg hover:bg-gray-800 bg-linkedin px-2 py-2 rounded-full w-10 h-10 text-white transform-gpu transition-colors duration-2000 ease-in lg:w-12 lg:h-12"></i>
              </a>
              <a href="https://stackoverflow.com/users/11658483/saikumar">
                <i className="fab flex items-center justify-center fa-stack-overflow fa-lg hover:bg-gray-800 bg-stackoverflow px-2 py-2 rounded-full w-10 h-10 text-white transform-gpu transition-colors duration-2000 ease-in lg:w-12 lg:h-12"></i>
              </a>
              <a href="https://github.com/Saikumar9798">
                <i className="fab flex items-center justify-center fa-github fa-lg hover:bg-gray-800 bg-github px-2 py-2 rounded-full w-10 h-10 text-white transform-gpu transition-colors duration-2000 ease-in lg:w-12 lg:h-12"></i>
              </a>
              <a href="https://www.quora.com/profile/Venkata-Saikumar-Gollapudi/">
                <i className="fab flex items-center justify-center fa-quora fa-lg hover:bg-gray-800 bg-red-800 px-2 py-2 rounded-full w-10 h-10 text-white transform-gpu transition-colors duration-2000 ease-in lg:w-12 lg:h-12"></i>
              </a>
              <a href="mailto:gollapudivenkatasaikumar@gmail.com">
                <i className="far flex items-center justify-center fa-envelope fa-lg hover:bg-gray-800 hover:text-white bg-red-800 px-2 py-2 rounded-full w-10 h-10 text-gray-200 ring-1 ring-gray-300 transform-gpu transition-colors duration-2000 ease-in lg:w-12 lg:h-12"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2" data-aos="fade-left">
          <ReactLogo />
        </div>
      </div>
    </section>
  );
};

export default About;
