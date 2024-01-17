import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowsSize, setWindowsSize] = useState(1920);
  const handleWindowsSizeChange = () => {
    setWindowsSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowsSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowsSizeChange);
    };
  }, []);
  return windowsSize;
};

const CustomHookExample = () => {
  const windowSize = useWindowSize();
  console.log("currentWidth", windowSize);
  return <div></div>;
};

export default CustomHookExample;
