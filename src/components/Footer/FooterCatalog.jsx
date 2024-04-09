"use client";
import React, { useEffect, useState } from "react";

import styles from "./footer.module.css";
import Link from "next/link";

const FooterCatalog = () => {
    let activateToggle = null;

    useEffect(() => {
        activateToggle = document.documentElement.clientWidth <= 576;
    }, []);

    const [isOpen, setIsOpen] = useState(activateToggle ? false : true);
    const handleClick = activateToggle
        ? () => setIsOpen((prev) => !prev)
        : () => {};

    return (
        <div
            className={`${styles["footer__catalog"]} ${
                isOpen && styles["open"]
            }`}
        >
            <h6 onClick={handleClick}>
                Каталог товаров{" "}
                {activateToggle && (
                    <img src="/svgs/arrow-footer-icon.svg" alt="стрелка" />
                )}
            </h6>
            <ul>
                <li>
                    <Link href={"#"}>Комплектующие для строительных лесов</Link>
                </li>
                <li>
                    <Link href={"#"}>Хомуты для строительных лесов</Link>
                </li>
                <li>
                    <Link href={"#"}>Комплектующие для опалубки</Link>
                </li>
                <li>
                    <Link href={"#"}>Алюминиевые лестницы</Link>
                </li>
                <li>
                    <Link href={"#"}>Алюминиевые вышки-туры</Link>
                </li>
                <li>
                    <Link href={"#"}>Гайки для опалубки</Link>
                </li>
            </ul>
        </div>
    );
};

export default FooterCatalog;
