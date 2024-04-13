import Link from "next/link";
import React from "react";
import CartTab from "./CartTab";

import styles from "./Header.module.css";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

const HeaderMain = ({mobileOpen, setMobileOpen}) => {
    return (
        <div className={styles["header-main-wrapper"]}>
            <div className="container">
                <div className={styles["header-main"]}>
                    <div className={styles['header-main__left']}>
                    <button onClick={() => setMobileOpen(prev => !prev)} className={styles['mobile-nav__burger']}>
                        {!mobileOpen ? <img src='/svgs/burger-icon.svg' alt='иконка меню' /> :
                                    <img className={styles['mobile-nav__close']} src='/svgs/close-icon.svg' alt='иконка меню' />}

                    </button>
                        <div className={styles["header-main__logo"]}>
                            <Link href="/">
                                <img src="/svgs/logo.svg" alt="логотип" />
                            </Link>
                        </div>
                    </div>
                    <nav className={styles["header-main__nav"]}>
                        <div className={styles["header-nav-container"]}>
                            <NavLinks />
                            <div className={styles["header-main__catalog"]}>
                                <Link href="/catalog">Каталог товаров</Link>
                            </div>
                            <div className={styles["header-main__cart"]}>
                                <CartTab />
                            </div>
                        </div>
                    </nav>
                    
                    <div className={styles["header-main__tel"]}>
                        <a href='email:visota1300@mail.ru'>
                            <img src='/svgs/email-icon.svg' alt="иконка" />
                            visota1300@mail.ru
                        </a>
                        <a href="tel:+78007005413">
                            <img src="/svgs/phone-pic.svg" alt="иконка" />
                            8(800)700-54-13
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;
