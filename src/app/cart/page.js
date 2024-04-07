'use client'
import React, { useContext, useEffect, useReducer, useState } from 'react'

import styles from '@/styles/cart.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/UI/Buttons/Button'
import cartReducer, { cartActions, cartInitState } from '@/reducers/cartReducer'
// import deleteFromStorageCart from '@/utils/deleteFromStorageCart'
import EmptyCart from '@/components/cart/EmptyCart'
import { CartContext } from '@/providers/CartProvider'



const Cart = () => {
    const [order, dispatch] = useReducer(cartReducer, cartInitState)
    const [cart, setCart] = useState([])
    const [count, setCount] = useState({})
    const [storageCart, _, deleteFromStorageCart] = useContext(CartContext)

    const [discount, total] = cart.reduce((res, p) => {
        const arr = [...res]
        arr[0] += (p.actual_price * count[p.id]) - (p.current_price * count[p.id])
        arr[1] += (p.current_price * count[p.id])
        return arr
    }, [0, 0])

    const getCart = async (ids, goods) => {
        const url = new URL(`${process.env.API_URL}/products/cart`)
    
        ids.keys().forEach(id => url.searchParams.append('pk', id))
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(response.status + ' запрос товаров из корзины не удался')
        }
        const data = await response.json()
        console.log(data)
        let cart = data.map(p => ({...p, count: ids.get(p.id+'')}))
        setCart(cart)
        setCount(goods)
    }

    useEffect(() => {
        let goodsCart = new Map(Object.entries(storageCart))

        if (goodsCart.size < 1) return

        getCart(goodsCart, storageCart)
    }, [])

    const deleteFromCart = id => {
        deleteFromStorageCart(id)

        const newCount = {...count}
        delete newCount[id]
        const newCart = cart.filter(p => p.id !== id)

        setCount(newCount)
        setCart(newCart)
    }

    const handleInputChange = (e, id) => {
        setCount(prev => ({...prev, [id]: e.target.value}))
    }

    const handleInputBlur = (e, id) => {
        const newVal = Number(e.target.value < 1 ? 1 : e.target.value)
        let goods = JSON.parse(localStorage.getItem('cart'))
        localStorage.removeItem('cart')
        if (goods === null) {
            goods = {}
        }
        goods[id] = newVal
        localStorage.setItem('cart', JSON.stringify(goods))
        setCount(prev => ({...prev, [id]: newVal}))
    }

    const handleInputChangeByClick = (type, id) => {
        let newVal
        if (type === 'less') {
            newVal = count[id] <= 1 ? count[id] : count[id]-1
        } else if (type === 'more') {
            newVal = count[id]+1
        } else {
            newVal = count[id]
        }

        setCount(prev => ({...prev, [id]: newVal}))

        let goods = JSON.parse(localStorage.getItem('cart'))
        localStorage.removeItem('cart')
        if (goods === null) {
            goods = {}
        }
        goods[id] = newVal
        localStorage.setItem('cart', JSON.stringify(goods))
    }

    return (
        <div className={`${styles['cart']} first-screen`}>
            <div className='container'>
                <h2 className={styles['cart__title']}>Корзина</h2>
                {
                Object.keys(storageCart).length === 0 ? <EmptyCart /> :
                    <div className={styles['cart__content']}>
                        <div className={styles['cart__products']}>
                            <div className={styles['cart__list']}>
                                {
                                    cart.map(p => (
                                        <div key={p.id} className={styles['cart__card']}>
                                            <Link href={`/catalog/${p.slug}`} className={styles['card__cover']}>
                                                <img src={process.env.BACK_URL + p.img_urls[0].img_url} />
                                            </Link>
                                            <div className={styles['card__product-info']}>
                                                <h3 className={styles['product-info__name']}>{p.name}</h3>
                                                <ul className={styles['product-info__charachteristics']}>
                                                        <li>
                                                            <span className={styles['characteristics__key']}>Наличие</span>
                                                            <span className={`${styles['characteristics__val']} ${p.is_present && styles['present']}`}>{p.is_present ? 'В наличии' : 'Под заказ'}</span>
                                                        </li>
                                                    {
                                                        p.charachteristics.map(c => (
                                                            <li key={c.id} >
                                                                <span className={styles['characteristics__key']}>{c.char}</span>
                                                                <span className={styles['characteristics__val']}>{c.value}</span>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                                <div className={styles['product-info__price']}>
                                                    <span className={styles['product-info__price-current']}>{p.current_price + ' ₽'}</span>
                                                    <span className={styles['product-info__price-actual']}
                                                        hidden={p.current_price === p.actual_price}>
                                                        {p.actual_price + ' ₽'}
                                                    </span>
                                                </div>
                                                <div className={styles['product-info__code']}>
                                                    <span>Код товара: {p.code}</span>
                                                </div>
                                            </div>
                                            <div className={styles['card__controls']}>
                                                <div className={styles['controls__count']}>
                                                    <button onClick={() => handleInputChangeByClick('less', p.id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="2" fill="none"><path fill="black" d="M7.5 1.61h-7v-1h7v1Z"/></svg>
                                                    </button>
                                                    <input type='number' className={styles['controls__count-input']} value={count[p.id]}
                                                        onChange={(e) => handleInputChange(e, p.id)}
                                                        onBlur={(e) => handleInputBlur(e, p.id)}/>
                                                    <button onClick={() => handleInputChangeByClick('more', p.id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none"><path fill="black" d="M7.5 4.5h-3v3h-1v-3h-3v-1h3v-3h1v3h3v1Z"/></svg>
                                                    </button>
                                                </div>
                                                <div className={styles['controls__delete']}>
                                                    <button onClick={() => deleteFromCart(p.id)}>Очистить <Image src='/svgs/trash-icon.svg' width={36} height={36} alt='иконка'/></button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                
                            </div>
                            <div className={styles['cart__total']}>
                                <div className={`${styles['total-discount']} ${discount <= 0 && styles['hidden']}`} >
                                    <span className={styles['total-discount__key']}>
                                        <Image src='/svgs/graph-icon.svg' width={24} height={24} alt='иконка' />
                                        Сумма скидки
                                    </span>
                                    <span className={styles['total__dots']}></span>
                                    <span className={styles['total-discount__val']}>{discount + ' ₽'}</span>
                                </div>
                                <div className={styles['total-price']}>
                                    <span className={styles['total-price__key']}>
                                        <Image src='/svgs/wallet-icon.svg' width={24} height={24} alt='иконка' />
                                        Итого
                                    </span>
                                    <span className={styles['total__dots']}></span>
                                    <span className={styles['total-price__val']}>{total + ' ₽'}</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles['cart__form']}>
                            <form>
                                <fieldset className={styles['form__contact-data']}>
                                    <legend>Введите контактные данные</legend>
                                    <label className={styles['form__input']}>
                                        <div className={styles['form__icon']}>
                                            <Image src='/svgs/user-icon.svg' width={27} height={27} alt='иконка' />
                                        </div>
                                        <input placeholder='Контактное лицо (ФИО)'
                                            onChange={(e) => dispatch({type: cartActions.NAME, payload: e.target.value})}
                                            value={order.name}/>
                                    </label>
                                    <label className={styles['form__input']}>
                                        <div className={styles['form__icon']}>
                                            <Image src='/svgs/phone-icon.svg' width={27} height={27} alt='иконка' />
                                        </div>
                                        <input placeholder='Номер телефона'
                                            onChange={(e) => dispatch({type: cartActions.NUMBER, payload: e.target.value})}
                                            value={order.number}/>
                                    </label>
                                    <label className={styles['form__input']}>
                                        <div className={styles['form__icon']}>
                                            <Image src='/svgs/letter-icon.svg' width={27} height={27} alt='иконка' />
                                        </div>
                                        <input type='email' placeholder='E-mail'
                                            onChange={(e) => dispatch({type: cartActions.EMAIL, payload: e.target.value})}
                                            value={order.email}/>
                                    </label>
                                    <label className={styles['form__input']}>
                                        <div className={styles['form__icon']}>
                                            <Image src='/svgs/location-icon.svg' width={27} height={27} alt='иконка' />
                                        </div>
                                        <input placeholder='Адрес доставки'
                                            onChange={(e) => dispatch({type: cartActions.ADDRESS, payload: e.target.value})}
                                            value={order.address}/>
                                    </label>
                                    <textarea className={styles['form__textarea']} placeholder='Комментарий к заказу'
                                            onChange={(e) => dispatch({type: cartActions.COMMENT, payload: e.target.value})}
                                            value={order.comment}/>
                                </fieldset>
                                <fieldset className={styles['form__payment-method']}>
                                    <legend>Выберите способ оплаты</legend>
                                    <label className={styles['form__radio']} >
                                        <input type='radio' name='payment-method'
                                            value={'cash'} onChange={(e) => dispatch({type: cartActions.PAY_METHOD, payload: e.target.value})}/>
                                        <span className={`${styles['radio__circle']} ${order.payMethod === 'cash' && styles['checked']}`}>
                                            <img src='/svgs/radio-checked-icon.svg' alt='иконка' />
                                        </span>
                                        <span className={styles['radio__text']}>Наличный расчет</span>
                                    </label>
                                    <label className={styles['form__radio']}>
                                        <input type='radio' name='payment-method'
                                            value={'non-cash'} onChange={(e) => dispatch({type: cartActions.PAY_METHOD, payload: e.target.value})}/>
                                        <span className={`${styles['radio__circle']} ${order.payMethod === 'non-cash' && styles['checked']}`}>
                                            <img src='/svgs/radio-checked-icon.svg' alt='иконка' />
                                        </span>
                                        <span className={styles['radio__text']}>Безналичный расчет</span>
                                    </label>
                                </fieldset>

                                <Button text={'Оформить заказ'} smallFont={false} action={() => {}} />
                            </form>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

const products = [
    {
        id: 1,
        slug: 'nepovorot-kovan',
        name: 'Неповоротный кованый (глухой) хомут 48х48',
        code: 'WV08039SR',
        char: [
            {id: 1, key: 'Вес', val: '1,1 кг'},
            {id: 2, key: 'Материал', val: 'Оцинкованныая сталь'}
        ],
        img: '/delete/pic-1.png',
        priceCurrent: 20,
        priceActual: 30,
    },
    {
        id: 2,
        slug: 'nepovorot-kovan2',
        name: 'Неповоротный кованый (глухой) хомут 48х48',
        code: 'WV08039SR',
        char: [
            {id: 1, key: 'Вес', val: '1,1 кг'},
            {id: 2, key: 'Материал', val: 'Оцинкованныая сталь'}
        ],
        img: '/delete/pic-1.png',
        priceCurrent: 30,
        priceActual: 30,
    },
    {
        id: 3,
        slug: 'nepovorot-kovan2',
        name: 'Неповоротный кованый (глухой) хомут 48х48',
        code: 'WV08039SR',
        char: [
            {id: 1, key: 'Вес', val: '2,1 кг'},
            {id: 2, key: 'Материал', val: 'Оцинкованныая сталь'}
        ],
        img: '/delete/pic-1.png',
        priceCurrent: 30,
        priceActual: 30,
    },
    {
        id: 4,
        slug: 'nepovorot-kovan2',
        name: 'Неповоротный кованый (глухой) хомут 48х48',
        code: 'WV08039SR',
        char: [
            {id: 1, key: 'Вес', val: '1,2 кг'},
            {id: 2, key: 'Материал', val: 'Оцинкованныая сталь'}
        ],
        img: '/delete/pic-1.png',
        priceCurrent: 30,
        priceActual: 30,
    },
    {
        id: 5,
        slug: 'nepovorot-kovan2',
        name: 'Неповоротный кованый (глухой) хомут 48х48',
        code: 'WV08039SR',
        char: [
            {id: 1, key: 'Вес', val: '1,1 кг'},
            {id: 2, key: 'Материал', val: 'Оцинкованныая сталь'}
        ],
        img: '/delete/pic-1.png',
        priceCurrent: 30,
        priceActual: 30,
    },
    {
        id: 6,
        slug: 'nepovorot-kovan2',
        name: 'Неповоротный кованый (глухой) хомут 48х48',
        code: 'WV08039SR',
        char: [
            {id: 1, key: 'Вес', val: '1,1 кг'},
            {id: 2, key: 'Материал', val: 'Оцинкованныая сталь'}
        ],
        img: '/delete/pic-1.png',
        priceCurrent: 30,
        priceActual: 80,
    },
    {
        id: 7,
        slug: 'nepovorot-kovan2',
        name: 'Неповоротный кованый (глухой) хомут 48х48',
        code: 'WV08039SR',
        char: [
            {id: 1, key: 'Вес', val: '1,1 кг'},
            {id: 2, key: 'Материал', val: 'Оцинкованныая сталь'}
        ],
        img: '/delete/pic-1.png',
        priceCurrent: 20,
        priceActual: 70,
    },
]

export default Cart