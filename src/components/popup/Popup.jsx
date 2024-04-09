import React from 'react'

import styles from './popup.module.css'

const Popup = ({children, close}) => {
    return (
        <div onClick={close}
             className={styles['overlay']}>
            {children}
        </div>
    )
}

export default Popup