import useLocalStorage from "./hooks/localStorageHook";
import Navbar from "./home/navbar";
import Cursor from "./home/components/myCursor";
import Interduce from "./home/interduce";
import AboutMe from "./home/aboutme";
import Skills from "./home/skills"
import Contact from "./home/contact";
import Projects from "./home/Projects";
import { useState } from "react";
import useWindowsize from "./hooks/windowSizeHook";

export default function App() {
  const [theme, setTheme] = useLocalStorage("theme" ,"light");
  const [activeDiv, setActiveDiv] = useState("home")
  const {width} = useWindowsize()

  return (
    <div>
      {width > 770 && <Cursor />}
      <Navbar
        theme={theme}
        setTheme={() => setTheme(theme === "light" ? "dark" : "light")}
        active={activeDiv}
        setActive={setActiveDiv}
      />
      <Interduce theme={theme} setActiveNav={setActiveDiv}/>
      <AboutMe theme={theme} setActiveNav={setActiveDiv}/>
      <Skills theme={theme} setActiveNav={setActiveDiv}/>
      <Projects theme={theme} setActiveNav={setActiveDiv}/>
      <Contact theme={theme} setActiveNav={setActiveDiv}/>
    </div>
  );
}
