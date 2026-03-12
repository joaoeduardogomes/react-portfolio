import rawData from '@/data/education.json'
import type { Metadata } from 'next';
import type { EducationData } from "@/types/education"

export const metadata: Metadata = {
    title: "Education",
    description: "Formal education and selected programming courses."
}

const data = rawData as EducationData;

export default function Education() {
    return (
        <>
            <h1 className="visually-hidden">Education</h1>

            {data.sections.map(section => (
                <section key={section.title}>
                    <h2>{section.title}</h2>

                    <ul>
                        {section.items.map(item => (
                            <li key={item.id}>
                                <p>{item.name}</p>
                                <span>{item.institution}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </>
    );
}