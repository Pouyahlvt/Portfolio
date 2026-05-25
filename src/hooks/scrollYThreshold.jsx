import { useState, useEffect } from "react";

const useScrollYThreshold = (threshold = 50) => {
  const [isActiveScrollY, setIsActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsActive(currentScrollY >= threshold);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return {isActiveScrollY , scrollY};
};

export default useScrollYThreshold;
