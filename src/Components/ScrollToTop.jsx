import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";
import { MdArrowUpward } from "react-icons/md";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <div className="scroll-top">
      <a
        href="#home"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <MdArrowUpward size='sm' color="white"/>
      </a>
    </div>
  ) : null;
};
