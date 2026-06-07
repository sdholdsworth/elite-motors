import { useEffect, useState } from "react";

//custom hook to determine window width optimally through use of useState in conjuction with useEffect
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //on mount: determine window width on window resize
  useEffect(() => {
    const windowWidthHandler = () => {
      setWindowWidth([window.innerWidth]);
    };
    window.addEventListener("resize", windowWidthHandler);

    //on un-mount: cleanup function to remove event listener to prevent potential memory leaks/retained previous value conflicts
    return () => {
      window.removeEventListener("resize", windowWidthHandler);
    };
  }, []);

  return windowWidth;
};

export default useWindowWidth;