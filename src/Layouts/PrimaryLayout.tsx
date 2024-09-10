import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  const [addfix, setaddfix] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setaddfix(false);
      } else {
        setaddfix(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`${addfix ? "fixed top-0" : "relative"} w-full h-auto ${
          lastScrollY === 0 ? "" : ""
        } backdrop-blur-0 z-[1000]`}
      >
        <Navbar />
      </header>
      <main
        id="mainDiv"
        className={` sm:px-0 px-3 sm:pt-24 h-auto overflow-x-hidden z-[10]`}
      >
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};

// Export the Layout component
export default Layout;
