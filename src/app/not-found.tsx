import Link from "next/link";
import styles from "./not-found.module.scss";

export default function NotFound() {
    return (
        <div className={styles.error}>
            <h1>404</h1>
            <p>This page does not exist.</p>

            <Link href="/" className={styles['return-btn']}>Return home</Link>
        </div>
    );
}