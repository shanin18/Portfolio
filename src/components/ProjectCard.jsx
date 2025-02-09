import Reveal from "./Reveal";
import { useState } from "react";
import { motion } from "framer-motion";
import { FcNext, FcPrevious } from "react-icons/fc";
import LazyLoad from "react-lazy-load";

const ProjectCard = ({ project }) => {
  const [fold, setFold] = useState(false);
  const { images, title, summery, liveLink, clientSide, serverSide } = project;

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? "100%" : "-100%",
        opacity: 0,
      };
    },
  };

  const paginate = (direction) => {
    const newIndex = currentIndex + direction;
    setCurrentIndex((newIndex + images.length) % images.length);
  };
  return (
    <Reveal>
      <div className="border dark:border-[#7562e0] rounded-md w-[295px] md:w-[490px] overflow-hidden">
        <div className="relative h-[180px] md:h-[240px]">
          {images ? (
            images?.map((slide, index) => (
              <motion.div
                key={index}
                className={`overflow-hidden absolute top-0 left-${
                  index === currentIndex ? "0" : "w-full"
                } w-full h-full`}
                initial={index === currentIndex ? "center" : "enter"}
                animate={index === currentIndex ? "center" : "exit"}
                variants={slideVariants}
                transition={{ duration: 0.5 }}
              >
                <LazyLoad className="h-[180px] md:h-[240px]">
                  <img
                    src={slide}
                    alt="project Image"
                    className="hover:scale-110 duration-300 w-full min-h-full"
                  />
                </LazyLoad>
              </motion.div>
            ))
          ) : (
            <div className="skeleton h-auto w-full"></div>
          )}
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 focus:outline-none p-1 bg-white  border rounded-full"
            onClick={() => paginate(-1)}
          >
            <FcPrevious className="text-sm"></FcPrevious>
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none p-1 bg-white border  rounded-full"
            onClick={() => paginate(1)}
          >
            <FcNext className="text-sm"></FcNext>
          </button>
        </div>

        <div className="p-5">
          <h2 className="font-semibold text-2xl mb-4 dark:text-[#7562e0]">
            {title}
          </h2>
          <div>
            {summery.length > 78 ? (
              <div>
                {!fold ? (
                  <p className="text-gray-700 dark:text-white text-sm mb-4">
                    {summery.substring(0, 78)} ...
                    <button
                      className="text-[#7562e0]"
                      onClick={() => setFold(!fold)}
                    >
                      see more
                    </button>
                  </p>
                ) : (
                  <p className="text-gray-700 dark:text-white text-sm mb-4">
                    {summery} ...
                    <button
                      className="text-[#7562e0]"
                      onClick={() => setFold(!fold)}
                    >
                      see less
                    </button>
                  </p>
                )}
              </div>
            ) : (
              <p className="text-gray-700 dark:text-white text-sm mb-4">
                {summery}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="font-poppins border border-[#7562e0] px-4 py-1 rounded-md text-[#7562e0] hover:text-white hover:bg-[#7562e0] ease-in-out transition-all duration-200 hover:shadow-neon">
              <a href={liveLink} target="_blank" rel="noreferrer">
                Live
              </a>
            </button>
            {clientSide && (
              <button className="font-poppins border border-[#7562e0] px-4 py-1 rounded-md text-[#7562e0] hover:text-white hover:bg-[#7562e0] ease-in-out transition-all duration-200 hover:shadow-neon">
                <a href={clientSide} target="_blank" rel="noreferrer">
                  Client
                </a>
              </button>
            )}

            {serverSide && (
              <button className="font-poppins border border-[#7562e0] px-4 py-1 rounded-md text-[#7562e0] hover:text-white hover:bg-[#7562e0] ease-in-out transition-all duration-200 hover:shadow-neon">
                <a href={serverSide} target="_blank" rel="noreferrer">
                  Server
                </a>
              </button>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectCard;
