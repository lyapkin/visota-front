'use client'
import React, { useEffect, useState } from 'react'

import styles from '@/styles/catalog.module.css'
import { MAX_PRICE, MIN_PRICE } from './constant'
import { useParams, useRouter } from 'next/navigation'

const Filter = ({categories, searchParams, priceFilter, handleCatChange, reset}) => {
    const locale = useParams().locale
    const router = useRouter()
    const catFilter = new Set(searchParams.getAll('sub'))
    const [isCategoriesClosed, setIsCategoriesClosed] = useState(false)
    const [isPriceClosed, setIsPriceClosed] = useState(false)
    const [isCategoriesItemClosed, setIsCategoriesItemClosed] = useState(
        categories.reduce((state, cat) => ({...state, [cat.id]: true}), {})
    )

    useEffect(() => {
        setIsCategoriesItemClosed(prev => {
            return categories.reduce((state, cat) => {
                const obj = {
                    ...state
                }
                obj[cat.id] = ( cat.subcategories.find(s => catFilter.has(s.slug)) || prev[cat.id] === false ) ? 
                                    false : true
                return obj
            }, {})
        })
    }, [searchParams])

    const slideLeftPosition = `${((priceFilter.get.min || 1) / MAX_PRICE) * 100}%`
    const slideRightPosition = `${100 - (((priceFilter.get.max || MAX_PRICE) / MAX_PRICE) * 100)}%`

    const handlePriceSlide = (e) => {
        const target = e.target
        
        if (target.id === 'price-range-min' && (!priceFilter.get.max || parseInt(target.value) < parseInt(priceFilter.get.max))) {
            priceFilter.onChange(target.value, 'filter-price-min')
        } else if (target.id === 'price-range-max' && (!priceFilter.get.min || parseInt(target.value) > parseInt(priceFilter.get.min))) {
            priceFilter.onChange(target.value, 'filter-price-max')
        }

    }

    const handlePriceInput = (e) => {
        const target = e.target
        priceFilter.onChange(target.value, target.id)
    }

    const applyPrice = () => {
        const urlSearchParams = new URLSearchParams(searchParams.toString())
        urlSearchParams.set('price_min', priceFilter.get.min)
        urlSearchParams.set('price_max', priceFilter.get.max)
        urlSearchParams.delete('page')
        router.replace('/catalog?' + urlSearchParams.toString(), {scroll: false})
    }
    

    return (
        <aside className={`${styles['catalog__filters']} `}>
            <div className={styles['filters__categories']}>
                <button onClick={() => setIsCategoriesClosed(prev => !prev)}>
                    Категории
                    <span className={isCategoriesClosed ? styles['filters__button-arrow_closed'] : styles['filters__button-arrow']}></span>
                </button>
                <div className={`${styles['categories__content']} ${isCategoriesClosed && styles['closed']}`}>
                    {
                    categories.map(cat => (
                        <div key={cat.id} className={styles['categories__cat']}>
                            <button onClick={() => setIsCategoriesItemClosed(prev => ({...prev, [cat.id]: !prev[cat.id]}))}>
                                {cat.name}
                                <span className={styles['categories__button-circle']}>
                                    <img src={`/svgs/${isCategoriesItemClosed[cat.id] ? 'plus' : 'minus'}-icon.svg`} alt='иконка' />
                                </span>
                            </button>
                            <div className={`${isCategoriesItemClosed[cat.id] ? styles['cat__subcategories_closed'] : styles['cat__subcategories']}`}>
                                {
                                cat.subcategories.map(sub => (
                                    (
                                    (locale in sub.translations) &&
                                    <div key={sub.id} className={styles['subcategories__item']}>
                                        <label>
                                            <input name={cat.slug} type='checkbox'
                                                   value={sub.slug} checked={catFilter.has(sub.slug)}
                                                   onChange={() => handleCatChange(sub.slug)}/>
                                            <div className={`${styles['filters__checkbox']} ${catFilter.has(sub.slug) && styles['checked']}`}>
                                                <img src='/svgs/check-icon.svg' alt='иконка' />
                                            </div>
                                            <span>{sub.translations[locale].name}</span>
                                        </label>
                                    </div>)
                                ))
                                }
                            </div>
                        </div>
                    ))
                    }
                    
                </div>
            </div>
            <div className={styles['filters__price']}>
                <button onClick={() => setIsPriceClosed(prev => !prev)}>
                    Стоимость
                    <span className={isPriceClosed ? styles['filters__button-arrow_closed'] : styles['filters__button-arrow']}></span>
                </button>
                <div className={`${styles['price__content']} ${isPriceClosed && styles['closed']}`}>
                    <div className={styles['price__range']}>
                        <div className={styles['price__input']}>
                            <input type='number'
                                   id='filter-price-min'
                                   value={priceFilter.get.min}
                                   onChange={handlePriceInput}
                                   onBlur={applyPrice}/>
                            <input type='number'
                                   id='filter-price-max'
                                   value={priceFilter.get.max}
                                   onChange={handlePriceInput}
                                   onBlur={applyPrice} />
                        </div>
                        <div className={styles["price__range-slider"]}>
                            <span className={styles["price__range-selected"]}
                                  style={{left: slideLeftPosition, right: slideRightPosition}}></span>
                        </div>
                        <div className={styles["price__range-input"]}>
                            <input type="range"
                                   id='price-range-min'
                                   className={styles["range-input__min"]}
                                   min={`${MIN_PRICE}`} max={`${MAX_PRICE}`}
                                   value={priceFilter.get.min || `${MIN_PRICE}`}
                                   step="1"
                                   onChange={handlePriceSlide}
                                   onMouseUp={applyPrice}
                                   onTouchEnd={applyPrice} />
                            <input type="range"
                                   id='price-range-max'
                                   className={styles["range-input__max"]}
                                   min={`${MIN_PRICE}`} max={`${MAX_PRICE}`}
                                   value={priceFilter.get.max || `${MAX_PRICE}`}
                                   step="1"
                                   onChange={handlePriceSlide}
                                   onMouseUp={applyPrice}
                                   onTouchEnd={applyPrice} />
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* <div className={styles['filters__apply']}>
                <button onClick={apply}>Применить</button>
            </div> */}
            <div className={styles['filters__reset']}>
                <button onClick={reset}>Сбросить фильтры<img src='/svgs/trash-icon.svg' alt='иконка' /></button>
            </div>
        </aside>
    )
}



export default Filter