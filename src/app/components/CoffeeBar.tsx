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
                    <span>Coffee Level:</span>
                    <span>{coffeeValue}/100</span>
                </p>
                <progress value={coffeeValue} max="100"></progress>
            </div>
        </>
    )
}

function randomInt(): number {
    return Math.floor(Math.random() * 101);
}