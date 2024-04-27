'use client'
import React, { useEffect, useRef, useState } from 'react'
import Button from '../UI/Buttons/Button'

import styles from './slider.module.css'
import RightButton from '../UI/Buttons/RightButton'
import LeftButton from '../UI/Buttons/LeftButton'
import Popup from '../popup/Popup'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ThanksSlider = () => {
    const [picIndex, setPicIndex] = useState(0)
    const [width, setWidth] = useState(null)
    const [showLetter, setShowLetter] = useState('')
    const ref = useRef(null)

    useEffect(() => {
        const width = document.documentElement.clientWidth;
        setWidth(width)
    }, []);
    const slidesCount = width <= 768 ? 1 : width <= 992 ? 2 : width <= 1450 ? 3 : 4
    const percent = width <= 768 ? 100 : width <= 992 ? 104.1 : width <= 1450 ? 106.3 : 108.5

    const handleSlideSwitch = (e) => {
        const target = e.currentTarget

        if (target.dataset?.type == 'left-button') {
            setPicIndex(curIndex => {
                if(curIndex <= 0) {
                    return 0
                }
                ref.current.slickPrev()
                return curIndex - 1
            })
        } else if (target.dataset?.type == 'right-button') {
            setPicIndex(curIndex => {
                if(curIndex >= letters.length - 1-(slidesCount - 1)) {
                    return letters.length - 1
                }
                ref.current.slickNext()
                return curIndex + 1
            })
        }
    }

    const handleShowUp = e => {
        setShowLetter(e.target.getAttribute('src'))
        // document.body.classList.add('fixed')
    }
    const handleClose = () => {
        setShowLetter('')
        // document.body.classList.remove('fixed')
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: width ? slidesCount : 4,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (c, n) => setPicIndex(n)
    }

    return (
        <>
            <div className={`${styles['thanks-letters-slider']} home-catalog-slider-slick`}>
                <div className={styles['thanks-letters-slider-window']}>
                    {/* <div className={styles['thanks-letters-slider-block']}> */}
                        <Slider {...settings} ref={ref}>
                        {letters.map((item, index) => (
                            <div key={item.id} 
                                 className={styles['thanks-letters-slide__wrapper']}
                                //  style={{translate: `${-percent * picIndex}%`}}
                            >
                                <div key={item.id} className={styles['thanks-letters-slide']}  >
                                    <img onClick={handleShowUp}
                                         className={styles['thanks-letters-slide__img']} src={item.img} />
                                </div>
                            </div>
                        ))}
                        </Slider>
                    {/* </div> */}
                    <div className={styles['thanks-letters-slider__buttons']}>
                        <LeftButton action={handleSlideSwitch} disabled={picIndex <= 0}/>
                        <RightButton action={handleSlideSwitch} disabled={picIndex >= letters.length-1-(slidesCount - 1)}/>
                    </div>
                </div>
            </div>
            
            {showLetter && 
                <Popup close={handleClose}>
                    <div className={styles['popup-letter']}>
                        <img className={styles['thanks-letters__img-popup']} src={showLetter} />
                        {/* <button className={styles['popup-letter__close']}
                                onClick={handleClose}><img src='/svgs/close-icon.svg' alt='закрыть иконка'/></button> */}
                    </div>
                </Popup>
            }
        </>
    )
}

const letters = [
    {
        id: 1,
        img: '/images/thanks-letters/1.jpg'
    },
    {
        id: 2,
        img: '/images/thanks-letters/2.jpg'
    },
    {
        id: 3,
        img: '/images/thanks-letters/3.jpg'
    },
    {
        id: 4,
        img: '/images/thanks-letters/4.jpg'
    },
    {
        id: 5,
        img: '/images/thanks-letters/5.jpg'
    }
]

export default ThanksSlider