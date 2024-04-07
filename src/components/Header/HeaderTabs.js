'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import styles from './Header.module.css'
import TabsContentBlock from './TabsContentBlock'
import CartTab from './CartTab'

const HeaderTabs = () => {
    const [activeTab, setActiveTab] = useState(null)

    const displayList = data.map(item => (
        <li key={item.id} className={activeTab === item.id ? styles['header-tabs__tab_active'] : null}>
            <button onClick={() => setActiveTab(prev => prev === item.id ? null : item.id)} >
                {item.name}
            </button>
        </li>
    ))

    return (
        <div className={styles['header-tabs']}>
            <div className={`${styles['header-tabs-flex']} container`}>
                <ul className={styles['header-tabs__list']}>
                    {displayList}
                </ul>
                
                <CartTab />
            </div>
            {activeTab && <TabsContentBlock tabId={activeTab} />}
        </div>
    )
}

const data = [
    {
        id: 1,
        name: 'Хомуты'
    },
    {
        id: 2,
        name: 'Строительные леса'
    },{
        id: 3,
        name: 'Комлектующие к опалубке'
    },{
        id: 4,
        name: 'Трубы ВГП'
    },{
        id: 5,
        name: 'Лестницы и стремянки'
    },
]

export default HeaderTabs