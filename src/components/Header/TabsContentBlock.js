import React from 'react'

import styles from './Header.module.css'
import Link from 'next/link'

const TabsContentBlock = ({data, closeTab}) => {
    

    return (
        <div className={styles['header-tabs__tabs-content']}>
            <div className={`${styles['header-tabs__tabs-content-flex']} container`}>
                {data.map(item => (
                    
                    <Link href={`/catalog?sub=${item.slug}`} 
                          key={item.id}
                          onClick={closeTab}>
                        <p>{item.name}</p>
                        <img src={item.img} />
                    </Link>
                ))}
            </div>
        </div>
    )
}



export default TabsContentBlock