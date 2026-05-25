import { useState, useEffect, useRef } from "react";
import useLocalStorage from "../hooks/localStorageHook";
import { GithubIcon, TelegramIcon } from "./components/iconsFooter";
import { Linkedin } from "./components/Linkedin";
import AnimatedShowEl from "./components/animateEl";

const Contact = ({ theme, setActiveNav }) => {
  const [activeInput, setActiveInput] = useState(null);
  const [sendMassage, setSendMassage] = useLocalStorage("sendmassage", {
    name: "",
    subject: "",
    email: "",
    text: "",
  });
  const curDivRef = useRef(null);

  useEffect(() => {
    const curDiv = curDivRef.current;
    const observer = new IntersectionObserver(
      (entry) => {
        entry.forEach((ent) => {
          if (ent.intersectionRatio > 0.5) {
            setActiveNav("contact");
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

  const handleSendMassage = (e) => {
    e.preventDefault();
    if (
      sendMassage.email.slice(-10) !== "@gmail.com" &&
      sendMassage.email.slice(-10) !== "@yahoo.com"
    ) {
      setActiveInput("email");
    } else if (sendMassage.text.length < 1) {
      
      setActiveInput("text");
    } else {
      
      setActiveInput(null);
      setSendMassage({
        name: "",
        subject: "",
        email: "",
        text: "",
      });
    }
  };

  return (
    <div
      ref={curDivRef}
      id="contact"
      className={`w-full min-h-[120vh] pb-0 overflow-hidden transition-all duration-200 ease-in-out
        ${
          theme === "light"
            ? "bg-radial from-5% from-(--color-pastelOrange) to-(--color-pumpkin)"
            : "bg-radial from-5% from-(--color-rosewood) to-(--color-cosmos)"
        }`}>
      <AnimatedShowEl>
        <h1
          className={`text-center text-5xl mt-20 font-semibold font-ubuntu tracking-tight ${
            theme === "light"
              ? "text-(--color-dark-azur)"
              : "text-(--color-redorange)"
          } max-md:text-4xl max-sm:text-3xl`}>
          {`Conatcat `}
          <span
            className={`ml-2 ${theme === "light" ? "text-(--color-crismonred)" : "text-(--color-pastelOrange)"} `}>
            Me
          </span>
        </h1>
      </AnimatedShowEl>
      <AnimatedShowEl>
        <p className={`text-center text-2xl mt-5 font-ubuntu opacity-60 ${
            theme === "light"
              ? "text-(--color-sharabi)"
              : "text-(--color-orange)"
          } max-md:text-xl max-sm:text-[15px]`}>Enter your email, write your massage and send to me ^_^</p>
      </AnimatedShowEl>

      <div className="w-[75%] h-auto pb-10 flex mx-auto overflow-hidden backdrop-blur-lg mt-20 sm:border-4
       sm:bg-[#f5f5f53b] rounded-4xl border-(--color-white-smoke) max-md:w-[90%] max-sm:w-full max-sm:mt-10">
        <form className="w-full h-auto" action="">
          <div className="sm:flex w-[80%] mx-auto max-sm:w-[90%]">
            <p
              className={`ml-5 -z-5 text-2xl font-semibold font-ubuntu absolute transition-all duration-150 ease-out 
                ${activeInput === "name" ? "mt-5 max-sm:-mt-6 scale-100" : "mt-15 max-sm:mt-0 scale-50"}
           ${
             theme === "light"
               ? "text-(--color-dark-azur)"
               : "text-(--color-redorange)"
           } max-sm:text-[15px] max-sm:ml-3`}>
              Your Name :{" "}
            </p>
            <input
              placeholder="Your name :) ."
              onChange={(e) => {
                setSendMassage({ ...sendMassage, name: e.target.value });
              }}
              value={sendMassage.name}
              onClick={() => setActiveInput("name")}
              type="text"
              className={`flex px-5 mt-15 w-[48%] font-poppins h-12 border-2 rounded-2xl
               text-xl outline-0 transition-all duration-700 ease-in-out 
               ${activeInput === "name" ? "shadow-2xl/70" : ""}
               ${
                 theme === "light"
                   ? "bg-linear-to-r from-(--color-redorange) to-99% to-(--color-pastelOrange) text-(--color-dark-azur)  placeholder:text-[#49070784] "
                   : "bg-linear-to-r from-(--color-cosmos) to-99% to-(--color-rosewood) text-(--color-pastelOrange)  placeholder:text-[#ffa6007b]"
               } max-md:text-[17px] max-sm:text-[14px] max-sm:px-3 max-sm:w-full max-sm:mt-8`}
            />

            <div className="sm:w-[48%] ml-auto">
              <p
                className={`ml-5 -z-5 text-2xl font-semibold font-ubuntu absolute transition-all duration-150 ease-out 
                ${
                  activeInput === "subject"
                    ? "mt-5 max-sm:-mt-6 scale-100"
                    : "mt-15 max-sm:mt-0 scale-50"
                }
           ${
             theme === "light"
               ? "text-(--color-dark-azur)"
               : "text-(--color-redorange)"
           } max-sm:text-[15px] max-sm:ml-3`}>
                Subject :{" "}
              </p>
              <input
                placeholder="Write Your Subject ."
                onChange={(e) => {
                  setSendMassage({ ...sendMassage, subject: e.target.value });
                }}
                value={sendMassage.subject}
                onClick={() => setActiveInput("subject")}
                type="text"
                className={`flex px-5 mt-15 w-full font-poppins h-12 border-2 rounded-2xl
               text-xl outline-0 transition-all duration-700 ease-in-out 
               ${activeInput === "subject" ? "shadow-2xl/70" : ""}
               ${
                 theme === "light"
                   ? "bg-linear-to-r from-(--color-redorange) to-99% to-(--color-pastelOrange)  text-(--color-dark-azur) placeholder:text-[#49070784] "
                   : "bg-linear-to-r from-(--color-cosmos) to-99% to-(--color-rosewood) text-(--color-pastelOrange)  placeholder:text-[#ffa6007b]"
               } max-md:text-[17px] max-sm:text-[14px] max-sm:px-3 max-sm:mt-8`}
              />
            </div>
          </div>

          <p
            className={`ml-30 -z-5 text-2xl font-semibold font-ubuntu absolute transition-all duration-150 ease-out 
                ${activeInput === "email" ? "mt-5 max-sm:mt-2 scale-100" : "mt-15 scale-50"}
           ${
             theme === "light"
               ? "text-(--color-dark-azur)"
               : "text-(--color-redorange)"
           } max-md:ml-20 max-sm:text-[15px] max-sm:ml-7`}>
            Email :{" "}
          </p>
          <input
            placeholder="Simple@email.com"
            onChange={(e) => {
              setSendMassage({ ...sendMassage, email: e.target.value });
            }}
            value={sendMassage.email}
            onClick={() => setActiveInput("email")}
            type="text"
            className={`flex  mx-auto px-5 mt-15 w-[80%] font-poppins h-12 border-2 rounded-2xl
               text-xl outline-0 transition-all duration-700 ease-in-out
               ${activeInput === "email" ? "shadow-2xl/70" : ""}
              ${sendMassage.email.slice(-10) === "@gmail.com" || sendMassage.email.slice(-10) === "@yahoo.com" ? "" : "outline-4 outline-[#fe00006a]"}
               ${
                 theme === "light"
                   ? "bg-linear-to-r from-(--color-redorange) to-99% to-(--color-pastelOrange) text-(--color-dark-azur)  placeholder:text-[#49070784] "
                   : "bg-linear-to-r from-(--color-cosmos) to-99% to-(--color-rosewood) text-(--color-pastelOrange)  placeholder:text-[#ffa6007b]"
               } max-md:text-[17px] max-sm:text-[14px] max-sm:px-3 max-sm:mt-8 max-sm:w-[90%] `}
          />

          <p
            className={`ml-30 -z-5 text-2xl font-semibold font-ubuntu absolute transition-all duration-150 ease-out 
                ${activeInput === "text" ? "mt-5 max-sm:mt-2 scale-100" : "mt-15 scale-50"}
           ${
             theme === "light"
               ? "text-(--color-dark-azur)"
               : "text-(--color-redorange)"
           } max-md:ml-20 max-sm:text-[15px] max-sm:ml-7  `}>
            Your Massage :{" "}
          </p>

          <textarea
            placeholder="Write your massage please :/"
            onClick={() => setActiveInput("text")}
            onChange={(e) => {
              setSendMassage({ ...sendMassage, text: e.target.value });
            }}
            value={sendMassage.text}
            rows={7}
            cols={50}
            className={`flex mx-auto p-5 mt-15 w-[80%] font-poppins text-xl min-h-[40vh] overflow-y-hidden border-2
              transition-all duration-700 ease-in-out
              rounded-4xl outline-0
              ${activeInput === "text" ? "shadow-2xl/70" : ""}
              ${sendMassage.text.length > 0 ? "" : "outline-4 outline-[#ff00006a]"}
               ${
                 theme === "light"
                   ? "bg-linear-to-r from-(--color-redorange) to-99% to-(--color-pastelOrange) text-(--color-dark-azur)  placeholder:text-[#49070784] "
                   : "bg-linear-to-r from-(--color-cosmos) to-99% to-(--color-rosewood)  text-(--color-pastelOrange) placeholder:text-[#ffa6007b]"
               } max-md:text-[17px] max-sm:text-[14px] max-sm:px-3 max-sm:min-h-[30vh] max-sm:mt-8 max-sm:rounded-2xl max-sm:w-[90%]`}
          />
          <button
            onClick={handleSendMassage}
            className={`ml-25 mt-10 px-8 py-3 text-xl border-2 rounded-full font-poppins font-semibold hover:shadow-2xl/50
              transiiton-all duration-300 ease-in-out tracking-tight active:scale-95
            ${
              theme === "light"
                ? "bg-linear-to-r from-(--color-redorange) to-99% to-(--color-pastelOrange) text-(--color-dark-azur) hover:text-(--color-crismonred) "
                : "bg-linear-to-r from-(--color-cosmos) to-99% to-(--color-rosewood)  text-(--color-pastelOrange) hover:text-(--color-crismonred)"
            } max-md:ml-17 max-sm:ml-7 max-sm:mt-4 max-sm:hover:shadow-xl/40 `}>
            Send Massage
          </button>
        </form>
      </div>
      <div
        className={`flex items-center justify-center mt-20 h-15 w-full border-t-2
          border-amber-50
          ${
            theme === "light" ? "bg-(--color-pumpkin)" : "bg-(--color-cosmos)"
          } max-sm:h-12 max-sm:mt-10`}>
        <p
          className={`ml-40 
          ${
            theme === "light"
              ? "text-(--color-cosmos)"
              : "text-(--color-pastelOrange)"
          } max-sm:hidden`}>
          © 2026 Vitaliy Sopin. All rights reserved.
        </p>
        <div className="w-[60%] flex sm:ml-auto h-full items-center justify-center max-sm:w-full">
          <div className="ml-20 transition-all max-sm:ml-0">
            {
              <GithubIcon
                size={30}
                strokeWidth={1.5}
                stroke={`${theme === "light" ? "var(--color-cosmos)" : "var(--color-pastelOrange)"}`}
              />
            }
          </div>
          <div className="ml-5 transition-all ">
            {
              <TelegramIcon
                size={30}
                strokeWidth={16}
                stroke={`${theme === "light" ? "var(--color-cosmos)" : "var(--color-pastelOrange)"}`}
              />
            }
          </div>
          <div className="ml-3 transition-all ">
            {
              <Linkedin
                width={30}
                stroke={`${theme === "light" ? "var(--color-cosmos)" : "var(--color-pastelOrange)"}`}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
