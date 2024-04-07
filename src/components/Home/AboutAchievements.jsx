import React from 'react'

import styles from '@/styles/home.module.css'

const AboutAchievements = () => {
    return (
        <div className={styles['home-about__achivements']}>
            {data.map(item => (
                <div className={styles['home-achivement']} key={item.id}>
                    <span className={styles['home-achivement__count']}>{item.count}</span>
                    <span className={styles['home-achivement__type']}>{item.type}</span>
                    <span className={styles['home-achivement__text']}>{item.text}</span>
                </div>
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