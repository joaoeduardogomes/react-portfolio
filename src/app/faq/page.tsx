import { Metadata } from "next";
import { faqData } from "@/data/faq";
import styles from "./page.module.scss";

export const metadata: Metadata = {
    title: "FAQ",
    description: "Frequently asked questions about my background, goals, and work."
}

export default function FAQ() {
    return (
        <>
            <h1 className="visually-hidden">FAQ</h1>
            
            <dl className={styles['question-block']}>
                {faqData.map((item) => (
                    <div key={item.id}>
                        <dt className={styles.question}>{item.question}</dt>
                        <dd className={styles.answer}>{item.answer}</dd>
                    </div>
                ))}
            </dl>
        </>
    )
}