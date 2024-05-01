import React from 'react'

import styles from './buttons.module.css'

const Button = ({text, smallFont, action, disable}) => {
    return (
        <button className={`${styles['button']} ${smallFont && styles['button--small-font']}`}
                disabled={disable}
                onClick={action}>{text}</button>
    )
}

export default Button