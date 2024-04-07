import React from 'react'

import styles from './Header.module.css'
import Link from 'next/link'

const TabsContentBlock = () => {
    

    return (
        <div className={styles['header-tabs__tabs-content']}>
            <div className={`${styles['header-tabs__tabs-content-flex']} container`}>
                {data.map(item => (
                    <Link href='/catalog' key={item.id}>
                        <p>{item.name}</p>
                        <img src={item.img_url} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

const data = [
    {
        id: 1,
        name: 'Хомут неповоротный',
        img_url: '/images/chomut.png'
    },
    {
        id: 2,
        name: 'Хомут поворотный',
        img_url: '/images/chomut.png'
    },
    {
        id: 3,
        name: 'Хомут стыковочный',
        img_url: '/images/chomut.png'
    },
    {
        id: 4,
        name: 'Хомут фиксирующий',
        img_url: '/images/chomut.png'
    },
    {
        id: 5,
        name: 'Хомут балочный',
        img_url: '/images/chomut.png'
    },
    {
        id: 6,
        name: 'Хомут к доске',
        img_url: '/images/chomut.png'
    },
    {
        id: 7,
        name: 'Хомут к лестнице',
        img_url: '/images/chomut.png'
    },
    {
        id: 8,
        name: 'Болт т-образный',
        img_url: '/images/chomut.png'
    },
]

export default TabsContentBlock