import { useState, useEffect } from "react";
import useScrollYThreshold from "../hooks/scrollYThreshold";
import { HomeIcon as HomeSolid } from "@heroicons/react/24/solid";
import { HomeIcon as HomeOutline } from "@heroicons/react/24/outline";
import { AcademicCapIcon as SkillSolid } from "@heroicons/react/24/solid";
import { AcademicCapIcon as SkillOutline } from "@heroicons/react/24/outline";
import { BeakerIcon as BreakOutline } from "@heroicons/react/24/outline";
import { BeakerIcon as BreakSolid } from "@heroicons/react/24/solid";
import { EnvelopeIcon as EmailSolid } from "@heroicons/react/24/solid";
import { EnvelopeIcon as EmailOutlineVer } from "@heroicons/react/24/outline";
import { LightBulbIcon as LampSolid } from "@heroicons/react/24/solid";
import { LightBulbIcon as LampOutline } from "@heroicons/react/24/outline";
import { SunIcon as SunSolid } from "@heroicons/react/24/solid";
import { MoonIcon as MoonSolid } from "@heroicons/react/24/solid";

const Navbar = ({ theme, setTheme , active, setActive}) => {
  const [animate, setAnimate] = useState(false);
  const { isActiveScrollY } = useScrollYThreshold(500);

  useEffect(() => {
    const animateload = () => {
      setAnimate(true);
    };

    animateload();

    return () => setAnimate(false);
  }, []);

  const scrollToSection = (sectionId) => {
    setActive(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className={`fixed flex top-3 inset-0 mx-auto h-17 w-fit items-center z-40
    backdrop:blur-2xl hover:shadow-xl/20 rounded-full border-2 border-(--color-sharabi) 
    transition-all duration-500 ease-in-out ${isActiveScrollY ? "scale-100 max-sm:scale-95" : "scale-85"}
    ${animate ? "translate-y-0" : "-translate-y-50  opacity-0"}
    ${theme === "light" ? "bg-[#f5f5f5] " : "bg-[#8b8b8b] "} max-md:h-14`}>
      <NavItems
        theme={theme}
        text={"Home"}
        state={active}
        setState={() => {
          scrollToSection("home");
        }}
        stateValue={"home"}
        iconOne={
          <HomeOutline
            className="w-8 h-8 max-md:h-5 max-md:w-5 max-sm:h-8 max-sm:w-8"
            color={`${theme === "light" ? "var(--color-redorange)" : "var(--color-dark-azur)"}`}
          />
        }
        iconTwo={
          <HomeSolid
            className="w-8 h-8 max-md:h-5 max-md:w-5 max-sm:h-8 max-sm:w-8"
            color={`${theme === "light" ? "var(--color-redorange)" : "var(--color-dark-azur)"}`}
          />
        }
      />
      <NavItems
        theme={theme}
        text={"About Me"}
        state={active}
        setState={() => {
           scrollToSection("aboutMe");
        }}
        stateValue={"aboutMe"}
        iconOne={
          <LampOutline
            className="w-8 h-8 max-md:h-5 max-md:w-5 max-sm:h-8 max-sm:w-8"
            color={`${theme === "light" ? "var(--color-redorange)" : "var(--color-dark-azur)"}`}
          />
        }
        iconTwo={
          <LampSolid
            className="w-8 h-8 max-md:h-5 max-md:w-5 max-sm:h-8 max-sm:w-8"
            color={`${theme === "light" ? "var(--color-redorange)" : "var(--color-dark-azur)"}`}
          />
        }
      />
      <NavItems
        theme={theme}
        text={"Skills"}
        state={active}
        setState={() => {
          scrollToSection("skills");
        }}
        stateValue={"skills"}
        iconOne={
          <SkillOutline
            className="w-8 h-8 max-md:h-5 max-md:w-5 max-sm:h-8 max-sm:w-8"
            color={`${theme === "light" ? "var(--color-redorange)" : "var(--color-dark-azur)"}`}
          />
        }
        iconTwo={
          <SkillSolid
            className="w-8 h-8 max-md:h-5 max-md:w-5 max-sm:h-8 max-sm:w-8"
            color={`${theme === "light" ? "var(--color-redorange)" : "var(--color-dark-azur)"}`}
          />
        }
      />
      <NavItems
        theme={theme}
        text={"Projects"}
        state={active}
        setState={() => {
          scrollToSection("project");
        }}
        stateValue={"project"}
        iconOne={
          <BreakOutline
            className="w-8 h-8 max-md:h-5 max-md:w-5 max-sm:h-8 max-sm:w-8"
            color={`${theme === "light" ? "var(--color-redorange)" : "var(--color-dark-azur)"}`}
          />
        }
        iconTwo={
          <BreakSolid
            className="w-8 h-8 max-md:h-5 max-md:w-5 max-sm:h-8 max-sm:w-8"
            color={`${theme === "light" ? "var(--color-redorange)" : "var(--color-dark-azur)"}`}
          />
        }
      />
      <NavItems
        theme={theme}
        text={"Contact"}
        state={active}
        setState={() => {
          scrollToSection("contact");
        }}
        stateValue={"contact"}
        iconOne={
          <EmailOutlineVer
            className="w-8 h-8 max-md:h-5 max-md:w-5 max-sm:h-8 max-sm:w-8"
            color={`${theme === "light" ? "var(--color-redorange)" : "var(--color-dark-azur)"}`}
          />
        }
        iconTwo={
          <EmailSolid
            className="w-8 h-8 max-md:h-5 max-md:w-5 max-sm:h-8 max-sm:w-8"
            color={`${theme === "light" ? "var(--color-redorange)" : "var(--color-dark-azur)"}`}
          />
        }
      />
      <span className="mx-2 text-4xl mb-2 text-(--color-sharabi) max-sm:mx-1">|</span>
      <div
        onClick={setTheme}
        className="w-10 h-10 rounded-full mx-4 hover:rotate-45 transition-all duration-300 ease-in max-sm:mr-2 max-sm:ml-0">
        <div
          className={`absolute transition-all duration-200 ease-in-out 
          ${theme === "light" ? "opacity-0 scale-0 rotate-90" : "-rotate-360"}`}>
          <MoonSolid className="w-10 h-10 " color="var(--color-dark-azur)" />
        </div>
        <div
          className={`absolute transition-all duration-200 ease-in-out 
          ${!(theme === "light") ? "opacity-0 scale-0 -rotate-90" : "rotate-90"}`}>
          <SunSolid className="w-10 h-10" color="var(--color-redorange)" />
        </div>
      </div>
    </div>
  );
};

const NavItems = ({
  theme,
  state,
  stateValue,
  setState,
  text,
  iconOne,
  iconTwo,
}) => {
  return (
    <div
      onClick={setState}
      className={` flex w-fit rounded-full mx-2 items-center max-md:mx-1
      ${
        state === stateValue
          ? `${theme === "light" ? "bg-(--color-cosmos)" : "bg-(--color-pastelOrange)"}`
          : `${theme === "light" ? "hover:bg-(--color-cosmos)" : "hover:bg-(--color-pastelOrange)"}`
      } 
      transition-all duration-200 ease-in hover:-translate-y-1 py-2 px-4 max-md:py-2 max-md:px-2`}>
      <div className="w-8 h-8  rounded-full max-md:h-5 max-md:w-5 max-sm:h-8 max-sm:w-8 ">
        <div
          className={`absolute transition-all duration-200 ease-in-out 
          ${state === stateValue ? "opacity-0 scale-0" : ""}`}>
          {iconOne}
        </div>
        <div
          className={`absolute transition-all duration-200 ease-in-out 
          ${!(state === stateValue) ? "opacity-0 scale-0" : ""}`}>
          {iconTwo}
        </div>
      </div>

      {text && (
        <p
          className={`mx-4 font-lato tracking-tighter text-xl max-lg:text-[15px] max-lg:mx-2 max-sm:hidden ${theme === "light" ? "text-(--color-redorange)" : "text-(--color-dark-azur)"}`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default Navbar;
