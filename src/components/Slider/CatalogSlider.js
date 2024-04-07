'use client'
import React, { useEffect, useState } from 'react'

import styles from './slider.module.css'
import LeftButton from '../UI/Buttons/LeftButton'
import RightButton from '../UI/Buttons/RightButton'

const CatalogSlider = () => {
    const [catalogIndex, setCatalogIndex] = useState(0)

    let width = null; 

    useEffect(() => {
        width = document.documentElement.clientWidth
    }, [])
    const slidesCount = width <= 768 ? 1 : width <= 992 ? 2 : 3

    const handleSlideSwitch = (e) => {
        if (e.currentTarget.dataset?.type == 'dot') {
            setCatalogIndex(Number(e.currentTarget.dataset?.index))
        } else if (e.currentTarget.dataset?.type == 'left-button') {
            setCatalogIndex(curIndex => {
                if(curIndex <= 0) {
                    return 0
                }
                return curIndex - 1
            })
        } else if (e.currentTarget.dataset?.type == 'right-button') {
            setCatalogIndex(curIndex => {
                if(curIndex >= catalog.length - 1 - (slidesCount - 1)) {
                    return catalog.length - 1
                }
                return curIndex + 1
            })
        }
    }

    return (
        <div className={styles['caltalog-slider']}>
            <div className={styles['catalog-slider__window']}>
                {catalog.map(item => (
                    <div key={item.id} className={styles['catalog-slider__slide']}
                         style={{translate: `-${106 * catalogIndex}%`}}
                    >
                        <div className={styles['slide__text']}>
                            <div>
                                <h4>{item.title}</h4>
                                <ul>
                                    {item.categories.map(cat => (
                                        <li key={cat}><a href='#'>{cat}</a></li>
                                    ))}
                                </ul>
                            </div>
                            <a className={styles['catalog-slider__link']} href='#'>
                                Подробнее
                                <span className={styles['catalog-slider__link-arrow']}></span>
                            </a>
                        </div>
                        <div className={styles['catalog-slider__pic']}>
                            <img src={item.img} />
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles['catalog-slider__buttons']}>
                <LeftButton action={handleSlideSwitch} disabled={catalogIndex <= 0}/>
                <RightButton action={handleSlideSwitch} disabled={catalogIndex >= catalog.length-1-(slidesCount - 1)}/>
            </div>
            {/* <div className={styles['catalog-slider__dots-controll']}>
                {catalog.slice(0, Math.ceil(catalog.length/3)).map((_, index) => (
                    <button key={index} className={`${styles['catalog-slider__dot']} ${index == catalogIndex && styles['current']}`}
                            data-type='dot' 
                            data-index={index}
                            onClick={handleSlideSwitch}><span></span></button>
                ))}
            </div> */}
        </div>
    )
}

const catalog = [
    {
        id: 1,
        title: 'Комплектующие для строительных лесов',
        img: '/images/catalog/slider-equip-construct-slider.png',
        categories: ['Чашечные леса', 'Клиновые леса', 'Рамные леса', 'Винтовые домкраты', 'Фермы', 'Комплектующие к хомутовым лесам']
    },
    {
        id: 2,
        title: 'Хомуты для строительных лесов',
        img: '/images/catalog/slider-chomut-equip-construct.png',
        categories: ['Хомуты и детали для крепежа лесов']
    },
    {
        id: 3,
        title: 'Комплектующие для оплубки',
        img: '/images/catalog/slider-complect-opalubka.png',
        categories: ['Опалубка', 'Комплектующие к опалубке', 'Фиксаторы арматуры', 'Вингтовые опоры']
    },
    {
        id: 4,
        title: 'Комплектующие длястроительных лесов',
        img: '/images/catalog/slider-equip-construct-slider.png',
        categories: ['Чашечные леса', 'Клиновые леса', 'Рамные леса', 'Винтовые домкраты', 'Фермы', 'Комплектующие к хомутовым лесам']
    },
]

export default CatalogSlider