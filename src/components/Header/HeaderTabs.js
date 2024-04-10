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
            {data.map(c => (
                activeTab === c.id &&
                    <TabsContentBlock data={c.subs} closeTab={() => setActiveTab(null)} />
            ))}
            {/* {activeTab && <TabsContentBlock tabId={activeTab} />} */}
        </div>
    )
}

const data = [
    {
        id: 1,
        name: 'Хомуты',
        subs: [
            {
                id: 1,
                slug: 'nepovorotnyj',
                name: 'Хомут неповоротный',
                img: '/images/categories/povorotniy.jpg'
            },
            {
                id: 2,
                slug: 'povorotnyj',
                name: 'Хомут поворотный',
                img: '/images/categories/nepovorotniy.jpg'
            },
            {
                id: 3,
                slug: 'homut-stykovochnyj',
                name: 'Хомут стыковочный',
                img: '/images/categories/stik.jpg'
            },
            {
                id: 4,
                slug: 'homut-fiksiruyushij',
                name: 'Хомут фиксирующий',
                img: '/images/categories/fix.jpg'
            },
            {
                id: 5,
                slug: 'homut-balochnyj',
                name: 'Хомут балочный',
                img: '/images/categories/balochniy.jpg'
            },
            {
                id: 6,
                slug: 'homut-k-doske',
                name: 'Хомут к доске',
                img: '/images/categories/doske.png'
            },
            {
                id: 7,
                slug: 'bolt-t-obraznyj',
                name: 'Болт Т-образный',
                img: '/images/categories/bolt-t.png'
            },
            {
                id: 8,
                slug: 'homut-k-lestnice',
                name: 'Хомут к лестнице',
                img: '/images/categories/lestnice.png'
            },
        ]
    },
    {
        id: 2,
        name: 'Строительные леса',
        subs: [
            {
                id: 1,
                slug: 'klinovye-lesa',
                name: 'Клиновые леса',
                img: '/images/categories/klinov-les.png'
            },
            {
                id: 2,
                slug: 'chashechnye-lesa',
                name: 'Чашечные леса',
                img: '/images/categories/chushech-les.png'
            },
            {
                id: 3,
                slug: 'homutovye-lesa',
                name: 'Хомутовые леса',
                img: '/images/categories/homut-les.png'
            },
            {
                id: 4,
                slug: 'komplektuyushie-k-stroitelnym-lesam',
                name: 'Комплектующие к строительным лесам',
                img: '/images/categories/complect-stroit-les.png'
            }
        ]
    },{
        id: 3,
        name: 'Комлектующие к опалубке',
        subs: [
            {
                id: 1,
                slug: 'gajka-vaterstop',
                name: 'Гайка ватерстоп',
                img: '/images/categories/gajka-vaterstop.jpg'
            },
            {
                id: 2,
                slug: 'zamok-klinovoj-ocinkovannyj-27-kg',
                name: 'Замок клиновой оцинкованный 2,7 кг',
                img: '/images/categories/zamok-klin-ocink.jpg'
            },
            {
                id: 3,
                slug: 'zamok-bfd-ocinkovannyj-39-kg',
                name: 'Замок BFD оцинкованный 3,9 кг',
                img: '/images/categories/zamok-bfd.jpg'
            },
            {
                id: 4,
                slug: 'gajka-dlya-vintovoj-opory',
                name: 'Гайка для винтовой опоры',
                img: '/images/categories/gaik-vint-opor.jpg'
            },
            {
                id: 5,
                slug: 'gajka-styazhnaya-trehrozhkovaya-ocinkovannaya-100-mm',
                name: 'Гайка стяжная трехрожковая оцинкованная 100 мм',
                img: '/images/categories/gaika-styazh.jpg'
            },
            {
                id: 6,
                slug: 'gajka-styazhnaya-dvuhrozhkovaya-ocinkovannaya-90mm',
                name: 'Гайка стяжная двухрожковая оцинкованная 90мм',
                img: '/images/categories/gaika-styazh-dvuh.jpg'
            },
            {
                id: 7,
                slug: 'gajka-sharnirnaya',
                name: 'Гайка шарнирная',
                img: '/images/categories/gaika-sharnir.jpeg'
            },
            {
                id: 8,
                slug: 'vint-styazhnoj-1-m-08-m-15-m-2m',
                name: 'Винт стяжной 1 м, 0,8 м, 1,5 м, 2м',
                img: '/images/categories/styazhnoj-vint.png'
            },
            {
                id: 9,
                slug: 'gajka-malaya-barashkovayakrylchataya',
                name: 'Гайка малая барашковая/крыльчатая',
                img: '/images/categories/gajka-barashkovaya.png'
            },
            {
                id: 10,
                slug: 'fiksatory-armatury',
                name: 'Фиксаторы арматуры',
                img: '/images/categories/fiksator-armatury-zvezdochka.png'
            },
        ]
    },{
        id: 4,
        name: 'Трубы ВГП',
        subs: [
            {
                id: 1,
                slug: 'truby-vgp',
                name: 'Трубы ВГП',
                img: '/images/categories/truba-vgp.jpg'
            }
        ]
    },{
        id: 5,
        name: 'Лестницы и стремянки',
        subs: [
            {
                id: 1,
                slug: 'lestnicy',
                name: 'Лестницы',
                img: '/images/categories/lestnica.png'
            }
        ]
    },
]

export default HeaderTabs