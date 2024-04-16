'use client'
import Search from '@/components/Search/Search'
import React, { useContext, useEffect, useState } from 'react'

import styles from '@/styles/product.module.css'
import Link from 'next/link'
import Image from 'next/image'
import ProductSlider from '@/components/Slider/ProductSlider'
import { CartContext } from '@/providers/CartProvider'
import { LocationNameContext } from '@/providers/LocationNameProvider'
import GetPriceForm from '@/components/Form/GetPriceForm'
import Popup from '@/components/popup/Popup'

const Product = ({params}) => {
    const [aboutBlock, setAboutBlock] = useState('char')

    const [cart, addToCart] = useContext(CartContext)
    const [_, setLocationName] = useContext(LocationNameContext)

    const [product, setProduct] = useState(null)

    const [isGetPriceFormShown, setIsGetPriceFormShown] = useState(false)

    const getProduct = async () => {
        const response = await fetch(`${process.env.API_URL}/products/${params.slug}`)
        if (!response.ok) {
            throw new Error(response.status + ' запрос отдельного продукта не удался')
        }
        const data = await response.json()
        setLocationName(prev => ({...prev, product: data.name}))
        setProduct(data)
    }

    useEffect(() => {
        getProduct()

        return () => {
            setLocationName(prev => {
                const newState = {...prev}
                delete newState.product
                return newState
            })
        }
    }, [])
    
    return (
        <div className={`${styles['product']} first-screen`}>
            <div className='container'>
                <aside className={styles['product__head']}>
                    <Search />
                    <Link href='/catalog' className={styles['product__catalog-button']}>
                        <Image src={'/svgs/horizontal-bars-icon.svg'} width={18} height={16}/>
                        Каталог комплектующих
                    </Link>
                </aside>
                {product && <main className={styles['product__content']}>
                    <div className={styles['product__slider']}>
                        <ProductSlider imgs={product.img_urls}/>
                    </div>
                    <div className={styles['product__title']}>
                        <div className={styles['title__name']}>
                            <h2>{product.name}</h2>
                        </div>
                        <div className={styles['title__product-code']}>
                            <span className={styles['product-code__key']}>Артикул: </span>
                            <span className={styles['product-code__val']}>{product.code}</span>
                        </div>
                    </div>
                    <div className={styles['product__about']}>
                        <div className={styles['about__buttons']}>
                            <button className={styles[`${aboutBlock === 'char' && 'active'}`]}
                                    onClick={() => setAboutBlock('char')}>
                                Характеристики
                            </button>
                            <button className={styles[`${aboutBlock === 'desc' && 'active'}`]}
                                    onClick={() => setAboutBlock('desc')}>
                                Описание
                            </button>
                            <button className={styles[`${aboutBlock === 'doc' && 'active'}`]}
                                    onClick={() => setAboutBlock('doc')}>
                                Документация
                            </button>
                        </div>
                        <div className={styles['about__prod-info']}>
                            <div className={styles['prod-info__characteristics']} hidden={aboutBlock !== 'char'}>
                                <ul className={styles['characteristics__list']}>
                                    <li>
                                        <span className={styles['characteristics__list-key']}>Наличие</span>
                                        <span className={styles['characteristics__list-dots']}></span>
                                        <span className={`${styles['characteristics__list-val']} ${product.is_present && styles['present']}`}>{product.is_present ? 'В наличии' : 'Под заказ'}</span>
                                    </li>
                                    {
                                        product.charachteristics.map(item => (
                                            <li key={item.id}>
                                                <span className={styles['characteristics__list-key']}>{item.char}</span>
                                                <span className={styles['characteristics__list-dots']}></span>
                                                <span className={styles['characteristics__list-val']}>{item.value}</span>
                                            </li>
                                        ))
                                    }
                                    
                                </ul>
                            </div>
                            <div className={styles['prod-info__description']} hidden={aboutBlock !== 'desc'}
                                 dangerouslySetInnerHTML={{__html: product.description}}>
                                {/* {console.log(product.description)} */}
                                {/* <p>{product.description}</p> */}
                            </div>
                            <div className={styles['prod-info__documentation']} hidden={aboutBlock !== 'doc'}>
                                {product?.doc_urls.length > 0 &&
                                    <ul className={styles['prod-info__documentation-list']}>
                                       {product.doc_urls.map(d => (
                                            <li key={d.id}>
                                                <a href={d.doc_url} target="_blank">{d.file_name}</a>
                                            </li>
                                       ))}
                                    </ul>
                                }
                            </div>
                        </div>
                        {/* <div className={styles['about__action-order']}>
                            <div className={styles['action-order__form']}>
                                <div className={styles['action-order__input']}>
                                    <label>
                                        <input type='tel' placeholder='Введите номер телефона'/>
                                    </label>
                                </div>
                                <div className={styles['action-order__button']}>
                                    <button>Оформить заказ</button>
                                </div>
                            </div>
                        </div> */}
                        {product.current_price ?
                            <div className={styles['about__cart']}>
                                <div className={styles['about__price']}>
                                    <div className={styles['price__current']}>{product.current_price && (product.current_price + ' ₽')}</div>
                                    <div className={styles['price__actual']}
                                        hidden={product.actual_price === product.current_price}>
                                        {product.actual_price + ' ₽'}
                                    </div>
                                    <div className={styles['price__discount_text']}
                                        hidden={product.actual_price === product.current_price}>
                                        Стоимость со скидкой
                                    </div>
                                </div>
                                <div className={`${styles['about__cart-button']} ${product.id in cart  && styles['delete']}`}>
                                    {
                                        !(product.id in cart) ?
                                            <button onClick={() => addToCart(product.id)}>В корзину <Image src='/svgs/catalog-cart-icon.svg' width={36} height={36} alt='иконка' /></button> :
                                            <button>В корзине <img src='/svgs/cart-check-icon.svg' alt='иконка'/></button>
                                    }
                                </div>
                            </div>
                        :
                            <div className={styles['about__cart']}>
                                <div className={styles['about__cart-get-price-button']}>
                                    <button onClick={() => setIsGetPriceFormShown(true)}>Узнать цену</button>
                                </div>
                            </div>
                        }
                    </div>
                    <div className={styles['product__extra-info']}>
                        <div className={styles['extra-info']}>
                            <div>
                                <div>
                                    Пожизненный срок службы <span>на все Комплектующие</span>
                                </div>
                                <img src={'/images/product/papers.png'} width={100} height={100} style={{objectFit: 'cover', width: '100%'}} alt='картика с документам'/>
                            </div>
                            <div>
                                <div>
                                    Возникли вопросы? <span>проконсультируем</span>
                                </div>
                                <img src={'/images/product/woman.png'} width={100} height={100} style={{objectFit: 'cover', width: '100%'}} alt='девушка'/>
                            </div>
                            <div>
                                <div>
                                    Купите комплектующие <span>в офисе продаж</span>
                                </div>
                                <img src={'/images/product/map.png'} width={100} height={100} style={{objectFit: 'cover', width: '100%'}} alt='карта'/>
                            </div>
                        </div>
                    </div>
                </main>}
                <div className={styles['product__delivery-wrapper']}>
                    
                    <div className={styles['product__delivery']}>
                        <div className={styles['product__delivery-block']}>
                            <div className={styles['delivery-block__img']}>
                                <Image src={'/images/product-delivery-block/truck.png'} width={170} height={160} alt='фон' />
                            </div>
                            <div className={styles['delivery-block__text']}>
                                <span className={styles['delivery-block__header']}>Сотрудничаем со всеми службами доставки</span>
                                <span className={styles['delivery-block__description']}>Полученные заказы до 16:00, будут отправлены в тот же день</span>
                            </div>
                        </div>
                        <div className={styles['product__delivery-block']}>
                        <   div className={styles['delivery-block__img']}>
                                <Image src={'/images/product-delivery-block/box.png'} width={170} height={160} alt='фон' />
                            </div>
                            <div className={styles['delivery-block__text']}>
                                <span className={styles['delivery-block__header']}>Доставка товара без задержек</span>
                                <span className={styles['delivery-block__description']}>Полученные заказы до 16:00, будут отправлены в тот же день</span>
                            </div>
                        </div>
                        <div className={styles['product__delivery-block']}>
                            <div className={styles['delivery-block__img']}>
                                <Image src={'/images/product-delivery-block/calendar.png'} width={170} height={160} alt='фон' />
                            </div>
                            <div className={styles['delivery-block__text']}>
                                <span className={styles['delivery-block__header']}>И кратчайшие сроки доставки</span>
                                <span className={styles['delivery-block__description']}>Пн-Пт, с 08:00 до 18:00,</span>
                                <span className={styles['delivery-block__description']}>Сб, с 10:00 до 15:00, вс выходной</span>
                            </div>
                        </div>

                        <div className={styles['product__delivery-block-shadow']}></div>
                        <div className={styles['product__delivery-block-shadow']}></div>
                        {/* <div className={styles['product__delivery-block-shadow']}></div> */}
                    </div>
                </div>
            </div>
            {isGetPriceFormShown && 
                <Popup close={() => setIsGetPriceFormShown(false)} >
                    <GetPriceForm product={product} />
                </Popup>
            }
        </div>
    )
}



export default Product