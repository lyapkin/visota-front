'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import styles from '@/styles/catalog.module.css'
import Filter from '@/components/catalog/Filter'
import Search from '@/components/Search/Search'
import { useRouter, useSearchParams } from 'next/navigation'
import { CartContext } from '@/providers/CartProvider'
import { MAX_PRICE } from './constant'

const CatalogContent = ({categories}) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const filterWindowRef = useRef(null)
    const filterButtonRef = useRef(null)

    const [cart, addToCart] = useContext(CartContext)
    
    const [priceFilter, setPriceFilter] = useState({
        min: searchParams.get('price_min') || '',
        max: searchParams.get('price_max') || ''
    })

    const page = parseInt(searchParams.get('page')) || 1
    const [isNextPage, setIsNextPage] = useState(false)

    const [products, setProducts] = useState([])


    const [isFiltersOpen, setIsFiltersOpen] = useState(searchParams.getAll('sub').length > 0 ? false : true)
    

    const appendProducts = async () => {
        const urlSearchParams = new URLSearchParams(searchParams.toString())
        urlSearchParams.set('page', page+1)

        router.replace(`/catalog?${urlSearchParams.toString()}`, {scroll: false})
    }
    
    const getProducts = async (abortController) => {
        const url = new URL(process.env.API_URL + '/products/?' + searchParams.toString())
        
        const response = await fetch(url, {signal: abortController.signal})

        if (!response.ok) {
            throw new Error(response.status + ' запрос товаров не удался')
        }

        const data = await response.json()
        
        if (data.next) {
            setIsNextPage(true)
        } else {
            setIsNextPage(false)
        }
        setProducts(prev => {
            return page === 1 ? data.results : prev.concat(data.results)
        })
    }

    useEffect(() => {
        const abortController = new AbortController()
        
        getProducts(abortController)
        setPriceFilter({
            min: searchParams.get('price_min') || '',
            max: searchParams.get('price_max') || ''
        })

        return () => {
            abortController.abort()
        }
    }, [searchParams])

    useEffect(() => {
        const handler = e => {
            if (!filterWindowRef.current.contains(e.target) && !filterButtonRef.current.contains(e.target)) {
                setIsFiltersOpen(false)
            }
        }

        document.addEventListener('click', handler)

        return () => {
            document.removeEventListener('click', handler)
        }
    }, [])

    const handlePriceChange = (val, type) => {
        if (val < 0 || val > MAX_PRICE) return
        
        setPriceFilter(prev => {
            const newState = {...prev}
            if (type === 'filter-price-min') {
                newState.min = val
            }
            if (type === 'filter-price-max') {
                newState.max = val
            }

            return newState
        })
        
    }

    const handleReset = () => {
        setPriceFilter({
            min: '',
            max: ''
        })
        router.replace('/catalog', {scroll: false})
    }

    const handleCatChange = slug => {
        setIsFiltersOpen(false)
        router.replace(`/catalog?sub=${slug}`, {scroll: false})
    }

    return (
        <div className={styles['catalog__content']}>
            <div className={`${styles['catalog__filters-popup']} ${isFiltersOpen && styles['open']}`} ref={filterWindowRef}>
                <button className={styles['catalog__filters-popup-close']}
                        onClick={() => setIsFiltersOpen(false)}>
                    Фильтры
                    <img src='/svgs/close-icon.svg' alt='закрыть' />
                </button>
                <Filter categories={categories}
                    searchParams={searchParams}
                    priceFilter={{get: priceFilter,
                                onChange: handlePriceChange}}
                    handleCatChange={handleCatChange}
                    reset={handleReset}
                />
            </div>
            <Filter categories={categories}
                    searchParams={searchParams}
                    priceFilter={{get: priceFilter,
                                onChange: handlePriceChange}}
                    handleCatChange={handleCatChange}
                    reset={handleReset}
            />
            <aside className={styles['catalog__serach']}>
                <Search />
            </aside>
            <div className={styles['catalog__filters-sort-buttons']} ref={filterButtonRef}>
                <button className={styles['catalog__filters-toggle']}
                        onClick={() => setIsFiltersOpen(prev => !prev)}
                        >
                    <img src='/svgs/filters-toggle-icon.svg' />
                    Фильтры
                </button>
            </div>
            <div className={styles['catalog__products']}>
                <main>
                    {
                    products.map(p => (
                        <div key={p.id} className={styles['products__card']}>
                            <div className={styles['card__cover']}>
                                <Link href={`/catalog/${p.slug}`} >
                                    <span className={styles['card__presence']}>{p.is_present ? 'В наличии' : 'Под заказ'}</span>
                                    <div className={styles['card__image']}>
                                        <img src={p.img_urls[0].img_url} height={214} width={200} alt='фото товара' />
                                    </div>
                                </Link>
                            </div>
                            <div className={styles['card__body']}>
                                <div className={styles['card__name']}>
                                    <Link href={`/catalog/${p.slug}`}>
                                        {p.name}
                                    </Link>
                                </div>
                                <div className={styles['card__caracteristics']}>
                                    <ul>
                                        {
                                            p.charachteristics.map(c => (
                                                <li key={c.id}>
                                                    <span className={styles['caracteristics__key']}>{c.char}</span>
                                                    <span className={styles['caracteristics__val']}>{c.value}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className={styles['card__order']}>
                                    <div className={styles['order__price']}>
                                        <div className={styles['price__key']}>
                                            <span>{p.current_price && 'Стоимость'}</span>
                                        </div>
                                        <div className={styles['price__val']}>
                                            <span>{p.current_price && (p.current_price + ' ₽')}</span>
                                        </div>
                                    </div>
                                    <div className={styles['order__cart-button']}>
                                        {
                                            !(p.id in cart) ? 
                                                <button onClick={() => addToCart(p.id)}>В корзину<img src='/svgs/catalog-cart-icon.svg' alt='иконка'/></button> :
                                                <button>В корзине <img src='/svgs/cart-check-icon.svg' alt='иконка'/></button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </main>
                {isNextPage && products.length > 0 &&
                    <button className={styles['catalog__show-more']} onClick={appendProducts} >Показать еще</button>}
            </div>
            
        </div>
    )
}


export default CatalogContent