import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss,SiExpress,SiNodedotjs } from "react-icons/si";
import {  FaLaptopCode,FaBrain } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import TiltWrapper from "../TiltWrapper";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss color="#06B6D4" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiExpress color="#808080" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiNodedotjs color="#339933" size={50} />
          </span>
          
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <TiltWrapper>
              <FaLaptopCode color="#4285F4" size={50} />
            </TiltWrapper>
            
            <span className="text-white p-2">
              <h2 className="leading-tight">MERN Stack Developer </h2>
              
              <ul className="text-sm p-2">
                <li>- Built and deployed multiple web apps including a Portfolio Website,</li>
                <li>-  EdTech App etc using the MERN stack.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <TiltWrapper>
              <FaBrain color="#E50914" size={50} />
            </TiltWrapper>
            
            <span className="text-white p-2">
              <h2 className="leading-tight">Virtual Internship – AI & IBM Cloud</h2>
              <p className="text-sm leading-tight font-thin">
                Edunet Foundation | 4 Weeks | 2025
              </p>
              <ul className="text-sm p-2">
                <li>-Hands-on exposure to Watsonx AI and IBM Cloud services and worked on </li>
                <li>- practical assignments related to AI model deployment and cloud integration.</li>
              </ul>
            </span>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Experience;
