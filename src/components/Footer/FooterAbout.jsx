"use client";
import React, { useEffect, useState } from "react";

import styles from "./footer.module.css";
import Link from "next/link";

const FooterAbout = () => {
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
            className={`${styles["footer__about"]} ${isOpen && styles["open"]}`}
        >
            <h6 onClick={handleClick}>
                о компании{" "}
                {activateToggle && (
                    <img src="/svgs/arrow-footer-icon.svg" alt="стрелка" />
                )}
            </h6>
            <ul>
                <li>
                    <Link href={"#"}>Наши проекты</Link>
                </li>
                <li>
                    <Link href={"#"}>Вопрос-ответ</Link>
                </li>
                <li>
                    <Link href={"#"}>О нас</Link>
                </li>
                <li>
                    <Link href={"#"}>Блог</Link>
                </li>
                <li>
                    <Link href={"#"}>Контакты</Link>
                </li>
                <li>
                    <Link href={"#"}>Партнёрам</Link>
                </li>
                <li>
                    <Link href={"#"}>Вакансии</Link>
                </li>
            </ul>
        </div>
    );
};

export default FooterAbout;