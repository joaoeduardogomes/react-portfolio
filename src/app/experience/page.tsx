import { Metadata } from "next";
import { experienceData } from "@/data/experience";

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
                            <h2>{item.role}</h2>
                            <p>{item.organization}</p>
                            <p>
                                <time>{item.startDate}</time> — <time>{item.endDate ?? "Present"}</time>
                            </p>
                        </header>
                        <p>{item.summary}</p>
                    </article>
                </li>
            ))}
        </ul>
        </>
    )
}
