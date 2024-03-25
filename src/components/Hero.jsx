import heroImage from "../assets/hero.png";
import Reveal from "./Reveal";

const Hero = () => {
  return (
    <section className="dark:bg-[#1a1a29] py-20">
      <div className="container mx-auto px-4 font-poppins flex flex-col-reverse md:flex-row justify-between items-center gap-8">
        <div>
          <Reveal>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 uppercase bg-gradient-to-r bg-clip-text text-transparent from-[#1a1a29] via-[#7562e0] to-[#1a1a29] animate-text">
              Hello, I'm
            </h1>
          </Reveal>
          <Reveal>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 uppercase bg-gradient-to-r bg-clip-text text-transparent from-[#1a1a29] via-[#7562e0] to-[#1a1a29] animate-text">
              Shamim Hosan
            </h1>
          </Reveal>

          <Reveal>
            <h2 className="text-3xl dark:text-white mb-8">
              And I'm a
              <span className="ml-2 text-[#7562e0]">Full-stack Developer</span>
            </h2>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap gap-3">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://drive.google.com/file/d/1jNmv4UrHoPes1v8w4-sY2btUzlvREyd4/view?usp=sharing"
                download={true}
              >
                <button className="font-poppins border border-[#7562e0] bg-[#7562e0] text-white px-5 py-2 rounded-md ease-in-out transition-all duration-200 ">
                  Download Resume
                </button>
              </a>

              <a href="#projects">
                <button className="font-poppins border border-[#7562e0] px-5 py-2 rounded-md text-[#7562e0] hover:text-white hover:bg-[#7562e0] ease-in-out transition-all duration-200">
                  View Projects
                </button>
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <img
            className="w-[300px] md:w-[500px]"
            src={heroImage}
            alt="profile"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
