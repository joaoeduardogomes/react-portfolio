import styles from "./Social.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Social() {
    const linkSize = 48;

    return (
        <>
            <ul className={styles['social-links']}>
                <li>
                    <Link
                        href="https://www.linkedin.com/in/joao-eduardo-gomes/?locale=pt"
                        target="_blank"
                        className={styles.link}
                    >
                        <Image
                            src="/images/devicons/linkedin-white.svg"
                            alt="linkedin icon"
                            width={linkSize} height={linkSize}
                        />
                        <span>/joao-eduardo-gomes</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="https://github.com/joaoeduardogomes"
                        target="_blank"
                        className={styles.link}
                    >
                        <Image
                            src="/images/devicons/github-white.svg"
                            alt="github icon"
                            width={linkSize} height={linkSize}
                        />
                        <span>/joaoeduardogomes</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="mailto:dev.joaogomes@gmail.com"
                        target="_blank"
                        className={styles.link}
                    >
                        <Image
                            src="/images/devicons/mail.svg"
                            alt="email icon"
                            width={linkSize} height={linkSize}
                        />
                        <span>dev.joaogomes@gmail.com</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="https://cv-joaogomes.vercel.app/"
                        target="_blank"
                        className={styles.link}
                    >
                        <span className={styles['cv-text']}>CV</span>
                        <span className={styles['cv-link']}>https://cv-joaogomes.vercel.app/</span>
                    </Link>
                </li>
            </ul>
            <small className={styles.version}>Version 1.0.0</small>
        </>
    );
}