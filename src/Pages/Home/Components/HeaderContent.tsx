import { MouseEventHandler } from "react";
import { ROUTE_HOME } from "../../../Routes/ConstantRoutes";
import { HeaderEnterAnimate, HeaderLink } from "./HeaderLink";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import "./StarsCustom.css";

interface HeaderContentProps {
  closeMenu: MouseEventHandler;
  menu: boolean;
}

export function HeaderContent(props: HeaderContentProps) {
  return (
    <div className="gap-8 radial-background relative h-full flex flex-col items-center justify-center text-stone-100">
      <HeaderEnterAnimate
        menu={props.menu}
        noTranslation={true}
        transitionDelay={800}
      >
        {props.menu ? (
          <div className="stars-custom absolute left-0 top-0 overflow-hidden"></div>
        ) : (
          <></>
        )}
      </HeaderEnterAnimate>
      <div className="mb-16 text-2xl sm:text-4xl flex flex-col gap-10">
        <HeaderEnterAnimate menu={props.menu} transitionDelay={700}>
          <div className="font-extrabold flex items-end">
            <p className="text-base sm:text-lg mr-4 font-normal"> 1 </p>
            <HeaderLink
              title="Inicio"
              to={ROUTE_HOME}
              onClick={props.closeMenu}
            />
          </div>
        </HeaderEnterAnimate>
        <HeaderEnterAnimate menu={props.menu} transitionDelay={815}>
          <div className="font-extrabold flex items-end">
            <p className="text-base sm:text-lg mr-4 font-normal"> 2 </p>

            <HeaderLink
              title="Proyectos"
              to={ROUTE_HOME}
              onClick={props.closeMenu}
            />
          </div>
        </HeaderEnterAnimate>

        <HeaderEnterAnimate menu={props.menu} transitionDelay={930}>
          <div className="font-extrabold flex items-end">
            <p className="text-base sm:text-lg mr-4 font-normal"> 3 </p>
            <HeaderLink
              title="Acerca de mí"
              to={ROUTE_HOME}
              onClick={props.closeMenu}
            />
          </div>
        </HeaderEnterAnimate>
      </div>

      <HeaderEnterAnimate menu={props.menu} transitionDelay={1100}>
        <div className="text-stone-100 text-xs sm:text-base">
          Por Sergio Loza
        </div>
      </HeaderEnterAnimate>
    </div>
  );
}
