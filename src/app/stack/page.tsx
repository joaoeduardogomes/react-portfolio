import { Metadata } from "next"
import data from "@/data/stack.json"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Stack",
    description: "Technologies and tools used by João Eduardo for modern web development."
}

export default function Stack() {
    const imgSize = 40;
    return (
        <>
            {data.sections.map(section => (
                <section key={section.title.toLocaleLowerCase()}>
                    <h1 className="visually-hidden">Stack</h1>
                    <h2>{section.title}</h2>
                    <ul>
                        {section.items.map(item => (
                            <li key={item}>
                                {/* <img src={`/images/devicons/${item}.svg`} alt="" /> */}
                                <Image
                                    src={`/images/devicons/${item}.svg`} width={imgSize} height={imgSize}
                                    alt={`${item} image`}
                                />
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>

                </section>
            ))}
        </>
    )
}