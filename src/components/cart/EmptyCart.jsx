import React from 'react'

import styles from '@/styles/cart.module.css'

const EmptyCart = () => {
    return (
        <div className={styles['cart__empty-cart']}>Корзина пустая</div>
    )
}

export default EmptyCart