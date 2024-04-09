'use client'
import React, { useState } from 'react'
import HeaderMain from './HeaderMain'
import HeaderTabs from './HeaderTabs'
import HeaderMode from './HeaderMode'

import styles from './Header.module.css'
import MobileNav from './MobileNav'

const Header = () => {
  
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <>
    <MobileNav mobileOpen={mobileOpen} />
    <header className={`${styles['header']} ${mobileOpen && styles['open']}`}>
      <HeaderMain mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
      <HeaderTabs />
      <HeaderMode />
    </header>
    </>
  )
}

export default Header