import { useState, useEffect, useRef } from "react";
import AnimatedShowEl from "./components/animateEl";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNextdotjs,
  SiBootstrap,
  SiTypescript,
  SiPython,
} from "react-icons/si";

import {
  SiGit,
  SiGithub,
  SiVite,
  SiNpm,
  SiPnpm,
  SiDocker,
  SiFigma,
} from "react-icons/si";
const Skills = ({ theme, setActiveNav }) => {
  const [cate, setCate] = useState("tech");
  const curDivRef = useRef(null);

  useEffect(() => {
    const curDiv = curDivRef.current;
    const observer = new IntersectionObserver(
      (entry) => {
        entry.forEach((ent) => {
          if (ent.intersectionRatio > 0.5) {
            setActiveNav("skills");
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
      id="skills"
      className={`w-full h-270 max-md:h-200 overflow-hidden pb-20 pt-20 border-t-4 ${
        theme === "light"
          ? "bg-linear-to-b from-(--color-redorange) via-70% via-(--color-crismonred) to-(--color-rosewood)"
          : "bg-linear-to-b from-(--color-cosmos) to-(--color-dark-azur)"
      }`}>
      <AnimatedShowEl>
        <div
          className={`flex mx-auto w-fit p-2 border-0 rounded-full gap-4 ${theme === "light" ? "bg-(--color-dark-azur)" : "bg-(--color-redorange)"}`}>
          <button
            onClick={() => setCate("tech")}
            className={`text-xl font-ubuntu px-4 py-2 rounded-full transition-all duration-200 ease-in-out
                ${theme === "light" ? "text-(--color-redorange)" : "text-(--color-dark-azur)"}
                tracking-tight font-semibold hover:tracking-widest
                ${cate === "tech" ? `${theme === "light" ? "bg-(--color-rosewood)" : "bg-(--color-pastelOrange)"}` : ""} max-md:text-[15px]`}>
            Techinicals
          </button>
          <button
            onClick={() => setCate("tools")}
            className={`text-xl font-ubuntu px-4 py-2 rounded-full transition-all duration-200 ease-in-out
                ${theme === "light" ? "text-(--color-redorange)" : "text-(--color-dark-azur)"}
                tracking-tight font-semibold hover:tracking-widest
                ${cate === "tools" ? `${theme === "light" ? "bg-(--color-rosewood)" : "bg-(--color-pastelOrange)"}` : ""} max-md:text-[15px]`}>
            Tools
          </button>
        </div>
      </AnimatedShowEl>
      <AnimatedShowEl threshold={0.1}>
        <div>
          <div className="flex justify-center mt-5">
            <MakeSkill
              text="Next.js"
              state={cate}
              SkillState={"tech"}
              icon={<SiNextdotjs size={60} color="#000000" />}
              classNames={`mx-auto mt-20 max-md:mt-7 `}
              backGround={`bg-linear-to-br from-[#3f3f3f] to-[#f5f5f5]`}
            />

            <MakeSkill
              text="React"
              state={cate}
              SkillState={"tech"}
              icon={<SiReact size={60} color="#31d7fd" />}
              classNames={`mx-auto mt-20 max-md:mt-7`}
              backGround={`bg-linear-to-br from-[#31d7fd] to-(--color-rosewood)`}
            />
            <MakeSkill
              text="Tailwind"
              state={cate}
              SkillState={"tech"}
              icon={<SiTailwindcss size={60} color="#17aee0" />}
              classNames={`mx-auto mt-20 max-md:mt-7 `}
              backGround={`bg-linear-to-br from-[#17aee0] to-(--color-rosewood)`}
            />
            <MakeSkill
              text="Python"
              state={cate}
              SkillState={"tech"}
              icon={<SiPython size={60} color="#3f3f3f" />}
              classNames={`mx-auto mt-20 max-md:mt-7`}
              backGround={` bg-linear-to-br from-[#f5f5f5] to-[#3f3f3f]`}
            />
          </div>
          <div className="flex justify-center mt-5">
            <MakeSkill
              text="Bootstrap"
              state={cate}
              SkillState={"tech"}
              icon={<SiBootstrap size={60} color="#5d3aa8" />}
              classNames={`mx-auto mt-20 max-md:mt-7`}
              backGround={` bg-linear-to-br from-(--color-pastelOrange) to-[#5d3aa8]`}
            />
            <MakeSkill
              text="TypeScipt"
              state={cate}
              SkillState={"tech"}
              icon={<SiTypescript size={60} color="#375b34" />}
              classNames={`mx-auto mt-20 max-md:mt-7 `}
              backGround={`bg-linear-to-br from-[#375b34] to-(--color-dark-azur)`}
            />
            <MakeSkill
              text="JavaScript"
              state={cate}
              SkillState={"tech"}
              classNames={` mx-auto mt-20 max-md:mt-7 `}
              backGround={`bg-linear-to-br from-[#f3fd31] to-(--color-sharabi)`}
              icon={<SiJavascript size={60} color="#f3fd31" />}
            />
          </div>
          <div className="flex justify-center mt-5">
            <MakeSkill
              text="Html"
              state={cate}
              SkillState={"tech"}
              icon={<SiHtml5 size={60} color="#a72020" />}
              classNames={`mx-auto mt-20 max-md:mt-7`}
              backGround={`bg-linear-to-br from-[#a72020] to-(--color-orange)`}
            />
            <MakeSkill
              text="css"
              state={cate}
              SkillState={"tech"}
              icon={<SiCss size={60} color="#5b0079" />}
              classNames={`mx-auto mt-20 max-md:mt-7 `}
              backGround={`bg-linear-to-br from-[#5b0079] to-(--color-redorange)`}
            />
          </div>
        </div>
        <div
          className={`${cate === "tools" ? "-translate-y-225 max-lg:-translate-y-200 max-md:-translate-y-125" : "translate-y-0"} transition-all duration-150 ease-in-out`}>
          <div className="flex justify-center mt-5">
            <MakeSkill
              text="Git"
              state={cate}
              SkillState={"tools"}
              classNames={` mx-auto mt-20 max-md:mt-7 `}
              backGround={`bg-linear-to-br from-(--color-orange) to-[#ca0a0a]`}
              icon={<SiGit size={60} color="#ca0a0a" />}
            />
            <MakeSkill
              text="Github"
              state={cate}
              SkillState={"tools"}
              icon={<SiGithub size={60} color="#000000" />}
              classNames={`mx-auto mt-20 max-md:mt-7 `}
              backGround={`bg-linear-to-br from-[#3f3f3f] to-[#f5f5f5]`}
            />
            <MakeSkill
              text="Figma"
              state={cate}
              SkillState={"tools"}
              icon={<SiFigma size={60} color="#17aee0" />}
              classNames={`mx-auto mt-20 max-md:mt-7 `}
              backGround={`bg-linear-to-br from-[#17aee0] to-(--color-rosewood)`}
            />
            <MakeSkill
              text="npm"
              state={cate}
              SkillState={"tools"}
              icon={<SiNpm size={60} color="#ca0a0a" />}
              classNames={`mx-auto mt-20 max-md:mt-7 `}
              backGround={`bg-linear-to-br from-[#ca0a0a] to-(--color-dark-azur)`}
            />
          </div>
          <div className="flex justify-center mt-5">
            <MakeSkill
              text="pnpm"
              state={cate}
              SkillState={"tools"}
              icon={<SiPnpm size={60} color="#5d3aa8" />}
              classNames={`mx-auto mt-20 max-md:mt-7`}
              backGround={`bg-linear-to-br from-(--color-pastelOrange) to-[#5d3aa8]`}
            />
            <MakeSkill
              text="Docker"
              state={cate}
              SkillState={"tools"}
              icon={<SiDocker size={60} color="#3f3f3f" />}
              classNames={`mt-20 mx-auto max-md:mt-7`}
              backGround={`bg-linear-to-br from-[#f5f5f5] to-[#3f3f3f]`}
            />
            <MakeSkill
              text="Vite"
              state={cate}
              SkillState={"tools"}
              icon={<SiVite size={60} color="#b324d7" />}
              classNames={`mt-20 mx-auto max-md:mt-7 `}
              backGround={`bg-linear-to-br from-(--color-rosewood) to-[#b324d7]`}
            />
          </div>
        </div>
      </AnimatedShowEl>
    </div>
  );
};

const MakeSkill = ({
  classNames,
  icon,
  state,
  SkillState,
  text = "Nothing",
  backGround,
}) => {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  return (
    <div className={`${classNames}`}>
      <div
        className={`text-center ${backGround} border-0 rounded-full -z-5 p-2 
        transition-all duration-500 ease-in-out  
        ${hover ? "-translate-y-8" : "translate-y-18 scale-50 opacity-0"}`}>
        <p className="text-xl font-lato text-[#f5f5f5] max-md:text-[15px]">
          {text}
        </p>
      </div>
      <div
        onClick={() => {
          setClick(true);

          setTimeout(() => {
            setClick(false);
          }, 2000);
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={` flex justify-center items-center inset-0 w-40 h-40 ${backGround}
        shadow-2xl/80 transition-all delay-150 duration-500 ease-in-out animate-bubble
        rounded-full overflow-hidden ${state === SkillState ? "translate-y-0" : "opacity-0 translate-y-100 scale-0"}
        max-lg:w-30 max-lg:h-30 max-md:w-20 max-md:h-20`}>
        <div className="flex z-5 w-10 h-10 bg-white blur-md ml-15 mb-20"></div>
        <div
          className={`-ml-25 ${hover && !click ? "scale-120" : click ? "blur-xl" : ""} transition-all duration-500 ease-in-out max-md:scale-60`}>
          {icon}
        </div>
        <div className="absolute flex justify-center items-center w-38 h-38 border-l-4 border-b-4 border-white rounded-full blur-xs"></div>
      </div>
    </div>
  );
};

export default Skills;
