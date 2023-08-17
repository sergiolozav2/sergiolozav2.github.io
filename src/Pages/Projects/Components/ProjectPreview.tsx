import { CSSProperties } from "react";
import { ProjectTag, ProjectTagProps } from "./ProjectTag";

export interface ProjectPreviewProps {
  image: string;
  title: string;
  tags: ProjectTagProps[];
  className?: string;
  style?: CSSProperties;
}

export function ProjectPreview(props: ProjectPreviewProps) {
  return (
    <div
      className={`${props.className} z-[1] mt-4 max-w-[18rem] relative text-stone-100`}
      style={props.style}
    >
      <div className="group relative overflow-hidden">
        <img
          className="w-72 aspect-[13/8] duration-500 object-cover transition-all group-hover:scale-110 bg-stone-950"
          src={props.image}
          alt={props.title}
        />
        <div className="absolute pointer-events-none inset-0 transition-colors duration-500 group-hover:bg-black/40"></div>
      </div>
      <p className="mt-2 font-semibold"> {props.title} </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {props.tags.map((tag, index) => (
          <ProjectTag key={index} text={tag.text} color={tag.color} />
        ))}
      </div>
    </div>
  );
}
