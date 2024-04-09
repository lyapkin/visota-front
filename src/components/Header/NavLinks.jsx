import React from 'react'

import styles from './Header.module.css'
import Link from 'next/link'

const NavLinks = () => {
    return (
        <ul className={styles["header-main__nav-list"]}>
            <li
                className={
                    styles["header-main__out-projects"]
                }
            >
                <Link href="/blog">Блог</Link>
            </li>
            <li className={styles["header-main__about"]}>
                <Link href="/about">О компании</Link>
            </li>
            <li className={styles["header-main__faq"]}>
                <Link href="/faq">FAQ</Link>
            </li>
            <li className={styles["header-main__partners"]}>
                <Link href="/partners">Партнерам</Link>
            </li>
            <li className={styles["header-main__delivery"]}>
                <Link href="/delivery">
                    Доставка и оплата
                </Link>
            </li>
            <li
                className={styles["header-main__vacancies"]}
            >
                <Link href="/vacancies">Вакансии</Link>
            </li>
            <li className={styles["header-main__contacts"]}>
                <Link href="/contacts">Контакты</Link>
            </li>
        </ul>
    )
}

export default NavLinks