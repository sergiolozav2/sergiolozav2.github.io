import "../../Components/Styles/LoadTransitions.css";
import { NavigateFloatingButton } from "../../Components/NavigateFloatingButton";
import { defaultProjects } from "./Components/DefaultProjects";

import { ProjectPreview } from "./Components/ProjectPreview";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "../../Components/Styles/LoadTransitions.css";
import { ROUTE_HOME } from "../../Routes/ConstantRoutes";

export function Projects() {
  const [animation, setAnimation] = useState("on-load-transition");
  const [reverse, setReverseDelay] = useState(false);

  const navigate = useNavigate();
  async function goToHome() {
    setAnimation("fade-out-down-transition");
    setReverseDelay(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1300));
    navigate(ROUTE_HOME);
  }
  return (
    <div className="max-h-screen relative w-full overflow-y-auto items-center flex flex-col">
      <NavigateFloatingButton className={`${animation}`} onClick={goToHome} />
      <div className="mt-28 max-w-2xl text-stone-100">
        <h1
          className={`${animation} px-8 animation-delay-1000 text-xl sm:text-3xl font-semibold`}
          style={{ animationDelay: reverse ? `${defaultProjects.length + 2}00ms` : "0ms" }}
        >
          Experiencia profesional
        </h1>
        <p
          className={`${animation} px-8 mt-2 text-base sm:text-lg`}
          style={{ animationDelay: reverse ? `${defaultProjects.length + 1}00ms` : "200ms" }}
        >
          He desarrollado aplicaciones móviles con Flutter y sitios web con React, Angular y vanilla HTML. <br/> Algunos de mis proyectos:
        </p>
      </div>
      <div
        className={`mt-4 px-6 sm:grid grid-cols-1 sm:grid-cols-2 gap-14 gap-y-8`}
      >
        {defaultProjects.map((project, index) => (
          <ProjectPreview
            key={index}
            className={animation}
            style={{
              animationDelay: `${
                (reverse ? defaultProjects.length - index : 2*(index + 1)) 
              }00ms`,
            }}
            {...project}
          />
        ))}
      </div>
      <div className="min-h-[8rem] w-1"></div>
    </div>
  );
}
