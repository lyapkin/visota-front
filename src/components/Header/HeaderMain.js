import Link from "next/link";
import React from "react";
import CartTab from "./CartTab";

import styles from "./Header.module.css";

const HeaderMain = () => {
    return (
        <div className={styles["header-main-wrapper"]}>
            <div className="container">
                <div className={styles["header-main"]}>
                    <div className={styles["header-main__logo"]}>
                        <a href="/">
                            <img src="/svgs/logo.svg" alt="логотип" />
                        </a>
                    </div>
                    <nav className={styles["header-main__nav"]}>
                        <div className={styles["header-nav-container"]}>
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
                                <li className={styles["header-main__catalog"]}>
                                    <Link href="/catalog">Каталог товаров</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className={styles["header-main__tel"]}>
                        <a href="tel:+78007005413">
                            <img src="/svgs/phone-pic.svg" alt="иконка" />
                            8(800)700-54-13
                        </a>
                        <div className={styles["header-main__cart"]}>
                            <CartTab />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;
