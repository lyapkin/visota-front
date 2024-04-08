'use client'
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'

import styles from '@/styles/catalog.module.css'
import Filter from '@/components/catalog/Filter'
import Search from '@/components/Search/Search'
// import addToCart from '@/utils/addToStorageCart'
import { useRouter, useSearchParams } from 'next/navigation'
import { CartContext } from '@/providers/CartProvider'
import { SearchLineContext } from '@/providers/SearchLineProvider'

const CatalogContent = ({categories}) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [isFiltersOpen, setIsFiltersOpen] = useState(false)

    const [cart, addToCart, deleteFromCart] = useContext(CartContext)

    const [searchLine, setSearchLine] = useContext(SearchLineContext)
    const [categoriesFilter, setCategoriesFilter] = useState(new Set(searchParams.getAll('sub')))
    const [priceFilter, setPriceFilter] = useState({
        min: searchParams.getAll('price_min') || '',
        max: searchParams.getAll('price_max') || ''
    })
    const [page, setPage] = useState(1)
    const [isNextPage, setIsNextPage] = useState(false)

    const [currentFilter, setCurrentFilter] = useState({
        searchLine,
        categoriesFilter,
        priceFilter
    })

    const [products, setProducts] = useState([])

    const appendProducts = async () => {
        const url = new URL(process.env.API_URL + '/products/')

        currentFilter.categoriesFilter.forEach(p => url.searchParams.append('sub', p))
        url.searchParams.set('search', currentFilter.searchLine)
        url.searchParams.set('price_min', currentFilter.priceFilter.min)
        url.searchParams.set('price_max', currentFilter.priceFilter.max)
        url.searchParams.set('page', page+1)

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(response.status + ' запрос товаров не удался')
        }

        const data = await response.json()
        
        
        if (data.next) {
            setIsNextPage(true)
            setPage(prev => prev+1)
        } else {
            setIsNextPage(false)
        }
        setIsNextPage((data.next && true) || false)
        setProducts(prev => prev.concat(data.results))
    }
    
    const getProducts = async () => {
        const url = new URL(process.env.API_URL + '/products/')

        currentFilter.categoriesFilter.forEach(p => url.searchParams.append('sub', p))
        url.searchParams.set('search', currentFilter.searchLine)
        url.searchParams.set('price_min', currentFilter.priceFilter.min)
        url.searchParams.set('price_max', currentFilter.priceFilter.max)
        
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(response.status + ' запрос товаров не удался')
        }

        const data = await response.json()
        
        if (data.next) {
            setIsNextPage(true)
        }
        setProducts(data.results)
    }

    useEffect(() => {
        getProducts()
    }, [currentFilter])
    
    const handleCategoriesChange = (e) => {
        setCategoriesFilter((prev) => {
            const newState = new Set(prev)
            if (prev.has(e.target.value)) {
                newState.delete(e.target.value)
            } else {
                newState.add(e.target.value)
            }
            
            return newState
        })
    }

    const handlePriceChange = (e) => {
        if (e.target.value < 0) return
        setPriceFilter(prev => {
            const newState = {...prev}
            if (e.target.id === 'filter-price-min') {
                newState.min = e.target.value
            }
            if (e.target.id === 'filter-price-max') {
                newState.max = e.target.value
            }

            return newState
        })
    }

    const handleReset = () => {
        setCategoriesFilter(new Set())
        setPriceFilter({
            min: '',
            max: ''
        })
        setCurrentFilter({
            searchLine: '',
            categoriesFilter: new Set(),
            priceFilter: {
                min: '',
                max: ''
            }
        })
        router.replace(process.env.BASE_URL + '/catalog')
    }

    const handleApply = (e) => {
        e.preventDefault()
        setCurrentFilter((prev) => ({
            ...prev,
            categoriesFilter,
            priceFilter
        }))
        setIsFiltersOpen(false)

        let url = '/catalog?'
        const params = []
        categoriesFilter.forEach(p => params.push('sub='+p))
        url = url.concat(params.join('&'), '&search='+searchLine, '&price_min=' + priceFilter.min, '&price_max=' + priceFilter.max)
        router.replace(url, scroll=false)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        setCurrentFilter((prev) => ({
            ...prev,
            searchLine
        }))

        let url = '/catalog?'
        const params = []
        categoriesFilter.forEach(p => params.push('sub='+p))
        url = url.concat(params.join('&'), '&search='+searchLine, '&price_min=' + priceFilter.min, '&price_max=' + priceFilter.max)
        router.replace(url, scroll=false)
    }

    return (
        <div className={styles['catalog__content']}>
            <div className={`${styles['catalog__filters-popup']} ${isFiltersOpen && styles['open']}`}>
                <button className={styles['catalog__filters-popup-close']}
                        onClick={() => setIsFiltersOpen(false)}>
                    Фильтры
                    <img src='/svgs/close-icon.svg' alt='закрыть' />
                </button>
                <Filter categories={categories}
                    catFilter={{get: categoriesFilter,
                                onChange: handleCategoriesChange}}
                    priceFilter={{get: priceFilter,
                                onChange: handlePriceChange}}
                    reset={handleReset}
                    apply={handleApply} />
            </div>
            <Filter categories={categories}
                    catFilter={{get: categoriesFilter,
                                onChange: handleCategoriesChange}}
                    priceFilter={{get: priceFilter,
                                onChange: handlePriceChange}}
                    reset={handleReset}
                    apply={handleApply} />
            <aside className={styles['catalog__serach']}>
                <Search searchLine={{get: searchLine,
                                    onChange: setSearchLine}}
                        submit={handleSearch} />
            </aside>
            <div className={styles['catalog__filters-sort-buttons']}>
                <button className={styles['catalog__filters-toggle']}
                        onClick={() => setIsFiltersOpen(prev => !prev)}>
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
                {isNextPage && <button className={styles['catalog__show-more']} onClick={appendProducts} >Показать еще</button>}
            </div>
            
        </div>
    )
}


export default CatalogContent