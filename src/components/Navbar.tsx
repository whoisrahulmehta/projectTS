import { useState } from "react";
import Navlink from "./Navlink";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [expand, setExpand] = useState(false);

  const expandFun = ():void => {
    setExpand(false);
    if(expand){
      window.scrollTo(0 , 0);
    }
  };

  return (
    <nav
      className={`relative bg-transparent flex flex-row justify-between w-full  items-center px-5 sm:px-9 pt-3 pb-0 h-[9vh] sm:h-[15vh]  z-[9999] overflow-y-visible  `}
    >
      <div className="boxes sm:w-[10%] w-[50%]] h-[100%] py-0 sm:py-0">
        <img
          src="/brandlogo.webp"
          alt="img"
          className="object-contain h-[100%] w-[100%] text-[#136c89]"
        />
      </div>
      <div className="boxes lg:w-[70%] md:w-[80%] h-full md:flex hidden flex-row justify-evenly items-center text-white ">
        <Navlink expandFun={expandFun} />
      </div>
      <button
        onClick={() => setExpand(expand ? false : true)}
        className={` z-[99999] flex md:hidden flex-row justify-center items-center `}
      >
        {expand ? <ImCross color="orange" /> : <GiHamburgerMenu color="white" />}
      </button>
      <div
        className={`boxes w-2/3  ${
          expand ? "flex" : "hidden"
        } sidebar overflow-hidden md:hidden flex flex-col absolute z-[9] top-[0%] right-0  bg-black h-[100vh] gap-10 pt-[15vh] justify-start items-center text-sm text-gray-400`}
      >
        {expand ? <Navlink expandFun={expandFun} /> : ""}
      </div>
    </nav>
  );
};

export default Navbar;
