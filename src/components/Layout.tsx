import { ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [addfix, setaddfix] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setaddfix(false);
      } else {
        // Scrolling up
        setaddfix(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`${
          addfix ? "fixed top-0" : "relative"
        } w-full h-auto bg-black sm:px-7`}
      >
        <Navbar />
      </header>
      <main
        className={`sm:px-7 px-5 h-[200vh] ${
          addfix ? "mt-[9vh] sm:mt-[15vh]" : ""
        }`}
      >
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
