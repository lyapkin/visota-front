'use client'
import React, { useEffect, useState } from 'react'

import styles from './Header.module.css'
import Link from 'next/link'

const CartTab = () => {
    const [goodsCount, setGoodsCount] = useState('')
    

    useEffect(() => {
        const changeGoodsCountState = () => {
            const goods = JSON.parse(localStorage.getItem('cart'))
            const goodsCount = goods !== null ? Object.keys(goods).length : ''
            setGoodsCount(goodsCount)
        }
        
        changeGoodsCountState()

        window.addEventListener('cartChange', changeGoodsCountState)

        return () => window.removeEventListener('cartChange', changeGoodsCountState)
    }, [])

    return (
        <div className={styles['header-tabs__cart']}>
            <Link href='/cart' value={goodsCount || ''}><img src='/svgs/cart.svg' alt='иконка'/></Link>
        </div>
    )
}

export default CartTab