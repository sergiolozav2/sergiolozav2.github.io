import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { HeaderLink } from "./HeaderLink";
import { ROUTE_HOME } from "../../../Routes/ConstantRoutes";

export function Header() {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menu);
  }

  function closeMenu() {
    setMenu(false);
  }
  return (
    <header className="z-10 fixed left-0 right-0">
      <div
        className={`${
          menu ? "" : "-translate-y-full"
        } duration-200 w-full h-screen transition-transform origin-top absolute bg-[#131c27]`}
      >
        <div className="gap-8 h-full flex flex-col items-center justify-center text-stone-100">
          <HeaderLink title="Inicio" to={ROUTE_HOME} onClick={closeMenu} />
          <HeaderLink title="Proyectos" to={ROUTE_HOME} onClick={closeMenu} />
          <HeaderLink
            title="Acerca de mí"
            to={ROUTE_HOME}
            onClick={closeMenu}
          />
          <HeaderLink title="LinkedIn" to={ROUTE_HOME} onClick={closeMenu} />
        </div>
      </div>
      <div
        className={`${
          menu ? "" : "hover:rotate-90 rotate-90"
        } top-8 sm:top-12 right-6 sm:right-14 hover:rotate-12 fixed w-fit flex justify-end ease-in-out transition-transform`}
      >
        <button onClick={toggleMenu} className="group">
          <div>
            <CgMenuGridO className="text-3xl sm:text-5xl text-stone-100" />
          </div>
        </button>
      </div>
    </header>
  );
}
