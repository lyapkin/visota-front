'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useContext } from 'react'

import styles from './Header.module.css'
import { usePathname } from 'next/navigation'
import { LocationNameContext } from '@/providers/LocationNameProvider'

const Location = () => {
    const pathname = usePathname()
    const sections = pathname.split('/').filter(p => p != '')
    const [name] = useContext(LocationNameContext)
    
    return (
        <div className={styles['header-mode__location']}>
            <Link href='/'><Image src='/svgs/home-icon1.svg' width={32} height={32} /></Link>
            <span>/</span>
            <Link href='/'>Главная</Link>
            {sections.map((s, i) => {
                const value = (i !== 0 && sections[i-1] === 'catalog') ? (name.product || 'Товар') :
                              (i !== 0 && sections[i-1] === 'blog') ? (name.post || 'Статья') : paths[s]
                if (i === sections.length-1) {
                    return (
                        <div key={s}>
                            <span>/</span>
                            <span className={styles['breadcrumbs-end']}>{value}</span>
                        </div>
                    )
                }
                return(
                    <div key={s}>
                        <span>/</span>
                        <Link href={`/${s}`}>{value}</Link>
                    </div>
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
    about: "О компании",
    contacts: "Контакты",
}

export default Location