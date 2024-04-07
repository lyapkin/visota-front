'use client'
import React, { useState } from 'react'

import styles from '@/styles/catalog.module.css'

const Filter = ({categories, catFilter, priceFilter, reset, apply, open}) => {
    const [isCategoriesClosed, setIsCategoriesClosed] = useState(false)
    const [isPriceClosed, setIsPriceClosed] = useState(false)
    const [isCategoriesItemClosed, setIsCategoriesItemClosed] = useState(
        categories.reduce((state, cat) => {
            const obj = {
                ...state
            }
            obj[cat.id] = false
            return obj
        }, {})
    )

    

    return (
        <aside className={`${styles['catalog__filters']} ${open && styles['open']}`}>
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
                                    <div key={sub.id} className={styles['subcategories__item']}>
                                        <label>
                                            <input name={cat.slug} type='checkbox'
                                                   value={sub.slug} checked={catFilter.get.has(sub.slug)}
                                                   onChange={catFilter.onChange}/>
                                            <div className={`${styles['filters__checkbox']} ${catFilter.get.has(sub.slug) && styles['checked']}`}>
                                                <img src='/svgs/check-icon.svg' alt='иконка' />
                                            </div>
                                            <span>{sub.name}</span>
                                        </label>
                                    </div>
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
                            <input type='number' id='filter-price-min' value={priceFilter.get.min} onChange={priceFilter.onChange}/>
                            <input type='number' id='filter-price-max' value={priceFilter.get.max} onChange={priceFilter.onChange}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['filters__apply']}>
                <button onClick={apply}>Применить</button>
            </div>
            <div className={styles['filters__reset']}>
                <button onClick={reset}>Сбросить фильтры<img src='/svgs/trash-icon.svg' alt='иконка' /></button>
            </div>
        </aside>
    )
}

export default Filter