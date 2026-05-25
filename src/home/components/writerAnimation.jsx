import { useState, useEffect } from "react";

const WriterAnimatrion = ({
  text,
  delay = 500,
  speed = 50,
  className ,
  blinkClass
}) => {
  const [startTyping, setStartTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const delayTimeOut = setTimeout(() => {
      setStartTyping(true);
    }, delay);

    return () => clearTimeout(delayTimeOut);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, startTyping]);

  return (
    <p className={` leading-relaxed ${className}`}>
      {displayText}
      {currentIndex < text.length && (
        <span
          className={`${blinkClass} inline-block  ml-0.5 animate-pulse -z-10`}/>
      )}
    </p>
  );
};

export default WriterAnimatrion;
