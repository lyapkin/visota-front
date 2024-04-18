import React from 'react'

import styles from './Header.module.css'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const NavLinks = () => {
    const {t} = useTranslation()
    return (
        <ul className={styles["header-main__nav-list"]}>
            <li className={styles["header-main__about"]}>
                <Link href="/about">{t('common:about')}</Link>
            </li>
            <li className={styles["header-main__partners"]}>
                <Link href="/partners">{t('common:partners')}</Link>
            </li>
            <li className={styles["header-main__delivery"]}>
                <Link href="/delivery">
                    {t('common:delivery_payment')}
                </Link>
            </li>
            <li className={styles["header-main__faq"]}>
                <Link href="/faq">{t('common:faq')}</Link>
            </li>
            <li
                className={styles["header-main__vacancies"]}
            >
                <Link href="/vacancies">{t('common:vacancies')}</Link>
            </li>
            <li
                className={
                    styles["header-main__blog"]
                }
            >
                <Link href="/blog">{t('common:blog')}</Link>
            </li>
            <li className={styles["header-main__contacts"]}>
                <Link href="/contacts">{t('common:contacts')}</Link>
            </li>
        </ul>
    )
}

export default NavLinks