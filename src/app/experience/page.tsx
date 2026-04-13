import { Metadata } from "next";
import { experienceData } from "@/data/experience";
import styles from "./page.module.scss";

export const metadata: Metadata = {
    title: "Experience",
    description: "Professional and volunteer experience, including roles, responsibilities, and contributions."
};

export default function Experience() {
    return(
        <>
        <h1 className="visually-hidden">Experience</h1>
        <ul>
            {experienceData.map(item => (
                <li key={item.id}>
                    <article>
                        <header>
                            <h2 className={styles.title}>{item.role}</h2>
                            <p className={styles['organization-name']}>{item.organization}</p>
                            <p className={styles.period}>
                                <time>{item.startDate}</time> — <time>{item.endDate ?? "Present"}</time>
                            </p>
                        </header>
                        <p className={styles.summary}>{item.summary}</p>
                    </article>
                </li>
            ))}
        </ul>
        </>
    )
}
