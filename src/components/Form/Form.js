'use client'
import Image from 'next/image'
import React, { useReducer } from 'react'

import styles from './form.module.css'
import Button from '../UI/Buttons/Button'
import formReducer, { formActions, formInitState } from '@/reducers/formReducer'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'
import getCookie from '@/utils/getCookie'

const Form = ({main, popup, buttonText, closePopup}) => {
    const router = useRouter()
    const [form, dispatch] = useReducer(formReducer, formInitState)

    const {t} = useTranslation()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const csrf = getCookie('csrftoken')

        const url = new URL(process.env.BACK_URL + `/api/request/consultation/`)
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrf
            },
            mode: 'same-origin',
            body: JSON.stringify(form.data)
        })
        if (response.status === 400) {
            const result = await response.json()
            dispatch({type: formActions.ERROR, payload: result})
        } else if (response.ok) {
            router.push('/success')
            dispatch({type: formActions.RESET})
            if (popup) closePopup()
        }
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
                <label className={`${styles['form__input']} ${form.error.name && 'input-form-error'}`}>
                    <div className={styles['form__icon']}>
                        <Image src='/svgs/user-icon.svg' width={27} height={27}/>
                    </div>
                    <input placeholder={t('form:placeholder_name')}
                           onChange={e => dispatch({type: formActions.NAME, payload: e.target.value})}
                           value={form.data.name}
                           required={true}/>
                </label>
                <label className={`${styles['form__input']} ${form.error.number && 'input-form-error'}`}>
                    <div className={styles['form__icon']}>
                        <Image src='/svgs/phone-icon.svg' width={27} height={27}/>
                    </div>
                    <input placeholder={t('form:placeholder_number')}
                           onChange={e => dispatch({type: formActions.NUMBER, payload: e.target.value})}
                           value={form.data.number}
                           required={true}/>
                </label>
                <label className={`${styles['form__input']} ${form.error.activity_type && 'input-form-error'}`}>
                    <div className={styles['form__icon']}>
                        <Image src='/svgs/instruments-icon.svg' width={27} height={27}/>
                    </div>
                    <input placeholder={t('form:placeholder_activity')}
                           onChange={e => dispatch({type: formActions.ACTIVITY_TYPE, payload: e.target.value})}
                           value={form.data.activity_type}/>
                </label>
                {main && (<label className={`${styles['form__input']} ${form.error.company_name && 'input-form-error'}`}>
                    <div className={styles['form__icon']}>
                        <Image src='/svgs/building-icon.svg' width={27} height={27}/>
                    </div>
                    <input placeholder={t('form:placeholder_company_name')}
                           onChange={e => dispatch({type: formActions.COMPANY_NAME, payload: e.target.value})}
                           value={form.data.company_name}/>
                </label>)}
                <textarea className={`${styles['form__textarea']} ${form.error.comment && 'input-form-error'}`} placeholder={t('form:placeholder_comment')}
                          onChange={e => dispatch({type: formActions.COMMENT, payload: e.target.value})}
                          value={form.data.comment}/>
                <Button text={buttonText || 'Заказать консультацию'}/>
                {main && (<p className={styles['agreement']}
                             dangerouslySetInnerHTML={{ __html: t('form:confidential', { interpolation: { escapeValue: false } }) }}
                          ></p>)}
            </form>
        </div>
    )
}

export default Form