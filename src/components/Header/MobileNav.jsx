'use client'
import React from 'react'

import styles from './Header.module.css'
import NavLinks from './NavLinks'

const MobileNav = ({mobileOpen}) => {
    return (
        <div className={`${styles['header__mobile-nav']} ${mobileOpen && styles['open']}`}>
            <div className={`${styles['mobile-nav__layout']} ${mobileOpen && styles['open']}`}>
                <NavLinks />
            </div>
            <div className={styles['header__social-list']}>
                <a href="#" className={styles['header__social-icon']}>
                    <img src="/svgs/map-social-inst-icon.svg" />
                </a>
                <a href="#" className={styles['header__social-icon']}>
                    <img src="/svgs/map-social-vk-icon.svg" />
                </a>
                <a href="#" className={styles['header__social-icon']}>
                    <img src="/svgs/map-social-yt-icon.svg" />
                </a>
                <a href="#" className={styles['header__social-icon']}>
                    <img src="/svgs/map-social-fb-icon.svg" />
                </a>
            </div>
        </div>
    )
}

export default MobileNav