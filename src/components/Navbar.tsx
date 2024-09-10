import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navlink from "./Navlink";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  const navRef = useRef(null);

  const expandFun = () => {
    setExpand(false);
    if (expand) {
      window.scrollTo(0, 0);
    }
  };

  // Function to handle clicks outside of the navbar
  const handleClickOutside = (event: any) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setExpand(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks when the navbar is expanded
    if (expand) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when navbar is expanded
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      // Allow body scroll when navbar is not expanded
      document.body.style.overflow = "";
    }

    // Cleanup the event listener and reset body overflow
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [expand]);

  return (
    <nav
      className={`animo border border-transparent border-t-gray-200 sm:px-7 relative flex flex-row justify-between w-full items-center px-5 pt-3 pb-0 h-[10vh] sm:h-[16vh] z-[9999] overflow-y-visible ${
        expand ? "fixed top-0 left-0 right-0 bg-white" : "bg-white shadow-md"
      }`}
    >
      <div className="boxes sm:w-[15%] w-[50%] h-[100%] flex flex-row justify-center items-center">
        <img
          src="/vite.svg"
          alt="img"
          className="object-contain sm:h-[6rem] h-[5rem] origin-center"
        />
      </div>
      <div className="boxes lg:w-[70%] md:w-[80%] h-full lg:flex hidden flex-row justify-evenly items-center text-[#202086] font-semibold">
        <Navlink expandFun={expandFun} />
      </div>
      <button
        onClick={() => setExpand((prev) => !prev)}
        className={`z-[99999] flex lg:hidden flex-row justify-center items-center`}
      >
        {expand ? (
          <ImCross color="#202086" />
        ) : (
          <GiHamburgerMenu color="#202086" />
        )}
      </button>

      {/* Animate Presence for smooth transitions */}
      <AnimatePresence>
        {expand && (
          <motion.div
            ref={navRef}
            className="boxes w-2/3 sidebar overflow-hidden lg:hidden flex flex-col absolute z-[9999] top-0 right-0 bg-white h-[100vh] gap-10 pt-[15vh] justify-start items-center text-sm text-[#202086] shadow-lg"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 3,
            }}
          >
            <Navlink expandFun={expandFun} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
