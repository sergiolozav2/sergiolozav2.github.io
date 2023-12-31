import { MouseEventHandler, ReactHTMLElement, ReactNode } from "react";
import { Link } from "react-router-dom";



interface HeaderLinkProps {
  to: string;
  title: string;
  onClick?: MouseEventHandler;
  className?: string;
}
export function HeaderLink(props: HeaderLinkProps) {
  return (
    <Link
      className={`${props.className}`}
      to={props.to}
      onClick={props.onClick}
    >
      {props.title}
    </Link>
  );
}

interface HeaderEnterAnimateProps {
  menu: boolean;
  children: ReactNode
  transitionDelay: number
  noTranslation?: boolean;
  className?:string
}
export function HeaderEnterAnimate(props: HeaderEnterAnimateProps) {

  const translate = (props.noTranslation?"":"-translate-y-5")
  return (
    <div
      className={`${props.className} transition-[opacity,transform] ${
        props.menu ? "opacity-100 duration-700" : `${translate} opacity-0 duration-0`
      }`}

      style={{
        transitionDelay: `${props.transitionDelay}ms`
      }}
    >
        {props.children}
    </div>
  );
}
