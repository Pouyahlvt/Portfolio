import { useRef, useEffect, useState } from "react";
import useWindowsize from "../hooks/windowSizeHook";
import AnimatedShowEl from "./components/animateEl";
import { SiGithub, SiReact, SiTailwindcss, SiJavascript } from "react-icons/si";
import ImageOne from "/images.jpg";
import ImageCoffeeShop from "/Coffee-shop.png"
import ImageInvoice from "/invoice-generator.png"
import ImageTodo from "/todo-list.png"
import ImageMapty from "/Mapty.png"
import Imagebankist from "/bankist.png"
import ImageMiniGames from "/mini-game.png"

const Projects = ({ theme, setActiveNav = () => {} }) => {
  const curDivRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);
  const [activingPro, setActivingPro] = useState({
    clicked: null,
    active: false,
  });
  const {width} = useWindowsize()

  useEffect(() => {
    if (!activingPro.active) return;

    if (activingPro.clicked > activeProject) {
      setTimeout(() => {
        setActiveProject((prev) => prev + 1);
      }, 100)
    } else if(activingPro.clicked < activeProject) {
      setTimeout(() => {
        setActiveProject((prev) => prev - 1);
      }, 100)
    }else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActivingPro({clicked: null, active: false})
    }
      
  }, [activingPro, activeProject]);

  const projectsValue = [
    {
      title: "Coffe-shop",
      gitHubLinkIcon: <SiGithub />,
      langs: [
        { lang: <SiReact />, name: "React js" },
        { lang: <SiTailwindcss />, name: "Tailwind" },
      ],
      text: "the online-shop website for sells coffee and more...",
      img: ImageCoffeeShop,
    },
    {
      title: "Invoice maker",
      gitHubLinkIcon: <SiGithub />,
      langs: [
        { lang: <SiReact />, name: "React js" },
        { lang: <SiTailwindcss />, name: "Tailwind" },
      ],
      text: "the site for makeing profesinal invoice with different themplate .",
      img: ImageInvoice,
    },
    {
      title: "food-recepies",
      gitHubLinkIcon: <SiGithub />,
      langs: [
        { lang: <SiReact />, name: "React js" },
        { lang: <SiTailwindcss />, name: "Tailwind" },
      ],
      text: "a website for find your food recepi with 2000 recepi with API. make in jonas course.",
      img: ImageOne,
    },
    {
      title: "to-do list",
      gitHubLinkIcon: <SiGithub />,
      langs: [
        { lang: <SiReact />, name: "React js" },
        { lang: <SiTailwindcss />, name: "Tailwind" },
      ],
      text: "simple to-do list my first react project.",
      img: ImageTodo,
    },
    {
      title: "Mapty",

      gitHubLinkIcon: <SiGithub />,
      langs: [{ lang: <SiJavascript />, name: "JavaScript" }],
      text: " a website white real map use Api and new library , made in jonas course",
      img: ImageMapty,
    },
    {
      title: "bankist",
      gitHubLinkIcon: <SiGithub />,
      langs: [{ lang: <SiJavascript />, name: "JavaScript" }],
      text: "i dont what is this even i just learn working with array in that , made in jonas course",
      img: Imagebankist,
    },
    {
      title: "mini-games",
      gitHubLinkIcon: <SiGithub />,
      langs: [{ lang: <SiJavascript />, name: "JavaScript" }],
      text: "my first project when i love games and start learning css ",
      img: ImageMiniGames,
    },
    {
      title: "hesabdari",
      gitHubLinkIcon: <SiGithub />,
      langs: [],
      text: "I will make this with next js and learn that .",
      img: ImageOne,
    },
  ];

  useEffect(() => {
    const curDiv = curDivRef.current;
    const observer = new IntersectionObserver(
      (entry) => {
        entry.forEach((ent) => {
          if (ent.intersectionRatio > 0.5) {
            setActiveNav("project");
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
      id="project"
      className={`w-full pt-20 h-205 border-y-2 overflow-hidden
        ${
          theme === "light"
            ? "bg-linear-to-b from-(--color-orange)  via-(--color-pastelOrange)  to-(--color-orange)"
            : "bg-linear-to-b from-(--color-rosewood)  via-(--color-sharabi)  to-(--color-rosewood)"
        }`}>
      <AnimatedShowEl>
        <h1
          className={`text-5xl text-center font-sans-pro tracking-tighter
          ${
            theme === "light"
              ? "text-(--color-dark-azur)"
              : "text-(--color-pastelOrange)"
          } max-md:text-4xl max-sm:text-3xl`}>
          Projects
        </h1>
      </AnimatedShowEl>
      <div className={`mt-15 w-full flex items-end justify-center h-full `}>
        <div
          className={`w-[85%] h-full border-0 flex justify-center items-center
          rounded-t-full `}>
          {/*  I map projectValue here !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
          {projectsValue.map((project, i) => (
            <div
              id={i}
              onClick={() => {setActivingPro({active: true, clicked: i})}}
              style={
                activeProject > i + 1
                  ? { marginLeft: `${width < 770 ? i * -45 + 338 : i * -80 + 750}px` }
                  : activeProject < i - 1
                    ? { marginRight: `${width < 770  ? i * 45 + 28 : i * 80 + 200}px`}
                    : {}
              }
              className={`absolute   p-2 rounded-xl transition-all duration-500 ease-in-out overflow-hidden
                ${theme === "light" 
                  ?"bg-linear-to-br from-(--color-dark-azur) to-(--color-crismonred) text-(--color-pastelOrange)" 
                  :"bg-linear-to-br from-(--color-orange) to-(--color-pastelOrange) text-(--color-sharabi)"}
              ${
                activeProject === i
                  ? "w-70 h-100 mb-85 shadow-2xl hover:shadow-2xl/100 hover:-translate-y-4 max-md:w-50 max-md:h-80 max-md:mb-50 max-sm:mb-75"
                  : activeProject - 1 === i
                    ? "w-35 h-50 -mb-35 ml-140 rotate-60  max-md:w-20 max-md:h-35 max-md:-mb-45 max-md:ml-100 max-sm:ml-40"
                    : activeProject + 1 === i
                      ? "w-35 h-50 -mb-35 mr-140 -rotate-60  max-md:w-20 max-md:h-35 max-md:-mb-45 max-md:mr-100 max-sm:mr-40"
                      : activeProject > i + 1
                        ? `w-2 h-2 -mb-120  rounded-full hover:h-10 max-md:scale-70`
                        : activeProject < i - 1
                          ? `w-2 h-2 -mb-120  rounded-full hover:h-10 max-md:scale-70`
                          : "scale-0"
              }`}>
              <div className="w-full h-[33%] rounded-md overflow-hidden">
                <img
                  src={project.img}
                  alt="image"
                  className="w-full h-full object-cover transition-all duration-5000 ease-in delay-300 hover:scale-125"
                />
              </div>
              <div className="flex">
                {(activeProject === i ||
                  activeProject === i - 1 ||
                  activeProject === i + 1) && (
                  <p
                    className={`font-sans-pro tracking-tight transition-all duration-300 ease-in   ${activeProject === i ? "text-xl m-2 max-md:text-[17px]" : "text-xs"}`}>
                    {project.title}
                  </p>
                )}
                {project.gitHubLinkIcon && (
                  <div
                    className={`flex ml-auto mr-2 justify-center items-center transition-all duration-300 ease-in 
                    ${activeProject === i ? "text-xl m-2 px-2 border-2 rounded-md hover:bg-amber-50 hover:shadow-2xl shadow-amber-50" : "text-xs scale-75"} `}>
                    {project.gitHubLinkIcon}
                    <span
                      className={`${activeProject === i ? "text-xl ml-2 max-md:text-xs max-md:ml-1" : "text-xs ml-1 max-md:hidden"} font-sans-pro tracking-tight`}>
                      GitHub
                    </span>
                  </div>
                )}
              </div>
              <div
                className={`w-full h-auto px-2 grid grid-cols-2 gap-2 transition-all duration-200 ease-in-out`}>
                {project.langs.map((lang, iTwo) => (
                  <div
                    id={`lang-${iTwo}`}
                    className={`border-2 hover:bg-amber-50 hover:shadow-2xl/80 shadow-amber-50 rounded-md flex 
                    justify-center items-center transition-all duration-300 ease-in-out`}>
                    {lang.lang}
                    <p
                      className={`${activeProject === i ? "ml-2 max-md:text-[15px] max-md:ml-1" : "text-[5px] ml-1"} transition-all duration-200 ease-in-out`}>
                      {lang.name}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <p
                  className={`transition-all duration-300 ease-in-out ${activeProject === i ? "m-2 mt-4 text-[20px] duration-300 max-md:text-[15px]" : "text-[10px] m-1 mt-2 duration-150 max-md:hidden "}`}>
                  {project.text}
                </p>
              </div>
            </div>
          ))}
          <button
            onClick={() =>
              setActiveProject((prev) =>
                prev === projectsValue.length - 1 ? prev : prev + 1,
              )
            }
            className={`absolute  mr-5 text-4xl right-0 mb-100 md:hover:scale-120 active:scale-90
              transition-all duration-200 ease-in-out
            ${theme === "light" ? "text-(--color-sharabi)" : "text-(--color-pastelOrange)" } max-md:text-2xl max-md:mb-65 max-sm:mr-1`}>
            ※⨠
          </button>
          <button
            onClick={() =>
              setActiveProject((prev) => (prev === 0 ? prev : prev - 1))
            }
            className={`absolute  ml-5 left-0 text-4xl mb-100 rotate-180 md:hover:scale-120 active:scale-90
              transition-all duration-200 ease-in-out 
            ${theme === "light" ? "text-(--color-sharabi)" : "text-(--color-pastelOrange)" } max-md:text-2xl max-md:mb-65 max-sm:ml-1`}>
            ※⨠
          </button>
          <div
            className={`w-50 h-50 border-2 rounded-full  mt-135
        bg-linear-to-bl from-[#f5f5f5] to-[#3f3f3f]
          duration-1000 transition-all ease-in-out hover:rotate-360  max-md:w-15 max-md:h-15 max-md:mt-119`}></div>
        </div>
      </div>
      <div className={`ml-0 mb-0`}>
        <span className="text-2xl"></span>
      </div>
    </div>
  );
};

export default Projects;
