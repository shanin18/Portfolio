import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("./src/projectsData/project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, [projects]);

  return (
    <section className="py-16 dark:bg-[#1a1a29]" id="projects">
      <div className="container mx-auto font-poppins">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#7562e0] mb-4">
            Projects
          </h2>
          <p className=" text-gray-700 mb-8 dark:text-gray-300 mx-2">
            I have worked on many projects over the course of being a Web
            Developer, <br /> here are a few of my live, real-world projects
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mx-2">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project}></ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
