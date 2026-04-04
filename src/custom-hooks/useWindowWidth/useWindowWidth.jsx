import { useEffect, useState } from "react";

/* custom hook to determine window width optimally through useState and useEffect (remove resize 
   listener to prevent memory leaks and unnecessary event handling after determining the width) */
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const windowWidthHandler = () => {
      setWindowWidth([window.innerWidth]);
    };
    window.addEventListener("resize", windowWidthHandler);

    return () => {
      window.removeEventListener("resize", windowWidthHandler);
    };
  }, []);

  return windowWidth;
};

export default useWindowWidth;