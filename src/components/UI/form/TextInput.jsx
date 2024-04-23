import React from 'react'
import Image from 'next/image'
import styles from '@/components/Form/form.module.css'

const TextInput = ({value, error, onChange, placeholder, required=false, img, type='text'}) => {
    return (
        <label className={`${styles['form__input']} ${error && 'input-form-error'}`}>
            <div className={styles['form__icon']}>
                <Image src={img.url} width={img.width} height={img.height}/>
            </div>
            <input 
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    type={type}
                    required={required}
            />
        </label>
    )
}

export default TextInput