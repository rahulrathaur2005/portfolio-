import React from "react";
import avatarImg from "../../assets/avatar.png";
import TextChange from "../TextChange";
import TiltWrapper from "../TiltWrapper";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm text-wrap md:text-2xl tracking-tight ">
          MERN Stack Developer skilled in building secure, scalable, and efficient web applications.
          Strong focus on clean code, problem-solving, and delivering impactful digital solutions.
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div>
        <TiltWrapper>
          <img className="h-auto w-96 -translate-y-14 -translate-x-10" src={avatarImg} alt="" />
        </TiltWrapper>
          
       
        
      </div>
    </div>
  );
};

export default Home;
