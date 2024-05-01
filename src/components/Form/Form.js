'use client'
import Image from 'next/image'
import React, { useReducer, useState } from 'react'

import styles from './form.module.css'
import Button from '../UI/Buttons/Button'
import formReducer, { formActions, formInitState } from '@/reducers/formReducer'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'
import getCookie from '@/utils/getCookie'
import Spinner from '../Spinner/Spinner'

const Form = ({main, popup, buttonText, closePopup, type}) => {
    const router = useRouter()
    const [form, dispatch] = useReducer(formReducer, formInitState)

    const [loading, setLoading] = useState(false)

    const {t} = useTranslation()

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()

        const csrf = getCookie('csrftoken')

        const urlPath = type === 'offer' ? '/api/request/offer/' : '/api/request/consultation/'

        const url = new URL(process.env.BACK_URL + urlPath)
        try {

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
        } catch (e) {
            console.log(e)
        }
        setLoading(false)
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
            <form className={`${styles['form']} ${styles['relative']}`} onSubmit={handleSubmit}>
                <label className={`${styles['form__input']} ${form.error.name && 'input-form-error'}`}>
                    <div className={styles['form__icon']}>
                        <Image src='/svgs/user-icon.svg' width={27} height={27}/>
                    </div>
                    <input placeholder={t('form:placeholder_name')}
                           onChange={e => dispatch({type: formActions.NAME, payload: e.target.value})}
                           value={form.data.name}
                           required={true}
                           disabled={loading}/>
                </label>
                <label className={`${styles['form__input']} ${form.error.number && 'input-form-error'}`}>
                    <div className={styles['form__icon']}>
                        <Image src='/svgs/phone-icon.svg' width={27} height={27}/>
                    </div>
                    <input placeholder={t('form:placeholder_number')}
                           onChange={e => dispatch({type: formActions.NUMBER, payload: e.target.value})}
                           value={form.data.number}
                           required={true}
                           disabled={loading}/>
                </label>
                <label className={`${styles['form__input']} ${form.error.activity_type && 'input-form-error'}`}>
                    <div className={styles['form__icon']}>
                        <Image src='/svgs/instruments-icon.svg' width={27} height={27}/>
                    </div>
                    <input placeholder={t('form:placeholder_activity')}
                           onChange={e => dispatch({type: formActions.ACTIVITY_TYPE, payload: e.target.value})}
                           value={form.data.activity_type}
                           disabled={loading}/>
                </label>
                {(main || type === 'offer') && (<label className={`${styles['form__input']} ${form.error.company_name && 'input-form-error'}`}>
                    <div className={styles['form__icon']}>
                        <Image src='/svgs/building-icon.svg' width={27} height={27}/>
                    </div>
                    <input placeholder={t('form:placeholder_company_name')}
                           onChange={e => dispatch({type: formActions.COMPANY_NAME, payload: e.target.value})}
                           value={form.data.company_name}
                           disabled={loading}/>
                </label>)}
                <textarea className={`${styles['form__textarea']} ${form.error.comment && 'input-form-error'}`} placeholder={t('form:placeholder_comment')}
                          onChange={e => dispatch({type: formActions.COMMENT, payload: e.target.value})}
                          value={form.data.comment}
                          disabled={loading}/>
                <Button text={loading ? <Spinner size={20} color={'#fff'} /> : (buttonText || 'Заказать консультацию')}
                        disable={loading} />
                {main && (<p className={styles['agreement']}
                             dangerouslySetInnerHTML={{ __html: t('form:confidential', { interpolation: { escapeValue: false } }) }}
                          ></p>)}
                {/* {loading && <Spinner />} */}
            </form>
        </div>
    )
}

export default Form