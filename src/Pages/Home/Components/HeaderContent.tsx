import { MouseEventHandler } from "react";
import { ROUTE_HOME } from "../../../Routes/ConstantRoutes";
import { HeaderEnterAnimate, HeaderLink } from "./HeaderLink";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import "../Home.css";

interface HeaderContentProps {
  closeMenu: MouseEventHandler;
  menu: boolean;
}

export function HeaderContent(props: HeaderContentProps) {
  return (
    <div className="gap-8 radial-background h-full flex flex-col items-center justify-center text-stone-100">
      <div className="text-2xl flex flex-col gap-10 mr-8">
        <HeaderEnterAnimate menu={props.menu} transitionDelay={700}>
          <div className="font-extrabold flex items-end">
            <p className="text-lg mr-4 font-normal"> 1 </p>
            <HeaderLink
              title="Inicio"
              to={ROUTE_HOME}
              onClick={props.closeMenu}
            />
          </div>
        </HeaderEnterAnimate>
        <HeaderEnterAnimate menu={props.menu} transitionDelay={815}>
          <div className="font-extrabold flex items-end">
            <p className="text-lg mr-4 font-normal"> 2 </p>

            <HeaderLink
              title="Proyectos"
              to={ROUTE_HOME}
              onClick={props.closeMenu}
            />
          </div>
        </HeaderEnterAnimate>

        <HeaderEnterAnimate menu={props.menu} transitionDelay={930}>
          <div className="font-extrabold flex items-end">
            <p className="text-lg mr-4 font-normal"> 3 </p>
            <HeaderLink
              title="Acerca de mí"
              to={ROUTE_HOME}
              onClick={props.closeMenu}
            />
          </div>
        </HeaderEnterAnimate>
      </div>
    </div>
  );
}
