"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.scss";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
    const pathname = usePathname();
    const links = [
        { href: "/", label: "About" },
        { href: "/education", label: "Education" },
        { href: "/stack", label: "Stack" },
        { href: "/skills", label: "Skills" },
        { href: "/projects", label: "Projects" },
        { href: "/hobbies", label: "Hobbies" },
        { href: "/experience", label: "Experience" },
        { href: "/faq", label: "FAQ" }
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className={styles.navbar}>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={styles["nav-btn"]}
                    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <ul className={isOpen ? styles.open : ""}>
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
        </>
    );
}