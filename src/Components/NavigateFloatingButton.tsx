import { CSSProperties, MouseEventHandler } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

interface NavigateFloatingButtonProps {
    onClick?: MouseEventHandler
    className?: string;
    style?: CSSProperties;  
}

export function NavigateFloatingButton(props:NavigateFloatingButtonProps) {
  return (
    <div className={`${props.className} absolute left-8 top-8 group`}>
      <button className="flex items-center"
      onClick={ props.onClick }
      >
        <div className="p-1 sm:p-1.5 border rounded-full transition-colors border-stone-50 text-stone-200 group-hover:text-stone-900 group-hover:bg-stone-100">
          <AiOutlineArrowUp className="text-lg sm:text-3xl" />
        </div>
        <div className="ml-2.5 text-sm sm:text-lg text-stone-50"> Inicio </div>
      </button>
    </div>
  );
}
