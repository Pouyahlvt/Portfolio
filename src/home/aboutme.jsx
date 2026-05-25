import AnimatedShowEl from "./components/animateEl";
import { useEffect, useRef } from "react";

const AboutMe = ({ theme , setActiveNav}) => {
    const curDivRef = useRef(null);

  useEffect(() => {
    const curDiv = curDivRef.current;
    const observer = new IntersectionObserver(
      (entry) => {
        entry.forEach((ent) => {
          if (ent.intersectionRatio > 0.5) {
            setActiveNav("aboutMe");
          } else {
            return;
          }
        });
      },
      {threshold: 0.5},
    );

    if (curDiv) {
      observer.observe(curDiv);
    }

    return () => {
      if (curDiv) {
        observer.unobserve(curDiv);
      }
    };
  }, [setActiveNav]);

  return (
    <div
    ref={curDivRef}
    id="aboutMe"
      className={`w-full min-h-screen pt-20 pb-10 border-t-2
        ${theme === "light" ? "bg-(--color-redorange)" : "bg-(--color-cosmos)"}`}>
      <AnimatedShowEl threshold={1}>
        <p
          className={`text-5xl font-puppins text-center font-semibold tracking-tighter mb-5
        transition-all duration-200 ease-in-out
          ${theme === "light" ? "text-(--color-cosmos)" : "text-(--color-redorange) max-md:text-4xl"}`}>
          About Me
        </p>
      </AnimatedShowEl>
      <AnimatedShowEl threshold={1}>
        <p
          className={`text-3xl mt-15 font-puppins text-center  tracking-tight mb-5
        transition-all duration-200 ease-in-out
          ${theme === "light" ? "text-(--color-cosmos)" : "text-(--color-redorange)"} max-md:text-xl max-md:mt-10`}>
          I am a <span className="font-semibold">self-thought frontend developer</span> who start javascript and fell in love in <span className="font-semibold">react</span> . <br />
          and all library  :/
        </p>
      </AnimatedShowEl>
      <AnimatedShowEl threshold={1}>
        <p
          className={`text-3xl mt-10 font-puppins text-center  tracking-tight mb-5
        transition-all duration-200 ease-in-out
          ${theme === "light" ? "text-(--color-cosmos)" : "text-(--color-redorange)"} max-md:text-xl`}>
        I Build usersafe website with <span className="font-semibold">react & tailwind css</span> and maybe Next.js <br />
        i care about animation and clean userface that feel good to use.  
        </p>
      </AnimatedShowEl>
      <AnimatedShowEl threshold={1}>
        <p
          className={`text-3xl mt-10 font-puppins text-center  tracking-tight mb-5
        transition-all duration-200 ease-in-out
          ${theme === "light" ? "text-(--color-cosmos)" : "text-(--color-redorange)"} max-md:text-xl`}>
        My knolage came from free resource : Youtube , Documention and building Projects.
        </p>
      </AnimatedShowEl>
      <AnimatedShowEl threshold={1}>
        <p
          className={`text-3xl mt-10 mb-2 font-puppins text-center  tracking-tight
        transition-all duration-200 ease-in-out
          ${theme === "light" ? "text-(--color-cosmos)" : "text-(--color-redorange)"} max-md:text-xl`}>
            Right now i am lookin for <span className="font-semibold">[ freelacer-work / an entry-level role / open-source collabration ]</span> <br />
            where i can keep Learning and building things peaple actully use .
        </p>
      </AnimatedShowEl>
    </div>
  );
};

export default AboutMe;
