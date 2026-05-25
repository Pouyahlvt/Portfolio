import WriterAnimatrion from "./components/writerAnimation";
import { useRef, useEffect } from "react";

const Interduce = ({ theme, setActiveNav }) => {
  const firstText = "Builds dynamics web application with React ^_^ ";
  const curDivRef = useRef(null);

  useEffect(() => {
    const curDiv = curDivRef.current;
    const observer = new IntersectionObserver(
      (entry) => {
        entry.forEach((ent) => {
          if (ent.intersectionRatio > 0.5) {
            setActiveNav("home");
          } else {
            return;
          }
        });
      },
      { threshold: 0.5 },
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
      id="home"
      className={`w-full h-screen sm:flex pt-30 ${
        theme === "light"
          ? "bg-linear-to-b from-(--color-white-smoke) via-70% via-(--color-pumpkin)  to-(--color-redorange)"
          : "bg-linear-to-b from-(--color-dark-azur) via-70% via-(--color-sharabi)  to-(--color-cosmos)"
      }`}>
      <div className={`w-[50%] max-sm:w-full h-fit px-7`}>
        <h1
          className={`sm:w-fit  mt-15 font-oswald text-7xl pb-2 tracking-tighter 
            ${
              theme === "light"
                ? "bg-linear-to-br from-(--color-orange) to-(--color-redorange)"
                : " bg-linear-to-br from-(--color-pastelOrange) to-(--color-crismonred)"
            }
                bg-clip-text text-transparent max-md:text-5xl max-sm:text-center`}>
          I am Pouya Halavat
        </h1>
        <h2
          className={`sm:w-fit  mt-7 text-4xl font-poppins font-semibold tracking-tighter 
          ${theme === "light" ? "text-(--color-cosmos)" : "text-(--color-redorange)"} max-lg:text-3xl max-sm:text-center`}>
          {`Front-end developer `}
        </h2>
        {
          <WriterAnimatrion
            text={firstText}
            delay={1000}
            speed={75}
            className={`mt-5 font-poppins tracking-tighter text-2xl ${theme === "light" ? "text-(--color-cosmos)" : "text-(--color-redorange)"} max-sm:text-center`}
            blinkClass={`w-1 h-7 -mb-2 ${theme === "light" ? "bg-(--color-cosmos)" : "bg-(--color-redorange)"}`}
          />
        }
      </div>
      <div className={`w-[50%] p-5 flex items-center`}>
        <div className="w-[90%] overflow-hidden opacity-15 "></div>
      </div>
    </div>
  );
};

export default Interduce;
