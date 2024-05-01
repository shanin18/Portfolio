import { useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import DarkMode from "./DarkMode";
const Navbar = () => {
  const [active, setActive] = useState("home");
  const [fold, setFold] = useState(false);
  return (
    <nav className="border-b dark:border-none">
      <div className="container mx-auto flex items-center justify-between py-8 px-3">
        <div className="flex items-center gap-1">
          <BsCodeSlash className="text-2xl md:text-3xl lg:text-4xl text-[#7562e0]"></BsCodeSlash>
          <h2 className="font-poppins text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-[#1a1a29] via-[#7562e0] to-[#1a1a29] animate-text">
            Shamim
          </h2>
        </div>
        <div className="flex items-center">
          <ul className="hidden lg:flex items-center gap-8 font-poppins text-md md:text-lg dark:text-white mr-10">
            <li
              onClick={() => {
                setActive("home");
              }}
              className={active === "home" && "text-[#7562e0]"}
            >
              <a href="#">Home</a>
            </li>
            <li
              onClick={() => setActive("about")}
              className={active === "about" && "text-[#7562e0]"}
            >
              <a href="#about">About</a>
            </li>
            <li
              onClick={() => setActive("skills")}
              className={active === "skills" && "text-[#7562e0]"}
            >
              <a href="#skills">Skills</a>
            </li>
            <li
              onClick={() => setActive("projects")}
              className={active === "projects" && "text-[#7562e0]"}
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              onClick={() => setActive("contact")}
              className={active === "contact" && "text-[#7562e0]"}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <DarkMode></DarkMode>
          <div className="lg:hidden ml-3">
            {!fold ? (
              <HiOutlineBars3
                onClick={() => setFold(!fold)}
                className={`text-2xl dark:text-[#7562e0] cursor-pointer`}
              ></HiOutlineBars3>
            ) : (
              <HiOutlineXMark
                onClick={() => setFold(!fold)}
                className={`text-2xl dark:text-[#7562e0] cursor-pointer`}
              ></HiOutlineXMark>
            )}
          </div>
        </div>
      </div>
      {/* mobile view menu items */}
      <div
        className={`lg:hidden w-[280px] h-screen fixed top-0 font-poppins text-md md:text-lg dark:text-white mr-10 transition-all duration-300 ease-in-out z-50 bg-white dark:bg-[#181824] shadow-2xl ${
          !fold ? "-left-[300px]" : "left-0"
        }`}
      >
        <div className="flex items-center gap-1 py-5 mb-8 border-b">
          <BsCodeSlash className="text-2xl md:text-3xl lg:text-4xl text-[#7562e0] ml-5"></BsCodeSlash>
          <h2 className="font-poppins text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-[#1a1a29] via-[#7562e0] to-[#1a1a29] animate-text">
            Shamimfolio
          </h2>
        </div>
        <ul className="space-y-5 px-5">
          <li
            onClick={() => {
              setFold(!fold);
              setActive("home");
            }}
            className={active === "home" && "text-[#7562e0]"}
          >
            <a href="#">Home</a>
          </li>
          <li
            onClick={() => {
              setFold(!fold);
              setActive("about");
            }}
            className={active === "about" && "text-[#7562e0]"}
          >
            <a href="#about">About</a>
          </li>
          <li
            onClick={() => {
              setFold(!fold);
              setActive("skills");
            }}
            className={active === "skills" && "text-[#7562e0]"}
          >
            <a href="#skills">Skills</a>
          </li>
          <li
            onClick={() => {
              setFold(!fold);
              setActive("projects");
            }}
            className={active === "projects" && "text-[#7562e0]"}
          >
            <a href="#projects">Projects</a>
          </li>
          <li
            onClick={() => {
              setFold(!fold);
              setActive("contact");
            }}
            className={active === "contact" && "text-[#7562e0]"}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;