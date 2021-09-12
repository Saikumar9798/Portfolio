import React from "react";
import { ReactComponent as Hat } from "../../assets/SVG/EducationHat.svg";
// import { ReactComponent as Coursera } from "../../assets/SVG/Coursera-Logo.svg";
import Insignia from "../../assets/Images/Insignia-min.png";
import HackerRank from "../../assets/Images/Hackerrank.png";
import coursera from "../../assets/Images/coursera.png";
import nptel from "../../assets/Images/nptel.png";
import "./index.css";

const Education = () => {
  return (
    <section
      id="education"
      className="sm:px-8 sm:py-8 xs:px-5 xs:py-6 lg:px-12 lg:py-6 shadow-xl z-10 bg-mediumblue"
    >
      <div className="flex items-center justify-between gap-10 lg:flex-row-reverse xs:flex-col my-5 md:my-7 lg:my-10 text-darkblue min-w-full">
        <div className="w-full lg:w-1/2 flex flex-col" data-aos="fade-right">
          <span className="xs:text-4xl sm:text-3xl lg:text-6xl font-bold">
            Education
          </span>
          <div className="text-sm mt-2 lg:text-xl">
            <div className="flex leading-6 lg:leading-8 my-3 font-semibold">
              ⚡ My schooling (till +2) was done at Vijayawada, but for my
              graduation cum post-graduation, I moved to Chennai.
            </div>
            <div className="leading-6 lg:leading-8 mb-3 font-semibold">
              <span>
                ⚡ Also, I have authored a video course on Google Cloud
                Platform's (GCP) IoT Core, which is live on{" "}
              </span>
              <a
                href="https://www.udemy.com/course/introduction-to-google-cloud-iot/"
                className="font-semibold text-green-700 inline-block"
              >
                Udemy.
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2" data-aos="slide-left">
          <Hat />
        </div>
      </div>

      {/* Education starts */}
      <div className="font-Nunito my-14 text-4xl text-center text-darkblue font-semibold">
        Degrees Received
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center min-w-full" data-aos="zoom-in">
        <div className="icon-class w-36 h-36 rounded-full overflow-hidden ring-8 ring-offset-darkblue ring-darkblue bg-gray-100">
          <img src={Insignia} alt="College Logo" />
        </div>
        <div className="flex flex-col rounded-xl">
          <div className="flex flex-col text-lightblue bg-darkblue mt-8 lg:mt-0 rounded-t-lg md:ml-8">
            <div className="text-xl px-4 py-5 font-semibold">
              Indian Institute of Information Technology Kancheepuram
            </div>
            <div className="flex justify-between items-center px-4">
              <div className="text-sm sm:text-sm">
                B.Tech in Electronics & Communication Technology + <br /> M.Tech
                in VLSI
              </div>
              <div>2015-2020</div>
            </div>
            <div className="bg-gray-200 mt-4 px-4 py-5 text-darkblue font-semibold rounded-b-xl">
              <div>
                ⚡ Studied basic software engineering subjects like C, Java, DSA
                and Algorithms etc
              </div>
              <div>⚡ Secured 8.81/10 CGPA (88%)</div>
              <div>
                ⚡ Secured AIR-8676 in Electronics and Communication Engineering
                (EC), during 2019 GATE Examination
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="font-Nunito my-14 text-4xl text-center text-darkblue font-semibold">
        Certifications
      </div>
      <div className="flex flex-wrap mt-8 gap-14 justify-between items-center font-Nunito" data-aos="fade-up">
        <div className="w-full lg:w-3/10 flex flex-col">
          <a
            href="https://www.hackerrank.com/certificates/bc687735bf98"
            className="inline-block"
          >
            <div className="flex flex-col justify-center items-center relative cursor-pointer image__parent">
              <img
                src={HackerRank}
                className="h-32 sm:h-48 lg:h-32 block object-cover w-full rounded-t-lg"
                alt="Python certificate"
              />

              <div className="img__overlay transform-gpu rounded-t-lg opacity-0 hover:opacity-100 focus:opacity-100 flex uppercase items-center justify-center w-full h-full absolute text-lightblue bg-gray-900 bg-opacity-95 text-2xl">
                <span>Certificate</span>
              </div>
            </div>
          </a>
          <div className="flex flex-col rounded-b-lg py-4 items-center justify-center bg-white icon-class text-darkblue text-xl font-semibold">
            <span className="mb-1">Basics of Python 3</span>
            <span className="text-gray-500">- HackerRank</span>
          </div>
        </div>

        <div className="w-full lg:w-3/10 flex flex-col">
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/EYAWL49PA589"
            className="inline-block"
          >
            <div className="flex flex-col justify-center items-center relative cursor-pointer image__parent">
              <img
                src={coursera}
                className="h-32 sm:h-48 lg:h-32 block object-cover bg-coursera w-full rounded-t-lg"
                alt="Coursera certificate"
              />

              <div className="img__overlay transform-gpu rounded-t-lg opacity-0 hover:opacity-100 focus:opacity-100 flex uppercase items-center justify-center w-full h-full absolute text-lightblue bg-gray-900 bg-opacity-95 text-2xl">
                <span>Certificate</span>
              </div>
            </div>
          </a>
          <div className="flex flex-col rounded-b-lg py-4 items-center justify-center bg-white icon-class text-darkblue text-xl font-semibold">
            <span className="mb-1">Building a modern computer</span>
            <span className="text-gray-500">- Coursera</span>
          </div>
        </div>
        <div className="w-full lg:w-3/10 flex flex-col">
          <a
            href="https://nptel.ac.in/noc/Ecertificate/?q=noc19-cs31/NPTEL19CS31S31221402191013011.jpg"
            className="inline-block"
          >
            <div className="flex flex-col justify-center items-center relative cursor-pointer image__parent">
              <img
                src={nptel}
                className="h-32 sm:h-48 lg:h-32 block w-full bg-nptel rounded-t-lg"
                alt="NPTEL certificate"
              />

              <div className="img__overlay transform-gpu rounded-t-lg opacity-0 hover:opacity-100 focus:opacity-100 flex uppercase items-center justify-center w-full h-full absolute text-lightblue bg-gray-900 bg-opacity-95 text-2xl">
                <span>Certificate</span>
              </div>
            </div>
          </a>
          <div className="flex flex-col rounded-b-lg py-4 items-center justify-center bg-white icon-class text-darkblue text-xl font-semibold">
            <span className="mb-1">Introduction to IoT</span>
            <span className="text-gray-500">- NPTEL</span>
          </div>
        </div>
      </div>
      <p className="text-darkblue p-4 text-center mt-6 text-xl font-semibold">
        More in my{" "}
        <a
          href="https://www.linkedin.com/in/venkata-saikumar-gollapudi/"
          className="border-dotted border-b-2 font-bold border-darkblue"
        >
          LinkedIn
        </a>{" "}
        profile
      </p>
    </section>
  );
};

export default Education;
