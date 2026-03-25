import { Metadata } from "next";
import { projectsData } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Projects",
    description: "Selected projects built with technologies such as React, Next.js and Python."
}

export default function Projects() {
    const imgWidth = 220;
    const imgHeight = 130;
    const devImg = 30;
    return (
        <>
        <h1 className="visually-hidden">Ptojects</h1>
        {projectsData.map(project => (
            <div className="projectCard" key={project.id}>

                <p>{project.name}</p>

                <Image 
                    src={project.imageUrl}
                    width={imgWidth} height={imgHeight}
                    alt={`${project.name} image`}
                />

                <Link href={project.codeLink} target="_blank">Code</Link>
                <Link href={project.demoLink} target="_blank">Live Demo</Link>

                <ul>
                    {project.technologies.map(technology => (
                        <li key={technology}>
                            <abbr title={technology}>
                                <Image
                                    src={`/images/devicons/${technology}.svg`}
                                    width={devImg}
                                    height={devImg}
                                    alt={`${technology} image`}
                                />
                            </abbr>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
        </>
    )
}