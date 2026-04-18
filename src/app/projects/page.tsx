import { Metadata } from "next";
import { projectsData } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export const metadata: Metadata = {
    title: "Projects",
    description: "Selected projects built with technologies such as React, Next.js and Python."
}

export default function Projects() {
    const imgWidth = 200;
    const imgHeight = 90;
    const devImg = 30;
    return (
        <>
        <h1 className="visually-hidden">Ptojects</h1>
        <section className={styles['flex-area']}>
            {projectsData.map(project => (
                <div className={styles['project-card']} key={project.id}>
                    <p className={styles['project-name']}>{project.name}</p>
                    <Image
                        src={project.imageUrl}
                        width={imgWidth} height={imgHeight}
                        alt={`${project.name} image`}
                        className={styles.thumbnail}
                    />
                    <span className={styles.links}>
                        <Link className={`${styles.btn} ${styles['code-btn']}`} href={project.codeLink} target="_blank">Code</Link>
                        <Link className={`${styles.btn} ${styles['demo-btn']}`} href={project.demoLink} target="_blank">Live Demo</Link>
                    </span>
                    <ul className={styles['tech-list']}>
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
        </section>
        </>
    )
}