import React, { useEffect, useState } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.add("light");
      element.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative w-12">
      {theme === "light" ? (
        <img
          onClick={toggleTheme}
          src={LightButton}
          alt="Switch to Light mode"
          className="w-full cursor-pointer"
        />
      ) : (
        <img
          onClick={toggleTheme}
          src={DarkButton}
          alt="Switch to Dark mode"
          className="w-full cursor-pointer"
        />
      )}
    </div>
  );
};

export default DarkMode;
