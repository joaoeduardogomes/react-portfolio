import { educationData}  from '@/data/education'
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Education",
    description: "Formal education and selected programming courses."
}

export default function Education() {
    return (
        <>
            <h1 className="visually-hidden">Education</h1>

            {educationData.sections.map(section => (
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