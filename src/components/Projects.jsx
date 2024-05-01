import ProjectCard from "./ProjectCard";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Captured visions",
      images: [
        "https://i.ibb.co/rkB8d99/img1.webp",
        "https://i.ibb.co/vzSLKP1/img2.webp",
        "https://i.ibb.co/T2p9RBw/img3.webp",
        "https://i.ibb.co/1Ky0KmL/img4.webp",
        "https://i.ibb.co/M7hThv0/img5.webp",
        "https://i.ibb.co/pKZrmHJ/img6.webp",
        "https://i.ibb.co/0cCyZC9/img7.webp",
      ],
      summery:
        "Captured Visions is a full-stack photography school website built using MERN technology, with authentication powered by Firebase.",
      liveLink: "https://capturedvisions-61b6b.web.app/",
      clientSide: "https://github.com/shanin18/Captured-Visions-client",
      serverSide: "https://github.com/shanin18/Captured-Visions-server",
    },
    {
      id: 2,
      title: "Toy Paradise",
      images: [
        "https://i.ibb.co/Jc5bwZ4/img1.webp",
        "https://i.ibb.co/VqP9q7m/img2.webp",
        "https://i.ibb.co/9hnsk6B/img3.webp",
        "https://i.ibb.co/mTv3VN9/img4.webp",
        "https://i.ibb.co/1952bs1/img5.webp",
        "https://i.ibb.co/K59kbqQ/img6.webp",
      ],
      summery:
        "This project showcases an interactive website dedicated to action figure toys.",
      liveLink: "https://toy-paradise-2e411.web.app/",
      clientSide: "https://github.com/shanin18/toy-paradise-client",
      serverSide: "https://github.com/shanin18/toy-paradise-server",
    },
    {
      id: 3,
      title: "Savory Selection",
      images: [
        "https://i.ibb.co/bbSmvw2/img1.webp",
        "https://i.ibb.co/L9bXpf9/img2.webp",
        "https://i.ibb.co/V9VQgHM/img3.webp",
        "https://i.ibb.co/1ZVFww3/img4.webp",
        "https://i.ibb.co/3yd0TLj/img5.webp",
        "https://i.ibb.co/BPRyBdF/img6.webp",
        "https://i.ibb.co/ZXWDkyr/img7.webp",
      ],
      summery:
        "Savory Selection is dedicated exclusively to the rich culinary heritage of Bangladesh, showcasing a wide array of traditional and contemporary dishes that will tantalize your taste buds.",
      liveLink: "https://react-savory-selections.web.app/",
      clientSide: "https://github.com/shanin18/Savory-selection-client",
      serverSide: "https://github.com/shanin18/Savory-selection-server",
    },
    {
      id: 4,
      title: "Dua Ruqyah",
      images: [
        "https://i.ibb.co/1Md8VyF/dua-ruqyah.webp",
      ],
      summery:
        "Explore a treasure trove of Islamic supplications and healing practices, meticulously organized to cater to various needs. Whether seeking divine guidance, protection, or remedy from ailments.",
      liveLink: "https://dua-ruqaiya.vercel.app/",
      clientSide: "https://github.com/shanin18/Dua-Ruqyah-Client",
      serverSide: "https://github.com/shanin18/Dua-Ruqyah-server",
    },
    {
      id: 5,
      title: "Ema john",
      images: [
        "https://i.ibb.co/2vbZRBR/img1.webp",
        "https://i.ibb.co/FWTfD6L/img2.webp",
        "https://i.ibb.co/khkphC6/img3.webp",
      ],
      summery:
        "Ema-John is an e-commerce web application built with React.js. It allows users to browse and purchase a wide range of products.",
      liveLink: "https://dancing-pasca-6274b9.netlify.app/",
      clientSide: "https://github.com/shanin18/ema-john-app",
    },
    {
      id: 6,
      title: "Car Doctor",
      images: [
        "https://i.ibb.co/hsn52FR/img1.webp",
        "https://i.ibb.co/TvrgrxH/img2.webp",
        "https://i.ibb.co/0s17Ydf/img3.webp",
      ],
      summery:
        "The Car Doctor is an innovative platform designed to streamline car maintenance and repair services. It offers users a comprehensive database of trusted mechanics, diagnostic tools, and appointment scheduling features, ensuring hassle-free vehicle care experiences..",
      liveLink: "https://car-doctor-d7dfc.web.app",
      clientSide: "https://github.com/shanin18/car-doctor-client",
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
            I have worked on many projects of being a Web
            Developer, <br /> here are a few of my live, real-world projects
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mx-2">
          {projects?.map((project, idx) => (
            <ProjectCard key={idx} project={project}></ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;