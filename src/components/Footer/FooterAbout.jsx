"use client";
import React, { useEffect, useState } from "react";

import styles from "./footer.module.css";
import Link from "next/link";

const FooterAbout = () => {
    const [activateToggle, setActivateToggle] = useState(null)

    useEffect(() => {
        const activateToggle = document.documentElement.clientWidth <= 576;
        setActivateToggle(activateToggle)
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
                    <Link href={"/faq"}>Вопрос-ответ</Link>
                </li>
                <li>
                    <Link href={"#"}>О нас</Link>
                </li>
                <li>
                    <Link href={"/blog"}>Блог</Link>
                </li>
                <li>
                    <Link href={"/contacts"}>Контакты</Link>
                </li>
                <li>
                    <Link href={"/partners"}>Партнёрам</Link>
                </li>
                <li>
                    <Link href={"/vacancies"}>Вакансии</Link>
                </li>
            </ul>
        </div>
    );
};

export default FooterAbout;
