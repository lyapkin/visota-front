import React from 'react'

import styles from './buttons.module.css'

const Button = ({text, smallFont, action}) => {
    return (
        <button className={`${styles['button']} ${smallFont && styles['button--small-font']}`}
                onClick={action}>{text}</button>
    )
}

export default Button