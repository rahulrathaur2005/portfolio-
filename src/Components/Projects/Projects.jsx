import React from "react";
import ProjectCard from "./ProjectCard";
import newTube from "../../assets/newTube.png"
import portfolio from "..//../assets/portfolio.jpeg"
import StudyNotion from "..//../assets/StudyNotion.jpeg"


const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          bannerImg={newTube}
          title="NewTube"
          main="Built a scalable backend API for a YouTube-like platform using Node.js, Express, and MongoDB.
                 Supports features like video management, user authentication, and data handling."
          demoLink="/"
          codeLink="https://github.com/rahulrathaur2005/newTube"
        />
        <ProjectCard
          bannerImg={StudyNotion}
          title="StudyNotion"
          main="Developed a full-stack learning platform enabling course management, student enrollment, and interactive learning tools
          Focused on responsive UI with React + Tailwind and a secure backend with Node.js and MongoDB."
          demoLink="/"
          codeLink="https://github.com/rahulrathaur2005/StudyNotion"
        />
        <ProjectCard
          bannerImg={portfolio}
          title="Portfolio"
          main="Designed and deployed a personal portfolio showcasing projects, skills, and certifications.
                Built with React.js, Tailwind CSS, and modern UI/UX practices for a professional online presence"
          demoLink="portfolio-rahul-rathaur.vercel.app"
          codeLink="https://github.com/rahulrathaur2005/portfolio-"
        />
      </div>
    </div>
  );
};

export default Projects;
