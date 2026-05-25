import { useState, useEffect } from "react";

const Cursor = () => {
  const [dot, setDot] = useState({ x: 0, y: 0 });
  const [circle, setCircle] = useState({ x: 0, y: 0 });
  const [click, setClick] = useState(false);

  useEffect(() => {
    let rafId;

    const updateposition = (e) => {
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          setDot({ x: e.clientX, y: e.clientY });

          setTimeout(() => {
            setCircle({ x: e.clientX, y: e.clientY });
          }, 20);

          rafId = null;
        });
      }
    };

    const handleMouseDown = () => {
      setClick(true);
      // Reset after animation
      setTimeout(() => {
        setClick(false);
      }, 100);
    };

    window.addEventListener("mousemove", updateposition);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", updateposition);
      window.removeEventListener("mousedown", handleMouseDown);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div>
      <div
        className={`fixed pointer-events-none z-50 transition-transform duration-500 
        ease-in-out rounded-full bg-[#ffc06790] backdrop-blur-xs`}
        style={{
          left: `${dot.x}px`,
          top: `${dot.y}px`,
          transform: "translate(-50%, -50%)",
        }}>
        <div
          className={`${click ? "w-3 h-3" : "w-8 h-8"} rounded-full border-2 border-[#ff4d00] 
          overflow-hidden flex items-center transition-all duration-75 ease-in`}>
        </div>
      </div>
      <div
        className={`fixed pointer-events-none z-50 `}
        style={{
          left: `${circle.x}px`,
          top: `${circle.y}px`,
          transform: "translate(-50%, -50%)",
        }}>
        <div
          className={`
        transition-all duration-100
             w-4 h-4 bg-linear-to-bl from-(--color-sharabi) to-(--color-redorange) rounded-full inset-shadow-xl`}
        />
      </div>
    </div>
  );
};

export default Cursor;
