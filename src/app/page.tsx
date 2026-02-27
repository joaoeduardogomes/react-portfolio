import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <aside className={`${styles.sidebar} ${styles.box}`}>
        <nav>
          <ul>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/education">Education</Link>
            </li>
            <li>
              <Link href="/stack">Stack</Link>
            </li>
            <li>
              <Link href="/skills">Skills</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
              </li>
            <li>
              <Link href="/hobbies">Hobbies</Link>
              </li>
            <li>
              <Link href="/contact">Contact</Link>
              </li>
            <li>
              <Link href="/faq">FAQ</Link>
              </li>
          </ul>
        </nav>
      </aside>

      <main className={`${styles.main} ${styles.box}`}>
      </main>

      <aside className={`${styles.social} ${styles.box}`}></aside>
    </div>
  );
}
