import { Metadata } from "next"
import { stackData } from "@/data/stack"
import Image from "next/image"
import styles from "./page.module.scss";

export const metadata: Metadata = {
    title: "Stack",
    description: "Technologies and tools used by João Eduardo for modern web development."
}

export default function Stack() {
    const imgSize = 40;
    return (
        <>
            <h1 className="visually-hidden">Stack</h1>
            {stackData.sections.map(section => (
                <section key={section.title.toLocaleLowerCase()} className={styles.section}>
                    <h2 className={styles.title}>{section.title}</h2>
                    <ul>
                        {section.items.map(item => (
                            <li key={item}>
                                <Image
                                    src={`/images/devicons/${item}.svg`} width={imgSize} height={imgSize}
                                    alt={`${item} image`}
                                />
                                <span className={styles['technology-name']}>{formatTechnologyName(item)}</span>
                            </li>
                        ))}
                    </ul>

                </section>
            ))}
        </>
    )
}

function formatTechnologyName(name: string): string {
    if (name === "html" || name === "css")
        return name.toLocaleUpperCase();
    if (name === "javascript")
        return "JavaScript";
    if (name === "typescript")
        return "TypeScript";

    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}