'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

import styles from './Header.module.css'
import TabsContentBlock from './TabsContentBlock'
import CartTab from './CartTab'
import i18n from 'i18next'
import useTabsData from '@/hooks/useTabsData'

const HeaderTabs = () => {
    const [activeTab, setActiveTab] = useState(null)

    const ref = useRef(null)

    const data = useTabsData()

    useEffect(() => {
        const handler = (e) => {
            if (!ref.current.contains(e.target)) {
                setActiveTab(null)
            }
        }

        document.addEventListener('click', handler)

        return () => {
            document.removeEventListener('click', handler)
        }
    })

    const displayList = data.map(item => (
        <li key={item.id} className={activeTab === item.id ? styles['header-tabs__tab_active'] : null}>
            <button onClick={() => setActiveTab(prev => prev === item.id ? null : item.id)} >
                {item.name}
            </button>
        </li>
    ))

    return (
        <div className={styles['header-tabs']} >
            <div className={`${styles['header-tabs-flex']} container`} >
                <ul className={styles['header-tabs__list']} ref={ref}>
                    {displayList}
                </ul>
                
                <CartTab />
            </div>
            {data.map(c => (
                activeTab === c.id &&
                    <TabsContentBlock data={c.subs} closeTab={() => setActiveTab(null)} key={c.id} />
            ))}
            {/* {activeTab && <TabsContentBlock tabId={activeTab} />} */}
        </div>
    )
}



export default HeaderTabs