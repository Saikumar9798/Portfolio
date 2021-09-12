import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import CGI from "../../assets/Images/CGI.jpg";
import IIITDM from "../../assets/Images/Insignia-min.png";
import Makerdemy from "../../assets/Images/Makerdemy.jpg";

const workData = [
  {
    image: {
      name: "CGI",
      src: CGI,
      alt: "CGI Logo",
    },
    title: "Software Engineer",
    company: "CGI Group Inc.,",
    duration: "Jan 2021 - Present",
    place: "Bengaluru, Karnataka",
    content:
      "I am currently working as a front-end web developer for a product, that functions essentially as a repository. I am developing the complete UI from scratch using ReactJS library. Also, I do handle the deployment process till production.",
  },
];

const InternshipData = [
  {
    image: {
      name: "Makerdemy",
      src: Makerdemy,
      alt: "Makerdemy Logo",
    },
    title: "Internt of Things Intern",
    company: "Makerdemy Pvt. Ltd.",
    duration: "May 2019 - October 2019",
    place: "Chennai, TamilNadu",
    content:
      "I have worked with various micro-controllers like Arduino UNO, Sparkfun ESP32 Thing, micro-computer like Raspberry Pi 3B+ etc., Besides these, I worked on developing APIs for integrating these devices with Google Cloud IoT Core (GCP).",
  },
  {
    image: {
      name: "IIITDM",
      src: IIITDM,
      alt: "IIITDM Logo",
    },
    title: "Teaching Assistant",
    company: "IIITDM Kacheepuram",
    duration: "August 2019 - April 2020",
    place: "Chennai, TamilNadu",
    content:
      "Considering my GATE score and consistent performance in academics, I was assigned the role of a teaching assistant, to manage a VLSI lab. Later I worked on designing a website, that allows students to book seminar halls by using college's website.",
  },
];

const CSSProperty = {
  from: { x: -100, opacity: 0, height: 0 },
  enter: { x: 0, opacity: 1, height: "auto" },
  leave: { x: 100, opacity: 0, height: "auto" },
  config: { duration: 500 },
};

const AccordianContent = () => {
  const [internTrue, setInternTrue] = useState(false);
  const [workTrue, setWorkTrue] = useState(false);
  const worktransition = useTransition(workTrue, CSSProperty);
  const interntransition = useTransition(internTrue, CSSProperty);

  return (
    <>
      {/* Work */}
      <div className="p-3 flex items-center justify-between bg-darkblue text-lightblue text-lg font-semibold mb-px lg:text-xl">
        <div>Work</div>
        <button>
        {!workTrue && (
            <i
              className="fas fa-plus-circle block text-sm lg:text-lg"
              onClick={() => setWorkTrue(true)}
            ></i>
          )}
          {workTrue && (
            <i
              className="fas fa-minus-circle block text-sm lg:text-lg"
              onClick={() => setWorkTrue(false)}
            ></i>
          )}
        </button>
      </div>
      {/* Work Array */}
      {worktransition((style, workStatus) =>
        workStatus ? (
          <animated.div style={style}>
            <div className="bg-white w-full h-auto flex flex-col justify-center font-Nunito">
              {workData.map((workingData, index) => {
                return (
                  <div key={workingData.image.name} className="p-4 pb-0">
                    <div className="rounded border-2 border-darkblue">
                      <div className="max-w-full flex flex-col items-center justify-center lg:flex-row">
                        <img
                          src={workingData.image.src}
                          alt={workingData.image.alt}
                          className="rounded-full h-28 m-6 border-darkblue border-2 block"
                          loading="lazy"
                        />
                        <div>
                          <div className="flex flex-col items-center justify-center lg:justify-between lg:flex-row px-4 lg:pr-8">
                            <div className="text-center lg:text-left">
                              <div className="font-extrabold text-darkblue text-18">
                                {workingData.title}
                              </div>
                              <div className="text-sm font-bold m-px">
                                {workingData.company}
                              </div>
                            </div>
                            <div className="text-center lg:text-right text-gray-400">
                              <div className="text-sm font-bold m-px">
                                {workingData.duration}
                              </div>
                              <div className="text-sm font-bold m-px">
                                {workingData.place}
                              </div>
                            </div>
                          </div>
                          <p className="mt-4 px-4 pb-4 lg:pr-8 lg:pb-0">
                            {workingData.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="pb-4"></div>
            </div>
          </animated.div>
        ) : null
      )}

      {/* Internship */}
      <div className="p-3 flex items-center justify-between bg-darkblue text-lightblue text-lg font-semibold lg:text-xl">
        <div>Internships</div>
        <button>
          {!internTrue && (
            <i
              className="fas fa-plus-circle block text-sm lg:text-lg"
              onClick={() => setInternTrue(true)}
            ></i>
          )}
          {internTrue && (
            <i
              className="fas fa-minus-circle block text-sm lg:text-lg"
              onClick={() => setInternTrue(false)}
            ></i>
          )}
        </button>
      </div>
      {/* Internship Array */}
      {interntransition((style, internStatus) =>
        internStatus ? (
          <animated.div style={style}>
            <div className="bg-white w-full h-auto flex flex-col justify-center font-Nunito">
              {InternshipData.map((internData, index) => {
                return (
                  <div key={internData.image.name} className="p-4 pb-0">
                    <div className="rounded border-2 border-darkblue">
                      <div className="max-w-full flex flex-col items-center justify-center lg:flex-row">
                        <img
                          src={internData.image.src}
                          alt={internData.image.alt}
                          className="rounded-full h-28 m-6 border-darkblue border-2 block"
                          loading="lazy"
                        />
                        <div>
                          <div className="flex flex-col items-center justify-center lg:justify-between lg:flex-row px-4 lg:pr-8">
                            <div className="text-center lg:text-left">
                              <div className="font-extrabold text-darkblue text-18">
                                {internData.title}
                              </div>
                              <div className="text-sm font-bold m-px">
                                {internData.company}
                              </div>
                            </div>
                            <div className="text-center lg:text-right text-gray-400">
                              <div className="text-sm font-bold m-px">
                                {internData.duration}
                              </div>
                              <div className="text-sm font-bold m-px">
                                {internData.place}
                              </div>
                            </div>
                          </div>
                          <p className="mt-4 px-4 pb-4 lg:pr-8 lg:pb-0">
                            {internData.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="pb-4"></div>
            </div>
          </animated.div>
        ) : null
      )}
    </>
  );
};

export default AccordianContent;
