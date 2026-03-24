import { Metadata } from "next";
import { faqData } from "@/data/faq";

export const metadata: Metadata = {
    title: "FAQ",
    description: "Frequently asked questions about my background, goals, and work."
}

export default function FAQ() {
    return (
        <>
            <h1 className="visually-hidden">FAQ</h1>
            
            <dl>
                {faqData.map((item) => (
                    <div key={item.id}>
                        <dt>{item.question}</dt>
                        <dd>{item.answer}</dd>
                    </div>
                ))}
            </dl>
        </>
    )
}