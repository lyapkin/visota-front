'use client'
import Link from 'next/link'
import React from 'react'

import styles from './Header.module.css'
import { usePathname } from 'next/navigation'

const Location = () => {
    const pathname = usePathname()
    const sections = pathname.split('/').filter(p => p != '')
    
    return (
        <div className={styles['header-mode__location']}>
            <Link href='/'><img src='/svgs/home-icon.svg' /></Link>
            <span>/</span>
            <Link href='/'>Главная</Link>
            {sections.map((s, i) => {
                const value = (i !== 0 && sections[i-1] === 'catalog') ? 'Товар' :
                              (i !== 0 && sections[i-1] === 'blog') ? 'Статья' : paths[s]
                if (i === sections.length-1) {
                    return (
                        <>
                            <span>/</span>
                            <span className={styles['breadcrumbs-end']}>{value}</span>
                        </>
                    )
                }
                return(
                    <>
                        <span>/</span>
                        <Link href={`/${s}`}>{value}</Link>
                    </>
                )
            })}
        </div>
    )
}

const paths = {
    blog: 'Блог',
    cart: 'Корзина',
    catalog: 'Каталог',
    delivery: 'Доставка',
    pay: 'Оплата',
    faq: 'FAQ',
    partners: 'Партнерам',
    vacancies: 'Вакансии',
}

export default Location