import { useState } from "react";
import ProjectCard from "./ProjectCard";
import yachtImg from "../assets/yacht.png";
import opsImg from "../assets/my-ops.png";
import shopeaseImg from "../assets/shopease.png";
import shashhImg from "../assets/shashh.png";
import boxImg from "../assets/box.png";
import freyeImg from "../assets/freye.png";
import fluteImg from "../assets/flute.png";

const filterOptions = ["All", "HTML/CSS", "React", "Next.js"];

const projects = [
  {
    id: 1,
    title: "Yachtease",
    images: [yachtImg],
    summery:
      "Yachtease is aimed to be a all in one platform for Super yachts, Yacht suppliers & agencies and yacht crew. To make their lives and jobs easier in as many aspects as possible.",
    liveLink: "https://yachtease.vercel.app",
    technology: "React",
  },
  {
    id: 2,
    title: "My Ops",
    images: [opsImg],
    summery: "My Ops is a Real estate business & expense management system",
    liveLink: "https://my-ops-react.vercel.app",
    technology: "React",
  },
  {
    id: 3,
    title: "ShopEase",
    images: [shopeaseImg],
    summery:
      "ShopEase is an innovative and user-friendly eCommerce platform that simplifies shopping for customers and sellers.",
    liveLink: "https://shopease-gamma.vercel.app",
    clientSide: "https://github.com/shanin18/shopease",
    serverSide: "https://github.com/shanin18/shopease-server",
    technology: "React",
  },
  {
    id: 4,
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
    technology: "React",
  },
  {
    id: 5,
    title: "Lodgify",
    images: [
      "https://i.ibb.co/MPHmQQV/1.webp",
      "https://i.ibb.co/Cnfw5gM/3.webp",
      "https://i.ibb.co/wMv8t0m/2.webp",
      "https://i.ibb.co/cwcvr9m/4.webp",
      "https://i.ibb.co/fD7MCWX/5.webp",
    ],
    summery:
      "Lodgify efficiently optimizes booking management and enhances guest experiences for hotels and vacation rentals.",
    liveLink: "https://y-lyart-seven.vercel.app/",
    clientSide: "https://github.com/shanin18/lodgify-hotel-management",
    technology: "Next.js",
  },
  {
    id: 6,
    title: "Shashh",
    images: [shashhImg],
    summery:
      "Shashh is a dynamic platform designed to connect billboard owners with clients seeking to rent advertising spaces or run impactful campaigns. It streamlines the process of showcasing ads, enabling advertisers to easily reach out to billboard owners and optimize their brand visibility.",
    liveLink: "https://shashh.netlify.app",
    technology: "HTML/CSS",
  },
  {
    id: 7,
    title: "Box Hub",
    images: [boxImg],
    summery:
      "Box Hub is a convenient platform designed to receive deliveries on behalf of users when they are unavailable. Users can easily schedule a date and time for delivery through Calendly and complete the service with a secure payment, ensuring hassle-free package management.",
    liveLink: "https://box-hub.vercel.app/",
    technology: "HTML/CSS",
  },
  {
    id: 8,
    title: "Freye",
    images: [freyeImg],
    summery:
      "Freye is an innovative platform offering a wide range of glasses, sunglasses, and lens accessories. Users can try products online, provide their prescription, and receive personalized recommendations for the most suitable options, including frames tailored to their needs.",
    liveLink: "https://fahadrazooki.vercel.app/",
    technology: "HTML/CSS",
  },
  {
    id: 9,
    title: "Flute N Feather",
    images: [fluteImg],
    summery:
      "Flute keeps children engaged in a fun, interactive experience allowing them to dive deep into subjects until they get it.",
    liveLink: "https://flute-n-feather.vercel.app",
    technology: "HTML/CSS",
  },
  {
    id: 10,
    title: "Quiz Game",
    images: ["https://i.ibb.co/88DHt5B/Screenshot-2024-08-04-200334.png"],
    summery: "This is a mcq quiz game made with React",
    liveLink: "https://mcq-game-nine.vercel.app",
    clientSide: "https://github.com/shanin18/mcq-game",
    technology: "React",
  },
  {
    id: 11,
    title: "Simple E-commerce",
    images: [
      "https://i.ibb.co/Snmp0vB/Screenshot-2024-08-15-012503.webp",
      "https://i.ibb.co/SR67GDz/Screenshot-2024-08-15-012529.webp",
    ],
    summery:
      "A simple e-commerce product listing page built with React.js, Vite, Tailwind CSS, and Axios. This project demonstrates the ability to fetch, display, filter, search, and sort product data from the FakeStoreAPI.",
    liveLink: "https://simple-ecommerce-gamma.vercel.app",
    clientSide: "https://github.com/shanin18/simple-ecommerce",
    technology: "React",
  },
  {
    id: 12,
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
    technology: "React",
  },
  {
    id: 13,
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
    technology: "React",
  },
  {
    id: 14,
    title: "Ticket Booking App",
    images: [
      "https://i.ibb.co/Pcyhf9p/5.webp",
      "https://i.ibb.co/51xSgpF/3.webp",
      "https://i.ibb.co/Qvcvpwy/2.webp",
      "https://i.ibb.co/yW5KwVd/1.webp",
      "https://i.ibb.co/BGJzvsJ/4.webp",
    ],
    summery:
      "Ticket booking platform is an online service that facilitates the purchase and reservation of tickets for various events, activities, or services.",
    liveLink: "https://ticket-booking-dashboard-rho.vercel.app",
    clientSide: "https://github.com/shanin18/ticket-booking",
    serverSide: "https://github.com/shanin18/ticket-booking-server",
    technology: "React",
  },
];

const Projects = () => {
  // const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("All");

  // useEffect(() => {
  //   fetch("/data.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProjects(data);
  //       setFilteredProjects(data);
  //     });
  // }, []);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.technology === filter
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="py-16 dark:bg-[#1a1a29]" id="projects">
      <div className="container mx-auto font-poppins">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#7562e0] mb-4">
            Projects
          </h2>
          <p className="text-gray-700 mb-8 dark:text-gray-300 mx-2">
            I have worked on many projects as a Web Developer,
            <br /> here are a few of my live, real-world projects
          </p>
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleFilter(option)}
                className={`px-4 py-2 rounded-lg border ${
                  activeFilter === option
                    ? "bg-[#7562e0] text-white border-[#7562e0]"
                    : "bg-white text-[#7562e0] border-[#7562e0] dark:bg-gray-800 dark:text-gray-300"
                } transition duration-300 hover:bg-[#7562e0] hover:text-white`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mx-2">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No projects found for {activeFilter}.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
