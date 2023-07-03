import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Captured visions",
      images: [
        "https://i.ibb.co/C026d4Y/Screenshot-2023-06-28-194906.png",
        "https://i.ibb.co/VDMkQmN/Screenshot-2023-06-28-195122.png",
        "https://i.ibb.co/PmHLGwb/Screenshot-2023-06-28-195014.png",
        "https://i.ibb.co/Tbvf12h/Screenshot-2023-06-28-194740.png",
        "https://i.ibb.co/g6Fm5PS/Screenshot-2023-06-28-195836.png",
        "https://i.ibb.co/XCcbQpT/Screenshot-2023-06-28-194824.png",
        "https://i.ibb.co/LhytX8K/Screenshot-2023-06-28-195218.png",
        "https://i.ibb.co/9VmnxvX/Screenshot-2023-06-28-195635.png",
        "https://i.ibb.co/jL81MpD/Screenshot-2023-06-28-195747.png",
      ],
      summery:"Captured Visions is a full-stack photography school website built using MERN technology, with authentication powered by Firebase.",
      liveLink: "https://capturedvisions-61b6b.web.app/",
      clientSide: "https://github.com/shanin18/Captured-Visions-client",
      serverSide: "https://github.com/shanin18/Captured-Visions-server",
    },
    {
      id: 2,
      title: "Toy Paradise",
      images: [
        "https://i.ibb.co/tsLN3GW/Screenshot-2023-06-28-191602.png",
        "https://i.ibb.co/5BcKrXd/2.png",
        "https://i.ibb.co/3Y67dYj/Screenshot-2023-06-28-191657.png",
        "https://i.ibb.co/YDtr0LC/Screenshot-2023-06-28-191738.png",
        "https://i.ibb.co/qRGj33Q/Screenshot-2023-06-28-191840.png",
        "https://i.ibb.co/rFg1SWM/Screenshot-2023-06-28-192022.png",
        "https://i.ibb.co/GFNtghQ/Screenshot-2023-06-28-191913.png",
        "https://i.ibb.co/bvJ7KF3/Screenshot-2023-06-28-191945.png",
        "https://i.ibb.co/k871stS/Screenshot-2023-06-28-192207.png",
      ],
      summery:"This project showcases an interactive website dedicated to action figure toys.",
      liveLink: "https://toy-paradise-2e411.web.app/",
      clientSide: "https://github.com/shanin18/toy-paradise-client",
      serverSide: "https://github.com/shanin18/toy-paradise-server",
    },
    {
      id: 3,
      title: "Savory Selection",
      images: [
        "https://i.ibb.co/jz4w2xz/Screenshot-2023-06-28-194252.png",
        "https://i.ibb.co/BrC8KRg/Screenshot-2023-06-28-210511.png",
        "https://i.ibb.co/BsjhMcv/Screenshot-2023-06-28-210545.png",
        "https://i.ibb.co/D84qVCF/Screenshot-2023-06-28-210652.png",
        "https://i.ibb.co/WFFzKZD/Screenshot-2023-06-28-194518.png",
        "https://i.ibb.co/mcwxYFv/Screenshot-2023-06-28-194554.png",
        "https://i.ibb.co/0y18grF/Screenshot-2023-06-28-194317.png",
        "https://i.ibb.co/hmM3tFQ/Screenshot-2023-06-28-194405.png",
      ],
      summery:"Savory Selection is dedicated exclusively to the rich culinary heritage of Bangladesh, showcasing a wide array of traditional and contemporary dishes that will tantalize your taste buds.",
      liveLink: "https://react-savory-selections.web.app/",
      clientSide: "https://github.com/shanin18/Savory-selection-client",
      serverSide: "https://github.com/shanin18/Savory-selection-server",
    },
  ];

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
