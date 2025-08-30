import React from "react";
import AboutImg from "../../assets/onStudyTable.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul className="translate-x-8">
            <div className="flex gap-3 py-5">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I create responsive, dynamic, and user-friendly interfaces using React.js, HTML, CSS, and JavaScript. My focus is on clean design, seamless user experience, and performance optimization.
                </p>
              </span>
            </div>
           
            <div className="flex gap-3 py-10">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I build secure, scalable, and efficient server-side applications with Node.js, Express.js, and MongoDB. I specialize in designing APIs, managing databases, and ensuring smooth integration with frontend systems.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
