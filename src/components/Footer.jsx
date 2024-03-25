import { BsCodeSlash } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="py-7 border-t dark:border-none">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <a href="#">
            <div className="flex items-center gap-1">
              <BsCodeSlash className="text-3xl text-[#7562e0]"></BsCodeSlash>
              <h2 className="font-poppins text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-[#1a1a29] via-[#7562e0] to-[#1a1a29] animate-text">
                Shamimfolio
              </h2>
            </div>
          </a>
          <div className="text-gray-500 text-sm">
            <p className="mb-2 text-center font-poppins">
              &copy; {new Date().getFullYear()} Shamimfolio. All rights
              reserved.
            </p>
            <p className="mb-2 text-center font-poppins">
              A full stack developer passionate about creating amazing web
              experiences.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/syed-shamim-hosan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:hover:text-white transition duration-300"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/shanin18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:hover:text-white transition duration-300"
            >
              <FaGithub className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
