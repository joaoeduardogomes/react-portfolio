"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.scss";

export default function Navigation() {
    const pathname = usePathname();
    const links = [
        { href: "/", label: "About" },
        { href: "/education", label: "Education" },
        { href: "/stack", label: "Stack" },
        { href: "/skills", label: "Skills" },
        { href: "/projects", label: "Projects" },
        { href: "/hobbies", label: "Hobbies" },
        { href: "/contact", label: "Contact" },
        { href: "/experience", label: "Experience" },
        { href: "/faq", label: "FAQ" }
    ];

    return (
        <nav className={styles.navbar}>
            <ul>
                {links.map(link => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={pathname === link.href ? styles.active : ""}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}