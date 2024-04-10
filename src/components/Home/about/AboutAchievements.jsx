'use client'
import React from 'react'

import styles from '@/styles/home.module.css'
import Achivement from './Achivement'

const AboutAchievements = () => {
    return (
        <div className={styles['home-about__achivements']}>
            {data.map(item => (
                <Achivement data={item} key={item.id} />
            ))}
        </div>
    )
}

const data = [
    {
        id: 1,
        count: '13 640',
        type: 'единиц товаров',
        text: 'Поставленно за 2023 год на строительные объекты'
    },
    {
        id: 2,
        count: '5 640',
        type: 'единиц товаров',
        text: 'Поставленно за 2023 год на строительные объекты'
    },
    {
        id: 3,
        count: '640',
        type: 'единиц товаров',
        text: 'Поставленно за 2023 год на строительные объекты'
    },
    {
        id: 4,
        count: '3 640',
        type: 'единиц товаров',
        text: 'Поставленно за 2023 год на строительные объекты'
    }
]

export default AboutAchievements