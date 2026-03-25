
import type { Metadata } from "next";
import { Quantico } from "next/font/google";
import "./globals.scss";
import styles from "./layout.module.scss";
import Navigation from "./components/Navigation";
import Social from "./components/Social";


const quantico = Quantico({
  subsets: ["latin"],
  weight: ["400", "700"], // importante
  variable: "--font-quantico",
});

export const metadata: Metadata = {
  title: {
    default: "João Eduardo",
    template: "%s | João Eduardo",
  },
  description: "Web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quantico.variable}`}>
        <div className={styles.container}>
          <aside className={`${styles.sidebar} ${styles.box}`}>
            <Navigation />
          </aside>

          <main className={`${styles.main} ${styles.box}`}>
            {children}
          </main>

          <aside className={`${styles.social} ${styles.box}`}>
            <Social />
          </aside>
        </div>
      </body>
    </html>
  );
}
