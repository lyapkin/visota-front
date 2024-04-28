import React, { useReducer } from 'react'
import TextInput from '../UI/form/TextInput'
import TextArea from '../UI/form/TextArea'
import Button from '../UI/Buttons/Button'

import styles from '@/components/Form/form.module.css'
import { useRouter } from 'next/navigation'
import getPriceReducer, { getPriceActions, getPriceInitState } from '@/reducers/getPriceReducer'
import getCookie from '@/utils/getCookie'
import { useTranslation } from 'react-i18next'

const GetPriceForm = ({product}) => {
    const router = useRouter()
    const [form, dispatch] = useReducer(getPriceReducer, getPriceInitState)
    const {t} = useTranslation()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const csrf = getCookie('csrftoken')

        const data = {
            ...form.data,
            product: product.id
        }

        const url = new URL(process.env.BACK_URL + `/api/request/price/`)
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrf
            },
            mode: 'same-origin',
            body: JSON.stringify(data)
        })
        if (response.status === 400) {
            const result = await response.json()
            dispatch({type: getPriceActions.ERROR, payload: result})
        } else if (response.ok) {
            router.push('/success')
            dispatch({type: getPriceActions.RESET})
        }
    }

    return (
        <>
            <div className={styles['get-price-form-wrapper']}>
                <div className={styles['head']}>
                    <h5>{product.name}</h5>
                </div>
                <form className={`${styles['get-price-form']}`} onSubmit={handleSubmit}>
                    <TextInput 
                            value={form.data.name}
                            error={form.error.name}
                            onChange={(e) => dispatch({type: getPriceActions.NAME, payload: e.target.value})} 
                            placeholder={t('form:placeholder_name')}
                            required={true}
                            img={{url: '/svgs/user-icon.svg', width: 27, height: 27}}
                            type={'text'}
                    />
                    <TextInput 
                            value={form.data.email}
                            error={form.error.email}
                            onChange={(e) => dispatch({type: getPriceActions.EMAIL, payload: e.target.value})} 
                            placeholder={t('form:placeholder_email')}
                            required={true}
                            img={{url: '/svgs/email-no-bg-icon.svg', width: 27, height: 27}}
                            type={'email'}
                    />
                    <TextInput 
                            value={form.data.number}
                            error={form.error.number}
                            onChange={(e) => dispatch({type: getPriceActions.NUMBER, payload: e.target.value})} 
                            placeholder={t('form:placeholder_number')}
                            required={true}
                            img={{url: '/svgs/phone-icon.svg', width: 27, height: 27}}
                            type={'tel'}
                    />
                    <TextArea
                            value={form.data.comment}
                            error={form.error.comment}
                            onChange={(e) => dispatch({type: getPriceActions.COMMENT, payload: e.target.value})} 
                            placeholder={t('form:placeholder_comment')}
                    />
                    <Button
                            text={t('catalog:get_price')}
                            action={() => {}}
                    />
                </form>
            </div>
        </>
    )
}

export default GetPriceForm