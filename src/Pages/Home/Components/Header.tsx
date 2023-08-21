import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { HeaderContent } from "./HeaderContent";

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
        } ease-[cubic-bezier(.165,.84,.44,1)] delay-200 duration-1000 w-full h-screen transition-transform origin-top absolute bg-[#0e151f]`}
      >
       <HeaderContent menu={menu} closeMenu={closeMenu}/>
      </div>
      <div
        className={`${
          menu ? "" : "rotate-90"
        } top-8 sm:top-12 right-6 sm:right-14 fixed w-fit flex justify-end ease-in-out transition-transform`}
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
