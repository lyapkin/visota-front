'use client'
import React, { useEffect, useRef } from 'react'

import styles from './popup.module.css'

const Popup = ({children, close}) => {
    const ref = useRef(null)

    useEffect(() => {
        const handler = (e) => {
            if (!ref.current.children[0].contains(e.target)) {
                close()
            }
        }

        document.addEventListener('click', handler)

        return () => {
            document.removeEventListener('click', handler)
        }
    }, [])

    return (
        <div 
             className={styles['overlay']}
             ref={ref}>
            {/* <div className={styles['overlay__content']}> */}
            {children}
            <button className={styles['popup__close']}
                                onClick={close}><img src='/svgs/close-white-icon.svg' alt='закрыть иконка'/></button>
            {/* </div> */}
        </div>
    )
}

export default Popup