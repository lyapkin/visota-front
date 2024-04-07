'use client'
import React, { useState } from 'react'
import Button from '../UI/Buttons/Button'

import styles from './slider.module.css'
import LeftButton from '../UI/Buttons/LeftButton'
import RightButton from '../UI/Buttons/RightButton'

const ProjectsSlider = () => {
    const [picIndex, setPicIndex] = useState(0)

    const handleSlideSwitch = (e) => {
        const target = e.currentTarget

        if (target.dataset?.type == 'left-button') {
            setPicIndex(curIndex => {
                if(curIndex <= 0) {
                    return 0
                }
                return curIndex - 1
            })
        } else if (target.dataset?.type == 'right-button') {
            setPicIndex(curIndex => {
                if(curIndex >= projects.length - 1) {
                    return projects.length - 1
                }
                return curIndex + 1
            })
        }
    }

    return (
        <div className={styles['projects-slider']}>
            <div className={styles['projects-slider-window']}>
                <div className={styles['projects-slider-block']}>
                    {projects.map((item, index) => (
                        <div key={item.id} className={styles['project-slide']} style={{translate: `${-100 * picIndex}%`}} >
                            <div className={styles['project-slide__img']}>
                                <img src={item.img} />
                            </div>
                            <div className={styles['project-slide__info']}>
                                <h3 className={styles['project-slide__title']}>{item.title}</h3>
                                <p className={styles['project-slide__location']}>{item.location}</p>
                                <p className={styles['project-slide__description']}>{item.description}</p>
                                {/* <span className={styles['project-slide__date']}>{item.date}</span> */}
                                <img className={styles['project-slide__logo']} src={item.logo} />
                                <div className={styles['project-slide__button']}>
                                    <Button text='Подробнее об объекте' smallFont={true} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles['project-slider__buttons']}>
                    <LeftButton action={handleSlideSwitch} disabled={picIndex <= 0}/>
                    <RightButton action={handleSlideSwitch} disabled={picIndex >= projects.length-1}/>
                </div>
            </div>
            <div className={styles['projects-slider__progress-bar']}>
                <div className={styles['projects-slider__progress-filled']} style={{width: `${((picIndex+1) / projects.length) * 100}%`}}></div>
            </div>
        </div>
    )
}

const projects = [
    {
        id: 1,
        img: '/images/projects-gazprom.jpg',
        title: 'Строительство Амурского Газоперерабатывающий завода',
        location: 'г. Свободный',
        description: 'Поставка строительных лесов, опалубки и комплектующих, 2021-2027г. Поставка строительных лесов, опалубки',
        date: '15.08.2023',
        logo: '/images/gazprom-logo.png',
        link: '#'
    },
    {
        id: 2,
        img: '/images/projects-gazprom.jpg',
        title: 'Строительство Амурского Газоперерабатывающий завода',
        location: 'г. Градный',
        description: 'Поставка строительных лесов, опалубки и комплектующих, 2021-2027г. Поставка строительных лесов, опалубки',
        date: '15.08.2023',
        logo: '/images/gazprom-logo.png',
        link: '#'
    },
    {
        id: 3,
        img: '/images/projects-gazprom.jpg',
        title: 'Строительство Амурского Газоперерабатывающий завода',
        location: 'г. Порный',
        description: 'Поставка строительных лесов, опалубки и комплектующих, 2021-2027г. Поставка строительных лесов, опалубки',
        date: '15.08.2023',
        logo: '/images/gazprom-logo.png',
        link: '#'
    },
    {
        id: 4,
        img: '/images/projects-gazprom.jpg',
        title: 'Строительство Амурского Газоперерабатывающий завода',
        location: 'г. Кислый',
        description: 'Поставка строительных лесов, опалубки и комплектующих, 2021-2027г. Поставка строительных лесов, опалубки',
        date: '15.08.2023',
        logo: '/images/gazprom-logo.png',
        link: '#'
    },
    {
        id: 5,
        img: '/images/projects-gazprom.jpg',
        title: 'Строительство Амурского Газоперерабатывающий завода',
        location: 'г. Свободный',
        description: 'Поставка строительных лесов, опалубки и комплектующих, 2021-2027г. Поставка строительных лесов, опалубки',
        date: '15.08.2023',
        logo: '/images/gazprom-logo.png',
        link: '#'
    },
    {
        id: 6,
        img: '/images/projects-gazprom.jpg',
        title: 'Строительство Амурского Газоперерабатывающий завода',
        location: 'г. Свободный',
        description: 'Поставка строительных лесов, опалубки и комплектующих, 2021-2027г. Поставка строительных лесов, опалубки',
        date: '15.08.2023',
        logo: '/images/gazprom-logo.png',
        link: '#'
    },
    {
        id: 7,
        img: '/images/projects-gazprom.jpg',
        title: 'Строительство Амурского Газоперерабатывающий завода',
        location: 'г. Свободный',
        description: 'Поставка строительных лесов, опалубки и комплектующих, 2021-2027г. Поставка строительных лесов, опалубки',
        date: '15.08.2023',
        logo: '/images/gazprom-logo.png',
        link: '#'
    },
    {
        id: 8,
        img: '/images/projects-gazprom.jpg',
        title: 'Строительство Амурского Газоперерабатывающий завода',
        location: 'г. Свободный',
        description: 'Поставка строительных лесов, опалубки и комплектующих, 2021-2027г. Поставка строительных лесов, опалубки',
        date: '15.08.2023',
        logo: '/images/gazprom-logo.png',
        link: '#'
    }
]

export default ProjectsSlider