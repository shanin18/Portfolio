import { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };

  // Check the initial state from localStorage
  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode) {
      setDarkMode(storedMode === "true");
    }
  }, []);

  // Update class on body element based on dark mode state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div>
      {darkMode ? (
        <BiMoon
          className="cursor-pointer bg-[#7562e01e] w-7 h-7 lg:w-9 lg:h-9 p-1 lg:p-2 rounded-full text-[#7562e0]"
          onClick={toggleDarkMode}
        ></BiMoon>
      ) : (
        <BsSun
          className="cursor-pointer w-7 h-7 lg:w-9 lg:h-9 p-1 lg:p-2 rounded-full text-[#7562e0] bg-[#7562e01e]"
          onClick={toggleDarkMode}
        ></BsSun>
      )}
    </div>
  );
};

export default DarkMode;
