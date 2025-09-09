import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import TiltWrapper from "../TiltWrapper";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-4 items-center">
          <TiltWrapper>
            <MdOutlineEmail size={20} />
          </TiltWrapper>
          
          <a href="mailto:rahulrathaur472005@gmail.com">Email</a>
        </li>
        <li className="flex gap-4 items-center">
          <TiltWrapper> 
            <CiLinkedin />
          </TiltWrapper>
          
          <a href="https://www.linkedin.com/in/rahull-rathaur/">LinkedIn</a>
        </li>
        <li className="flex gap-4 items-center">
          <FaGithub />
          <a href="https://github.com/rahulrathaur2005">Github</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
