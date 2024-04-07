'use client'
import Image from 'next/image'
import React, { useReducer } from 'react'

import styles from './form.module.css'
import Button from '../UI/Buttons/Button'
import formReducer, { formActions, formInitState } from '@/reducers/formReducer'

const Form = ({main}) => {
    const [form, dispatch] = useReducer(formReducer, formInitState)

    return (
        <div className={`${styles['form-block']} ${main && styles['form-main']}`}>
            <h2>Вам нужен <span>надежный поставщик</span> комплектующих для вашего объекта ?</h2>
            <p>Оставьте заявку и мы сформируем для вас лучшее предложение в течение 20 минут</p>
        
            <form className={styles['form']}>
                <label className={styles['form__input']}>
                    <div className={styles['form__icon']}>
                        <Image src='/svgs/user-icon.svg' width={27} height={27}/>
                    </div>
                    <input placeholder='Контактное лицо (ФИО)'
                           onChange={e => dispatch({type: formActions.NAME, payload: e.target.value})}
                           value={form.name}/>
                </label>
                <label className={styles['form__input']}>
                    <div className={styles['form__icon']}>
                        <Image src='/svgs/phone-icon.svg' width={27} height={27}/>
                    </div>
                    <input placeholder='Номер телефона'
                           onChange={e => dispatch({type: formActions.NUMBER, payload: e.target.value})}
                           value={form.number}/>
                </label>
                <label className={styles['form__input']}>
                    <div className={styles['form__icon']}>
                        <Image src='/svgs/instruments-icon.svg' width={27} height={27}/>
                    </div>
                    <input placeholder='Вид деятельности'
                           onChange={e => dispatch({type: formActions.ACTIVITY_TYPE, payload: e.target.value})}
                           value={form.activityType}/>
                </label>
                {main && (<label className={styles['form__input']}>
                    <div className={styles['form__icon']}>
                        <Image src='/svgs/building-icon.svg' width={27} height={27}/>
                    </div>
                    <input placeholder='Наименование предприятия'
                           onChange={e => dispatch({type: formActions.COMPANY_NAME, payload: e.target.value})}
                           value={form.companyName}/>
                </label>)}
                <textarea className={styles['form__textarea']} placeholder='Напишите комментарий к заказу'
                          onChange={e => dispatch({type: formActions.COMMENT, payload: e.target.value})}
                          value={form.comment}/>
                <Button text={'Заказать консультацию'}/>
                {main && (<p className={styles['agreement']}>Нажимая кнопку вы соглашаетесь <span>с условиями обработки данных</span></p>)}
            </form>
        </div>
    )
}

export default Form