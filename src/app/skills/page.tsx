import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Skills",
    description: "Technical and professional skills developed through study and hands-on programming practice."
}

export default function Skills() {
    return (
        <>
            <h1 className="visually-hidden">Skills</h1>
            <h2>Human Languages</h2>
            <ul>
                <li>Portuguese — Native</li>
                <li>English — Intermediate (ESET)</li>
                <li>Japanese — Intermediate (JLPT N3)</li>
            </ul>

            <h2>Soft Skills</h2>
            <ul>
                <li>Clear and objective communication</li>
                <li>Problem solving</li>
                <li>Adaptability</li>
                <li>Attention to detail</li>
                <li>Teamwork</li>
                <li>Self-directed learning</li>
                <li>Resilience</li>
            </ul>
        </>
    )
}