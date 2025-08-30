import React from "react";
const ProjectCard = ({ title, main, bannerImg }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19]  shadow-slate-900 rounded-2xl
                    max-w-sm 
                     text-white shadow-md 
                    transform transition-all duration-300 
                    hover:scale-105 hover:shadow-lg 
                    hover:border hover:border-[#6366F1]
                    relative group  overflow-hidden 
                    justify-between">
      <img className="p-4 h-40 w-full overflow-hidden" src={bannerImg} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Demo
        </button>
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
