import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

interface HeaderLinkProps {
    to: string
    title: string
    onClick?:MouseEventHandler
}
export function HeaderLink(props: HeaderLinkProps) {
    return <Link 
    className="text-4xl"
    to={props.to} onClick={props.onClick}>
        {props.title}
    </Link>
}