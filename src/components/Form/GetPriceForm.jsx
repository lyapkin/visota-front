import React from 'react'
import TextInput from '../UI/form/TextInput'
import TextArea from '../UI/form/TextArea'
import Button from '../UI/Buttons/Button'

import styles from '@/components/Form/form.module.css'

const GetPriceForm = ({product}) => {

    return (
        <>
            <div className={styles['get-price-form-wrapper']}>
                <div className={styles['head']}>
                    <h5>{product.name}</h5>
                </div>
                <form className={styles['get-price-form']}>
                    <TextInput 
                            value={''}
                            onChange={() => {}} 
                            placeholder={'Контактное лицо (ФИО)'}
                            required={true}
                            img={{url: '/svgs/user-icon.svg', width: 27, height: 27}}
                            type={'text'}
                    />
                    <TextInput 
                            value={''}
                            onChange={() => {}} 
                            placeholder={'Email'}
                            required={true}
                            img={{url: '/svgs/email-no-bg-icon.svg', width: 27, height: 27}}
                            type={'email'}
                    />
                    <TextInput 
                            value={''}
                            onChange={() => {}} 
                            placeholder={'Номер телефона'}
                            required={true}
                            img={{url: '/svgs/phone-icon.svg', width: 27, height: 27}}
                            type={'tel'}
                    />
                    <TextArea
                            value={''}
                            onChange={() => {}} 
                            placeholder={'Напишите комментарий к заказу'}
                    />
                    <Button
                            text={'Узнать цену'}
                            action={() => {}}
                    />
                </form>
            </div>
        </>
    )
}

export default GetPriceForm