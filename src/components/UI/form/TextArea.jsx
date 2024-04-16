import React from 'react'
import styles from '@/components/Form/form.module.css'

const TextArea = ({value, onChange, placeholder}) => {
    return (
        <textarea
                className={styles['form__textarea']}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
        />
    )
}

export default TextArea