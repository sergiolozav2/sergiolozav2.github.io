import { ProjectPreviewProps } from "./ProjectPreview";

import SoyYoProject from "../../../Assets/Projects/soyyo-project.png";
import MyTicketProject from "../../../Assets/Projects/myticket-project.png";
import TTSProject from "../../../Assets/Projects/tts-project.png";
import BoletasProject from "../../../Assets/Projects/boletas-project.png";
import BordersProject from "../../../Assets/Projects/borders-project.png";
export const defaultProjects: ProjectPreviewProps[] = [
  {
    title: "Tarjeta digital de presentación",
    image: SoyYoProject,
    tags: [
        {
          color: "bg-blue-700",
          text: "React",
        },
        {
          color: "bg-red-500",
          text: "Firebase",
        },
        {
          color: "bg-blue-500",
          text: "Tailwind",
        },

        {
            color: "bg-orange-500",
            text: "Pagos online",
          },
          {
            color: "bg-pink-600",
            text: "UI/UX",
          },
          ],
  },
  {
    title: "Aplicación de reservas",
    image: MyTicketProject,
    tags: [
      {
        color: "bg-sky-600",
        text: "Flutter",
      },
      {
        color: "bg-red-500",
        text: "Firebase",
      },
      {
        color: "bg-indigo-500",
        text: "Riverpod",
      },

      {
        color: "bg-pink-600",
        text: "UI/UX",
      },
    ],
  },
  {
    title: "Aplicación texto a sonido",
    image: TTSProject,
    tags: [
      {
        color: "bg-sky-600",
        text: "Flutter",
      },
      {
        color: "bg-green-600",
        text: "TTS",
      },
      {
        color: "bg-indigo-500",
        text: "Riverpod",
      },
      {
        color: "bg-yellow-600",
        text: "LocalStorage",
      },
      {
        color: "bg-pink-600",
        text: "UI/UX",
      },
      
    ],
  },
  {
    title: "Buscador de bordes geográficos",
    image: BordersProject,
    tags: [
      {
        color: "bg-amber-600",
        text: "Javascript",
      },
      {
        color: "bg-emerald-700",
        text: "Leaflet",
      },
      {
        color: "bg-violet-500",
        text: "HTML",
      },
      {
        color: "bg-purple-600",
        text: "CSS",
      },
      
    ],
  },
  {
    title: "Generador de boletas de pago",
    image: BoletasProject,
    tags: [
      {
        color: "bg-red-600",
        text: "Angular",
      },
      {
        color: "bg-green-600",
        text: "Excel",
      },
      {
        color: "bg-stone-700",
        text: "Generador PDF",
      },      
    ],
  },
];
