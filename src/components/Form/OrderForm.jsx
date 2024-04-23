import React, { useReducer } from 'react'
import Image from 'next/image'

import styles from '@/styles/cart.module.css'
import cartReducer, { cartActions, cartInitState } from '@/reducers/cartReducer'
import Button from '../UI/Buttons/Button'
import { useRouter } from 'next/navigation'

const OrderForm = ({cart, productsCount}) => {
    const router = useRouter()
    const [order, dispatch] = useReducer(cartReducer, cartInitState)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            ...order.data,
            products: cart.map(p => ({product: p.id, order_price: p.current_price, count: productsCount[p.id]}))
        }

        const url = new URL(process.env.BACK_URL + `/api/request/order/`)
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if (response.status === 400) {
            const result = await response.json()
            dispatch({type: cartActions.ERROR, payload: result})
        } else if (response.ok) {
            dispatch({type: cartActions.RESET})
            router.push('/success')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className={styles['form__contact-data']}>
                <legend>Введите контактные данные</legend>
                <label className={`${styles['form__input']} ${order.error.name && 'input-form-error'}`}>
                    <div className={styles['form__icon']}>
                        <Image src='/svgs/user-icon.svg' width={27} height={27} alt='иконка' />
                    </div>
                    <input placeholder='Контактное лицо (ФИО)'
                        onChange={(e) => dispatch({ type: cartActions.NAME, payload: e.target.value })}
                        value={order.data.name} />
                </label>
                <label className={`${styles['form__input']} ${order.error.number && 'input-form-error'}`}>
                    <div className={styles['form__icon']}>
                        <Image src='/svgs/phone-icon.svg' width={27} height={27} alt='иконка' />
                    </div>
                    <input placeholder='Номер телефона'
                        onChange={(e) => dispatch({ type: cartActions.NUMBER, payload: e.target.value })}
                        value={order.data.number} />
                </label>
                <label className={`${styles['form__input']} ${order.error.email && 'input-form-error'}`}>
                    <div className={styles['form__icon']}>
                        <Image src='/svgs/letter-icon.svg' width={27} height={27} alt='иконка' />
                    </div>
                    <input type='email' placeholder='E-mail'
                        onChange={(e) => dispatch({ type: cartActions.EMAIL, payload: e.target.value })}
                        value={order.data.email} />
                </label>
                <label className={`${styles['form__input']} ${order.error.delivery_address && 'input-form-error'}`}>
                    <div className={styles['form__icon']}>
                        <Image src='/svgs/location-icon.svg' width={27} height={27} alt='иконка' />
                    </div>
                    <input placeholder='Адрес доставки'
                        onChange={(e) => dispatch({ type: cartActions.ADDRESS, payload: e.target.value })}
                        value={order.data.delivery_address} />
                </label>
                <textarea className={`${styles['form__textarea']} ${order.error.comment && 'input-form-error'}`} placeholder='Комментарий к заказу'
                    onChange={(e) => dispatch({ type: cartActions.COMMENT, payload: e.target.value })}
                    value={order.data.comment} />
            </fieldset>
            <fieldset className={`${styles['form__payment-method']}`}>
                <legend>Выберите способ оплаты</legend>
                <label className={styles['form__radio']} >
                    <input type='radio' name='payment_method'
                        value={'cash'} onChange={(e) => dispatch({ type: cartActions.PAY_METHOD, payload: e.target.value })} />
                    <span className={`${styles['radio__circle']} ${order.data.payment_method === 'cash' && styles['checked']}`}>
                        <img src='/svgs/radio-checked-icon.svg' alt='иконка' />
                    </span>
                    <span className={`${styles['radio__text']} ${order.error.payment_method && 'input-form-error'}`}>Наличный расчет</span>
                </label>
                <label className={styles['form__radio']}>
                    <input type='radio' name='payment_method'
                        value={'non-cash'} onChange={(e) => dispatch({ type: cartActions.PAY_METHOD, payload: e.target.value })} />
                    <span className={`${styles['radio__circle']} ${order.data.payment_method === 'non-cash' && styles['checked']}`}>
                        <img src='/svgs/radio-checked-icon.svg' alt='иконка' />
                    </span>
                    <span className={`${styles['radio__text']} ${order.error.payment_method && 'input-form-error'}`}>Безналичный расчет</span>
                </label>
            </fieldset>

            <Button text={'Оформить заказ'} smallFont={false} action={() => { }} />
        </form>
    )
}

export default OrderForm