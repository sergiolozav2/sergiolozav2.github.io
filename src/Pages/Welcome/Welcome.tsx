import { FaLocationArrow } from "react-icons/fa";
import { TypeAnimationText } from "./Components/TypeAnimationText";
import { useNavigate } from "react-router-dom";

import "../../Components/Styles/LoadTransitions.css";
import { ROUTE_PROJECTS } from "../../Routes/ConstantRoutes";

export function Welcome() {
  const navigate = useNavigate();

  async function goToProjects() {
    navigate(ROUTE_PROJECTS)
  }
  return (
    <div className="min-h-screen w-full justify-center items-center flex flex-col">
      <div className="px-4 max-w-2xl leading-tight text-center justify-center items-center flex-col flex  text-stone-100">
        <h1 className="on-load-transition text-3xl sm:text-4xl">
          Hola, soy&nbsp;
          <TypeAnimationText
            className="px-1 whitespace-nowrap w-fit font-bold text-stone-900 bg-stone-50"
            text="Sergio Loza"
            duration={2000}
          />
        </h1>
        <h2
          className="on-load-transition mt-3 text-base sm:text-xl leading-tight"
          style={{ animationDelay: "200ms" }}
        >
          Ingeniero de sistemas, con experiencia de desarrollo web y
          aplicaciones móviles.
        </h2>
      </div>
      <div
        className="on-load-transition mt-8 gap-8 text-base sm:text-lg flex text-stone-200"
        style={{ animationDelay: "400ms" }}
      >
        <button
          className="hover-underline flex items-center whitespace-nowrap"
          onClick={goToProjects}
        >
          <FaLocationArrow className="mr-2 text-sm" />
          Mi experiencia
        </button>
        <button className="hover-underline flex items-center whitespace-nowrap">
          <FaLocationArrow className="mr-2 text-sm" />
          Acerca de mí
        </button>
      </div>
    </div>
  );
}
