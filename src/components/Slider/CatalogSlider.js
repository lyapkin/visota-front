'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import styles from './slider.module.css'
import LeftButton from '../UI/Buttons/LeftButton'
import RightButton from '../UI/Buttons/RightButton'
import useCatalogData from '@/hooks/useCatalogData'
import { useTranslation } from 'react-i18next'

const CatalogSlider = () => {
    const [catalogIndex, setCatalogIndex] = useState(0)
    const [width, setWidth] = useState(null)

    const catalog = useCatalogData()

    const {t} = useTranslation()


    useEffect(() => {
        const width = document.documentElement.clientWidth
        setWidth(width)
    }, [])
    const slidesCount = width <= 768 ? 1 : width <= 992 ? 2 : 3

    const handleSlideSwitch = (e) => {
        if (e.currentTarget.dataset?.type == 'dot') {
            setCatalogIndex(Number(e.currentTarget.dataset?.index))
        } else if (e.currentTarget.dataset?.type == 'left-button') {
            setCatalogIndex(curIndex => {
                if(curIndex <= 0) {
                    return 0
                }
                return curIndex - 1
            })
        } else if (e.currentTarget.dataset?.type == 'right-button') {
            setCatalogIndex(curIndex => {
                if(curIndex >= catalog.length - 1 - (slidesCount - 1)) {
                    return catalog.length - 1
                }
                return curIndex + 1
            })
        }
    }

    return (
        <div className={styles['caltalog-slider']}>
            <div className={styles['catalog-slider__window']}>
                {catalog.map(item => (
                    <div key={item.id} className={styles['catalog-slider__slide']}
                         style={{translate: `-${106 * catalogIndex}%`}}
                    >
                        <div className={styles['slide__text']}>
                            <div>
                                <h4>{item.title}</h4>
                                <ul>
                                    {item.categories.map(cat => (
                                        <li key={cat}><Link href={cat.link}>{cat.name}</Link></li>
                                    ))}
                                </ul>
                            </div>
                            <Link className={styles['catalog-slider__link']} href={item.link}>
                                {t('home:catalog.button')}
                                <span className={styles['catalog-slider__link-arrow']}></span>
                            </Link>
                        </div>
                        <div className={styles['catalog-slider__pic']}>
                            <img src={item.img} />
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles['catalog-slider__buttons']}>
                <LeftButton action={handleSlideSwitch} disabled={catalogIndex <= 0}/>
                <RightButton action={handleSlideSwitch} disabled={catalogIndex >= catalog.length-1-(slidesCount - 1)}/>
            </div>
            {/* <div className={styles['catalog-slider__dots-controll']}>
                {catalog.slice(0, Math.ceil(catalog.length/3)).map((_, index) => (
                    <button key={index} className={`${styles['catalog-slider__dot']} ${index == catalogIndex && styles['current']}`}
                            data-type='dot' 
                            data-index={index}
                            onClick={handleSlideSwitch}><span></span></button>
                ))}
            </div> */}
        </div>
    )
}

// const catalog = [
//     {
//         id: 1,
//         title: 'Строительные леса',
//         img: '/images/catalog/slider-equip-construct-slider.png',
//         link: '/catalog?sub=klinovye-lesa&sub=chashechnye-lesa&sub=homutovye-lesa&sub=komplektuyushie-k-stroitelnym-lesam',
//         categories: [
//             {
//                 id: 1,
//                 name: 'Клиновые леса',
//                 link: '/catalog?sub=klinovye-lesa'
//             },
//             {
//                 id: 2,
//                 name: 'Чашечные леса',
//                 link: '/catalog?sub=chashechnye-lesa'
//             },
//             {
//                 id: 3,
//                 name: 'Хомутовые леса',
//                 link: '/catalog?sub=homutovye-lesa'
//             },
//             {
//                 id: 4,
//                 name: 'Комплектующие к строительным лесам',
//                 link: '/catalog?sub=komplektuyushie-k-stroitelnym-lesam'
//             }
//         ]
//     },
//     {
//         id: 2,
//         title: 'Хомуты',
//         img: '/images/catalog/slider-chomut-equip-construct.png',
//         link: '/catalog?sub=nepovorotnyj&sub=povorotnyj&sub=homut-stykovochnyj&sub=homut-fiksiruyushij&sub=homut-balochnyj&sub=homut-k-doske&sub=bolt-t-obraznyj&sub=homut-k-lestnice',
//         categories: [
//             {
//                 id: 1,
//                 name: 'Хомут неповоротный',
//                 link: '/catalog?sub=nepovorotnyj'
//             },
//             {
//                 id: 2,
//                 name: 'Хомут поворотный',
//                 link: '/catalog?sub=povorotnyj'
//             },
//             {
//                 id: 3,
//                 name: 'Хомут стыковочный',
//                 link: '/catalog?sub=homut-stykovochnyj'
//             },
//             {
//                 id: 4,
//                 name: 'Хомут фиксирующий',
//                 link: '/catalog?sub=homut-fiksiruyushij'
//             },
//             {
//                 id: 5,
//                 name: 'Хомут балочный',
//                 link: '/catalog?sub=homut-balochnyj'
//             },
//             {
//                 id: 6,
//                 name: 'Хомут к доске',
//                 link: '/catalog?sub=homut-k-doske'
//             },
//             {
//                 id: 7,
//                 name: 'Болт Т-образный',
//                 link: '/catalog?sub=bolt-t-obraznyj'
//             },
//             {
//                 id: 8,
//                 name: 'Хомут к лестнице',
//                 link: '/catalog?sub=homut-k-lestnice'
//             }
//         ]
//     },
//     {
//         id: 3,
//         title: 'Комплектующие к опалубке',
//         img: '/images/catalog/slider-complect-opalubka.png',
//         link: '/catalog?sub=gajka-vaterstop&sub=zamok-klinovoj&sub=zamok-bfd-ocinkovannyj&sub=gajka-dlya-vintovoj-opory&sub=gajka-styazhnaya-trehrozhkovaya-ocinkovannaya&sub=gajka-styazhnaya-dvuhrozhkovaya-ocinkovannaya-90mm&sub=gajka-sharnirnaya&sub=vint-styazhnoj-1-m-08-m-15-m-2m&sub=gajka-malaya-barashkovayakrylchataya&sub=fiksatory-armatury',
//         categories: [
//             {
//                 id: 1,
//                 name: 'Гайка ватерстоп',
//                 link: '/catalog?sub=gajka-vaterstop'
//             },
//             {
//                 id: 2,
//                 name: 'Замок клиновой',
//                 link: '/catalog?sub=zamok-klinovoj'
//             },
//             {
//                 id: 3,
//                 name: 'Замок BFD',
//                 link: '/catalog?sub=zamok-bfd-ocinkovannyj'
//             },
//             {
//                 id: 4,
//                 name: 'Гайка для винтовой опоры',
//                 link: '/catalog?sub=gajka-dlya-vintovoj-opory'
//             },
//             {
//                 id: 5,
//                 name: 'Гайка стяжная трехрожковая',
//                 link: '/catalog?sub=gajka-styazhnaya-trehrozhkovaya-ocinkovannaya'
//             },
//             {
//                 id: 6,
//                 name: 'Гайка стяжная двухрожковая',
//                 link: '/catalog?sub=gajka-styazhnaya-dvuhrozhkovaya-ocinkovannaya-90mm'
//             },
//             {
//                 id: 7,
//                 name: 'Гайка шарнирная',
//                 link: '/catalog?sub=gajka-sharnirnaya'
//             },
//             // {
//             //     id: 8,
//             //     name: 'Винт стяжной',
//             //     link: '/catalog?sub=vint-styazhnoj-1-m-08-m-15-m-2m'
//             // },
//             // {
//             //     id: 9,
//             //     name: 'Гайка малая брашковая/крыльчатая',
//             //     link: '/catalog?sub=gajka-malaya-barashkovayakrylchataya'
//             // },
//             // {
//             //     id: 10,
//             //     name: 'Фиксаторы арматуры',
//             //     link: '/catalog?sub=fiksatory-armatury'
//             // },
//         ]
//     },
//     {
//         id: 4,
//         title: 'Трубы ВГП',
//         img: '/images/catalog/truba.png',
//         link: '/catalog?sub=truby-vgp',
//         categories: [
//             {
//                 id: 1,
//                 name: 'Трубы ВГП',
//                 link: '/catalog?sub=truby-vgp'
//             },
//         ]
//     },
//     {
//         id: 5,
//         title: 'Лестницы и стремянки',
//         img: '/images/catalog/lestnica.png',
//         link: '/catalog?sub=lestnicy',
//         categories: [
//             {
//                 id: 1,
//                 name: 'Клиновые леса',
//                 link: '/catalog?sub=lestnicy'
//             },
//         ]
//     },
//     // {
//     //     id: 2,
//     //     title: 'Хомуты для строительных лесов',
//     //     img: '/images/catalog/slider-chomut-equip-construct.png',
//     //     categories: ['Хомуты и детали для крепежа лесов']
//     // },
//     // {
//     //     id: 3,
//     //     title: 'Комплектующие для оплубки',
//     //     img: '/images/catalog/slider-complect-opalubka.png',
//     //     categories: ['Опалубка', 'Комплектующие к опалубке', 'Фиксаторы арматуры', 'Вингтовые опоры']
//     // },
//     // {
//     //     id: 4,
//     //     title: 'Комплектующие длястроительных лесов',
//     //     img: '/images/catalog/slider-equip-construct-slider.png',
//     //     categories: ['Чашечные леса', 'Клиновые леса', 'Рамные леса', 'Винтовые домкраты', 'Фермы', 'Комплектующие к хомутовым лесам']
//     // },
// ]

export default CatalogSlider