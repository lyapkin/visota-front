'use client'
import Image from 'next/image'
import React, { useReducer } from 'react'

import styles from './form.module.css'
import Button from '../UI/Buttons/Button'
import formReducer, { formActions, formInitState } from '@/reducers/formReducer'
import { useTranslation } from 'react-i18next'

const Form = ({main, popup, buttonText}) => {
    const [form, dispatch] = useReducer(formReducer, formInitState)

    const {t} = useTranslation()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className={`${styles['form-block']} ${(main || popup) && styles['form-main']} ${popup && styles['form-popup']}`}>
            {!popup && <>
                <h2
                    dangerouslySetInnerHTML={{ __html: t('form:title', { interpolation: { escapeValue: false } }) }}
                >

                </h2>
                <p>{t('form:text')}</p>
            </>}
        
            <form className={styles['form']} onSubmit={handleSubmit}>
                <label className={styles['form__input']}>
                    <div className={styles['form__icon']}>
                        <Image src='/svgs/user-icon.svg' width={27} height={27}/>
                    </div>
                    <input placeholder={t('form:placeholder_name')}
                           onChange={e => dispatch({type: formActions.NAME, payload: e.target.value})}
                           value={form.name}/>
                </label>
                <label className={styles['form__input']}>
                    <div className={styles['form__icon']}>
                        <Image src='/svgs/phone-icon.svg' width={27} height={27}/>
                    </div>
                    <input placeholder={t('form:placeholder_number')}
                           onChange={e => dispatch({type: formActions.NUMBER, payload: e.target.value})}
                           value={form.number}/>
                </label>
                <label className={styles['form__input']}>
                    <div className={styles['form__icon']}>
                        <Image src='/svgs/instruments-icon.svg' width={27} height={27}/>
                    </div>
                    <input placeholder={t('form:placeholder_activity')}
                           onChange={e => dispatch({type: formActions.ACTIVITY_TYPE, payload: e.target.value})}
                           value={form.activityType}/>
                </label>
                {main && (<label className={styles['form__input']}>
                    <div className={styles['form__icon']}>
                        <Image src='/svgs/building-icon.svg' width={27} height={27}/>
                    </div>
                    <input placeholder={t('form:placeholder_company_name')}
                           onChange={e => dispatch({type: formActions.COMPANY_NAME, payload: e.target.value})}
                           value={form.companyName}/>
                </label>)}
                <textarea className={styles['form__textarea']} placeholder={t('form:placeholder_comment')}
                          onChange={e => dispatch({type: formActions.COMMENT, payload: e.target.value})}
                          value={form.comment}/>
                <Button text={buttonText || 'Заказать консультацию'}/>
                {main && (<p className={styles['agreement']}
                             dangerouslySetInnerHTML={{ __html: t('form:confidential', { interpolation: { escapeValue: false } }) }}
                          ></p>)}
            </form>
        </div>
    )
}

export default Form