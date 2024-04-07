import React from 'react'
import HeaderMain from './HeaderMain'
import HeaderTabs from './HeaderTabs'
import HeaderMode from './HeaderMode'

import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles['header']}>
      <HeaderMain />
      <HeaderTabs />
      <HeaderMode />
    </header>
  )
}

export default Header