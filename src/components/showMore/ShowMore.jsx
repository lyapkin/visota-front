'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './showmore.module.css'
import arrow from '@/../public/svgs/arrow-footer-icon.svg'

const ShowMore = ({children, height}) => {
    const [open, setIsOpen] = useState(false)
    return (
        <>
        <div className={`${styles['show-more']} ${open && styles['open']}`} style={{height: !open ? height: 'auto'}}>
            {children}
        </div>
        {open ?
            <button className={styles['show-more__button']}
                    onClick={() => setIsOpen(false)}
                    >
                <span>Скрыть</span> <Image src={arrow}/>
            </button> :
            <button className={styles['show-more__button']}
                    onClick={() => setIsOpen(true)}
                    >
                <span style={{minWidth: '120px'}}>Читать дальше</span> <Image src={arrow}/>
            </button>}
        </>
    )
}

export default ShowMore