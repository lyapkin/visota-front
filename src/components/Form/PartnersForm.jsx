import React, { useReducer } from 'react'
import TextInput from '../UI/form/TextInput'
import TextArea from '../UI/form/TextArea'
import Button from '../UI/Buttons/Button'

import styles from '@/components/Form/form.module.css'
import { useRouter } from 'next/navigation'
import partnersReducer, { partnersActions, partnersInitState } from '@/reducers/partnersReducer'
import { useTranslation } from 'react-i18next'
import getCookie from '@/utils/getCookie'

const PartnersForm = () => {
    const router = useRouter()
    const [form, dispatch] = useReducer(partnersReducer, partnersInitState)
    const {t} = useTranslation()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const csrf = getCookie('csrftoken')

        const data = {
            ...form.data
        }

        const url = new URL(process.env.BACK_URL + `/api/request/samples/`)
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
            dispatch({type: partnersActions.ERROR, payload: result})
        } else if (response.ok) {
            router.push('/success')
            dispatch({type: partnersActions.RESET})
        }
    }

    return (
        <>
            <div className={styles['partners-form-wrapper']}>
                {/* <div className={styles['head']}>
                    <h5></h5>
                </div> */}
                <form className={`${styles['partners-form']}`} onSubmit={handleSubmit}>
                    <TextInput 
                            value={form.data.name}
                            error={form.error.name}
                            onChange={(e) => dispatch({type: partnersActions.NAME, payload: e.target.value})} 
                            placeholder={t('form:placeholder_name')}
                            required={true}
                            img={{url: '/svgs/user-icon.svg', width: 27, height: 27}}
                            type={'text'}
                    />
                    <TextInput 
                            value={form.data.email}
                            error={form.error.email}
                            onChange={(e) => dispatch({type: partnersActions.EMAIL, payload: e.target.value})} 
                            placeholder={t('form:placeholder_email')}
                            required={true}
                            img={{url: '/svgs/email-no-bg-icon.svg', width: 27, height: 27}}
                            type={'email'}
                    />
                    <TextInput 
                            value={form.data.number}
                            error={form.error.number}
                            onChange={(e) => dispatch({type: partnersActions.NUMBER, payload: e.target.value})} 
                            placeholder={t('form:placeholder_number')}
                            required={true}
                            img={{url: '/svgs/phone-icon.svg', width: 27, height: 27}}
                            type={'tel'}
                    />
                    <TextInput
                            value={form.data.entity}
                            error={form.error.entity}
                            onChange={(e) => dispatch({type: partnersActions.ENTITY, payload: e.target.value})} 
                            placeholder={t('form:placeholder_entity')}
                            required={true}
                            img={{url: '/svgs/building-icon.svg', width: 27, height: 27}}
                            type={'text'}
                    />
                    <TextInput
                            value={form.data.card}
                            error={form.error.card}
                            onChange={(e) => dispatch({type: partnersActions.CARD, payload: e.target.value})} 
                            placeholder={t('form:placeholder_card')}
                            required={true}
                            img={{url: '/svgs/card-icon.svg', width: 27, height: 27}}
                            type={'text'}
                    />
                    <Button
                            text={t('form:get_example')}
                            action={() => {}}
                    />
                </form>
            </div>
        </>
    )
}

export default PartnersForm