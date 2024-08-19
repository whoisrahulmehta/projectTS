
import { NavLink } from "react-router-dom";

function Navlink({expandFun}) {
  return (
    <>
      {[
        { name: "home", path: "/" },
        { name: "about", path: "/about" },
        { name: "services", path: "/services" },
        { name: "projects", path: "/projects" },
        { name: "contact us", path: "/contactus" },
      ].map((a, i) => (
        <NavLink
          key={i}
          to={a.path}
          className="w-fit px-2 py-2  sm:last-of-type:bg-[white] sm:last-of-type:text-[orange] last-of-type:bg-white  last:text-[orange] last-of-type:rounded-[5px] whitespace-nowrap flex flex-row justify-between items-center text-sm"
        >
          <span className="w-[fit]  uppercase font-semibold" onClick={() => expandFun()}> {a.name} </span>
        </NavLink>
      ))}
    </>
  );
}

export default Navlink;
