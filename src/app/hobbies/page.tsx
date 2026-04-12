import { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.scss";

export const metadata: Metadata = {
    title: "Hobbies",
    description: "Personal interests and activities that inspire creativity and continuous learning."
}

export default function Hobbies() {
    const width = 478;
    const height = 164;
    return (
        <>
            <h1 className="visually-hidden">Hobbies</h1>
            <Image
                src="/images/treasure.jpg"
                width={width}
                height={height}
                alt="treasure image"
                className={styles.image}
            />

            <ul className={styles.list}>
                <li>🎮 Videogames & RPGs</li>
                <li>📚 Reading (tech & fiction)</li>
                <li>🎴 Anime & manga</li>
                <li>🈶 Japanese language & culture</li>
                <li>✍️ Writing & translation</li>
            </ul>
        </>
    )
}