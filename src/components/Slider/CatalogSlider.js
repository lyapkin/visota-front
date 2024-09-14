"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./slider.module.css";
import LeftButton from "../UI/Buttons/LeftButton";
import RightButton from "../UI/Buttons/RightButton";
import useCatalogData from "@/hooks/useCatalogData";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

// const CatalogSlider = () => {
//     const [page, setPage] = useState(1)
//     const [width, setWidth] = useState(null)

//     const swiperRef = useRef(null)

//     const catalog = useCatalogData()

//     const {t} = useTranslation()

//     useEffect(() => {
//         const width = document.documentElement.clientWidth
//         setWidth(width)
//     }, [])
//     const slidesCount = width <= 768 ? 1 : width <= 992 ? 2 : 3

//     const handleSlideSwitch = (e) => {
//         if (e.currentTarget.dataset?.type == 'left-button') {
//             setPage(page => {
//                 if(page <= 1) {
//                     return 1
//                 }
//                 swiperRef.current.slidePrev()
//                 return page - 1
//             })
//         } else if (e.currentTarget.dataset?.type == 'right-button') {
//             setPage(page => {
//                 if(catalog.length/page <= slidesCount) {
//                     return page
//                 }
//                 swiperRef.current.slideNext()
//                 return page + 1
//             })
//         }
//     }

//     return (
//         <div className={styles['caltalog-slider']}>
//             <Swiper
//                 onSwiper={swiper => {
//                     swiperRef.current = swiper
//                 }}
//                 spaceBetween={20}
//                 // slidesPerView={3}
//                 // slidesPerGroup={3}
//                 speed={500}
//                 breakpoints={{
//                     992: {
//                       width: 992,
//                       slidesPerView: 2,
//                       slidesPerGroup: 2,
//                     },
//                     768: {
//                       width: 768,
//                       slidesPerView: 1,
//                       slidesPerGroup: 1
//                     },
//                 }}
//                 navigation
//                 navigation-next-el=".catalog-swiper-slider-prev"
//                 navigation-prev-el=".catalog-swiper-slider-next"
//                 pagination-clickable="true"
//                 pagination-dynamic-bullets="true"
//             >
//                 {catalog.map(item => (
//                     <SwiperSlide key={item.id}>
//                     <div className={styles['catalog-slider__slide']}
//                         //  style={{translate: `-${106 * catalogIndex}%`}}
//                     >
//                         <div className={styles['slide__text']}>
//                             <div>
//                                 <h4>{item.title}</h4>
//                                 <ul>
//                                     {item.categories.map(cat => (
//                                         <li key={cat}><Link href={cat.link}>{cat.name}</Link></li>
//                                     ))}
//                                 </ul>
//                             </div>
//                             <Link className={styles['catalog-slider__link']} href={item.link}>
//                                 {t('home:catalog.button')}
//                                 <span className={styles['catalog-slider__link-arrow']}></span>
//                             </Link>
//                         </div>
//                         <div className={styles['catalog-slider__pic']}>
//                             <img src={item.img} />
//                         </div>
//                     </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//             <div className={styles['catalog-slider__buttons']}>
//                 <LeftButton action={handleSlideSwitch} disabled={page <= 1} className={'catalog-swiper-slider-prev'} />
//                 <RightButton action={handleSlideSwitch} disabled={catalog.length/page <= slidesCount} className={'catalog-swiper-slider-next'} />
//             </div>
//         </div>
//         // <div className={styles['caltalog-slider']}>
//         //     <div className={styles['catalog-slider__window']}>
//         //         {catalog.map(item => (
//         //             <div key={item.id} className={styles['catalog-slider__slide']}
//         //                  style={{translate: `-${106 * catalogIndex}%`}}
//         //             >
//         //                 <div className={styles['slide__text']}>
//         //                     <div>
//         //                         <h4>{item.title}</h4>
//         //                         <ul>
//         //                             {item.categories.map(cat => (
//         //                                 <li key={cat}><Link href={cat.link}>{cat.name}</Link></li>
//         //                             ))}
//         //                         </ul>
//         //                     </div>
//         //                     <Link className={styles['catalog-slider__link']} href={item.link}>
//         //                         {t('home:catalog.button')}
//         //                         <span className={styles['catalog-slider__link-arrow']}></span>
//         //                     </Link>
//         //                 </div>
//         //                 <div className={styles['catalog-slider__pic']}>
//         //                     <img src={item.img} />
//         //                 </div>
//         //             </div>
//         //         ))}
//         //     </div>
//         //     <div className={styles['catalog-slider__buttons']}>
//         //         <LeftButton action={handleSlideSwitch} disabled={catalogIndex <= 0}/>
//         //         <RightButton action={handleSlideSwitch} disabled={catalogIndex >= catalog.length-1-(slidesCount - 1)}/>
//         //     </div>
//         // </div>
//     )
// }

const CatalogSlider = () => {
  const [catalogIndex, setCatalogIndex] = useState(0);
  const [width, setWidth] = useState(null);

  const ref = useRef(null);

  const catalog = useCatalogData();

  const { t } = useTranslation();

  useEffect(() => {
    const width = document.documentElement.clientWidth;
    setWidth(width);
  }, []);
  const slidesCount = width <= 768 ? 1 : width <= 992 ? 2 : 3;

  const handleSlideSwitch = (e) => {
    if (e.currentTarget.dataset?.type == "dot") {
      setCatalogIndex(Number(e.currentTarget.dataset?.index));
    } else if (e.currentTarget.dataset?.type == "left-button") {
      setCatalogIndex((curIndex) => {
        if (curIndex <= 0) {
          return 0;
        }
        ref.current.slickPrev();
        return curIndex - 1;
      });
    } else if (e.currentTarget.dataset?.type == "right-button") {
      setCatalogIndex((curIndex) => {
        if (curIndex >= catalog.length - 1 - (slidesCount - 1)) {
          return catalog.length - 1;
        }
        ref.current.slickNext();
        return curIndex + 1;
      });
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: width ? slidesCount : 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (c, n) => setCatalogIndex(n),
  };

  return (
    <div className={`${styles["caltalog-slider"]} home-catalog-slider-slick`}>
      <Slider {...settings} ref={ref}>
        {catalog.map((item) => (
          <div
            key={item.id}
            className={styles["catalog-slider__slide"]}
            //  style={{translate: `-${106 * catalogIndex}%`}}
          >
            <div className={styles["slide__text"]}>
              <div>
                <h4>{item.title}</h4>
                <ul>
                  {item.categories.map((cat) => (
                    <li key={cat}>
                      <Link href={cat.link}>{cat.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Link className={styles["catalog-slider__link"]} href={item.link}>
                {t("home:catalog.button")}
                <span className={styles["catalog-slider__link-arrow"]}></span>
              </Link>
            </div>
            <div className={styles["catalog-slider__pic"]}>
              <img src={item.img} />
            </div>
          </div>
        ))}
      </Slider>
      <div className={styles["catalog-slider__buttons"]}>
        <LeftButton action={handleSlideSwitch} disabled={catalogIndex <= 0} />
        <RightButton
          action={handleSlideSwitch}
          disabled={catalogIndex >= catalog.length - 1 - (slidesCount - 1)}
        />
      </div>
    </div>
  );
};

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

export default CatalogSlider;
