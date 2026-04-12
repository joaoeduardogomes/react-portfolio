"use client";

import { useEffect, useState } from "react";
import styles from "./CoffeeBar.module.scss";

export default function CoffeeBar() {
    const [coffeeValue, setCoffeeValue] = useState(0);

    useEffect(() => {
        setCoffeeValue(randomInt());
        
        const interval = setInterval(() => {
            setCoffeeValue(randomInt())
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className={styles['coffee-bar']}>
                <p>
                    <span>Coffee Meter:</span>
                    <span>{coffeeValue}/100</span>
                </p>
                <div
                    className={styles.track}
                    role="progressbar"
                    aria-valuenow={coffeeValue}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="Coffee meter"
                >
                    <div
                        className={styles.fill}
                        style={{ width: `${coffeeValue}%` }}
                    />
                </div>
            </div>
        </>
    )
}

function randomInt(): number {
    return Math.floor(Math.random() * 101);
}
