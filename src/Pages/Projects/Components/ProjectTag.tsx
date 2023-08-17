
export interface ProjectTagProps {
    text: string,
    color: string,
}

export function ProjectTag(props: ProjectTagProps) {

    return <div className={`${props.color} px-1 py-0.5 font-medium rounded-md text-sm sm:text-base`}>
        {props.text}
    </div>
}