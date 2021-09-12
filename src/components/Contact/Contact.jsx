import React from "react";
import { ReactComponent as ReactLogo } from "../../assets/SVG/Contact.svg";
import "./index.css";

const Contact = () => {
  const fullName = React.useRef();
  const email = React.useRef();
  const message = React.useRef();
  return (
    <section
      id="contact"
      className="sm:px-8 sm:py-8 xs:px-5 xs:py-10 lg:px-12 lg:py-8 shadow-xl z-10"
    >
      <div className="flex items-center justify-between gap-10 lg:flex-row xs:flex-col my-5 md:my-7 lg:my-10 text-darkblue min-w-full">
        <div className="w-full lg:w-1/2" data-aos="fade-left">
          <ReactLogo />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center" data-aos="slide-right">
          <div className="flex flex-col bg-mediumblue w-11/12 h-auto rounded-xl px-8 py-6">
            <span className="xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
              Connect me!
            </span>
            <div className="mt-5">
              <div>
                <span className="uppercase text-sm text-darkblue font-bold">
                  Full Name
                </span>
                <input
                  className="w-full bg-white text-darkblue mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=""
                  spellCheck={false}
                  ref={fullName}
                />
              </div>
              <div className="mt-3">
                <span className="uppercase text-sm text-darkblue font-bold">
                  Email Address
                </span>
                <input
                  className="w-full bg-white text-darkblue mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=""
                  spellCheck={false}
                  ref={email}
                />
              </div>
              <div className="mt-3">
                <span className="uppercase text-sm text-darkblue font-bold">
                  Message
                </span>
                <textarea
                  ref={message}
                  className="w-full h-32 bg-white text-darkblue mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <button
                className="bg-darkblue text-lightblue w-full p-3 mt-3 rounded-xl hover:text-darkblue hover:bg-lightblue transform-gpu transition-colors duration-200 ease-linear font-bold uppercase"
                onClick={() => {
                  fullName.current.value = "";
                  email.current.value = "";
                  message.current.value = "";
                }}
              >
                Send message
              </button>
              <p className="text-center mt-3">
                Need to send{" "}
                <a
                  href="mailto:gollapudivenkatasaikumar@gmail.com"
                  className="border-dotted border-b-2 font-bold border-darkblue"
                >
                  Mail
                </a>{" "}
                instead?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
