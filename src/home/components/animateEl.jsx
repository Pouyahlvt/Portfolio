import { useState , useEffect , useRef } from "react";

const AnimatedShowEl = ({ children, threshold = 0.2,classNames }) => {
  const [visible, setVisible] = useState(false);
  const curRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: threshold, rootMargin: "0px" },
    );

    if (curRef.current) {
      observer.observe(curRef.current);
    }

    return () => {
      if (curRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(curRef.current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={curRef}
      className={`transition-all duration-500 ease-in-out ${
        visible ? "translate-y-0" : "translate-y-5 opacity-0"}
        ${classNames}`}>
            {children}
        </div>
  );
};

export default AnimatedShowEl;

// THE IDEA :: 
// Have a direct to show comes from where [left, right, top, bottom]