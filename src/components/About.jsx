import LazyLoad from "react-lazy-load";
import img from "../assets/about.webp";
import Reveal from "./Reveal";

const About = () => {
  return (
    <section className="py-16" id="about">
      <div className="container mx-auto px-4 font-poppins">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <Reveal>
              <LazyLoad>
                <img
                  src={img}
                  alt="Profile"
                  className="rounded-full w-[300px] md:w-[400px] md:mx-0"
                />
              </LazyLoad>
            </Reveal>
          </div>
          <div className="w-full md:w-1/2 font-light">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-[#7562e0]">
                About Me
              </h2>
            </div>
            <Reveal>
              <p className="text-gray-800 mb-4 dark:text-gray-300">
                Hi, I'm Syed Shamim Hosan. From Dhaka, Bangladesh. Currently
                pursuing my bachelors degree in Business Administration at the
                National University. Alongside my academic studies, I have a
                strong passion for web development. Which led me to complete a
                full stack web development course at
                <a
                  href="https://www.programming-hero.com/"
                  className="text-[#7562e0] ml-2"
                >
                  programming hero
                </a>
                .
              </p>
            </Reveal>
            <Reveal>
              <p className="text-gray-800 mb-4 dark:text-gray-300">
                I have a strong foundation in both front-end and back-end
                technologies. In terms of front-end I have efficiency in
                essential technologies such as HTML5, CSS3, and Javascript. I
                have also hands on experience with popular framework such as
                ReactJS.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-gray-800 dark:text-gray-300">
                On the back-end side, I'm proficient in languages like
                JavaScript (Node.js), and frameworks like Express. I also have a
                good understanding of databases such as MongoDB. This knowledge
                allows me to implement effective database management solutions.
                One of my biggest strength is my exceptional level of patience.
                I am continuously learning and exploring new technologies to
                stay up to date with industry trends.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
