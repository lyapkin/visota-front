'use client'
import React, { useState } from 'react'

import styles from './Header.module.css'

const Languages = () => {
    const [curLang, setCurLang] = useState(data[0])

    return (
        <div className={`${styles['header-mode__languages']} ${styles['languages']}`}>
            {data.map(lang => (
                <button key={lang}
                        className={curLang === lang ? styles['lang-current'] : null}
                        onClick={() => setCurLang(lang)}
                >{lang}</button>
            ))}
        </div>
    )
}

const data = [
    'RU',
    'ENG',
    'TUR',
    'CHINA'
]

export default Languages