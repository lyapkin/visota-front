import Link from 'next/link'
import React from 'react'

import styles from './Header.module.css'

const Location = () => {
    return (
        <div className={styles['header-mode__location']}>
            <Link href='/'><img src='/svgs/home-icon.svg' /></Link>
            <span>/</span>
            <Link href='/'>Главная</Link>
        </div>
    )
}

export default Location