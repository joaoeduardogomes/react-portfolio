import { educationData}  from '@/data/education'
import type { Metadata } from 'next';
import styles from "./page.module.scss";

export const metadata: Metadata = {
    title: "Education",
    description: "Formal education and selected programming courses."
}

export default function Education() {
    return (
        <>
            <h1 className="visually-hidden">Education</h1>

            {educationData.sections.map(section => (
                <section key={section.title} className={styles.section}>
                    <h2 className={styles.title}>{section.title}</h2>

                    <ul className={styles.list}>
                        {section.items.map(item => (
                            <li key={item.id}>
                                <span className={styles['course-name']}>{item.name}</span>
                                <span className={styles['institution-name']}>{item.institution}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </>
    );
}