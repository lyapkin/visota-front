import React from 'react'
import styles from '@/components/Form/form.module.css'

const TextArea = ({value, error, onChange, placeholder}) => {
    return (
        <textarea
                className={`${styles['form__textarea']} ${error && 'input-form-error'}`}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
        />
    )
}

export default TextArea