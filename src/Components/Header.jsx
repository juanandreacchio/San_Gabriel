import Logo from "./Logo.jsx";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  let links = [
    { name: "Nosotros", link: "/nosotros" },
    { name: "Productos", link: "/productos" },
    { name: "Preguntas", link: "/faqs" },
    { name: "Contáctanos", link: "/contacto" },
  ];

  const [isOpen, setisOpen] = useState(false);

  return (
    <header className="bg-purple-header shadow-md text-white w-full p-2 text-2xl flex items-center z-40 h-altura_navbar_md font-manrope ">
      <div className="py-4 px-7 w-full h-full flex flex-col md:flex-row justify-between items-start md:items-center contenedor  ">
        <Link to="/">
          <Logo />
        </Link>
        <section
          className={` bg-purple-header md:bg-inherit flex flex-col md:flex-row items-center  justify-center gap-5  md:static absolute left-0 top-0  w-full h-screen md:h-5 md:w-auto z-5 ease-in duration-800 transition-all md:translate-y-0  md:p-2 duration-300 ${
            isOpen
              ? "translate-y-0 "
              : "-translate-y-full opacity-0 md:opacity-100"
          }`}
        >
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.link}
              className={`my-5 md:my-0 mx-10 font-bold text-white-white_figma  relative group md:text-md ${
                isOpen ? "text-2xl" : "text-base"
              }`}
              onClick={() => setisOpen(false)}
            >
              <span>{link.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white-white_figma transition-all group-hover:w-full"></span>
            </NavLink>
          ))}
        </section>
        <div
          onClick={() => setisOpen(!isOpen)}
          className="h-[100px] w-[50px] text-white-white_figma absolute right-8 cursor-pointer md:hidden z-20"
        >
          {isOpen ? <XMarkIcon /> : <Bars3Icon />}
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;

