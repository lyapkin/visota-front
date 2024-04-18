import { useMemo } from "react"

const { useTranslation } = require("react-i18next")

const useCatalogData = () => {
    const { t } = useTranslation()

    const data = useMemo(() => (
        [
            {
                id: 1,
                title: t('common:stroyles'),
                img: '/images/catalog/slider-equip-construct-slider.png',
                link: '/catalog?sub=klinovye-lesa&sub=chashechnye-lesa&sub=homutovye-lesa&sub=komplektuyushie-k-stroitelnym-lesam',
                categories: [
                    {
                        id: 1,
                        name: t('common:klin'),
                        link: '/catalog?sub=klinovye-lesa'
                    },
                    {
                        id: 2,
                        name: t('common:chash'),
                        link: '/catalog?sub=chashechnye-lesa'
                    },
                    {
                        id: 3,
                        name: t('common:homut'),
                        link: '/catalog?sub=homutovye-lesa'
                    },
                    {
                        id: 4,
                        name: t('common:complect'),
                        link: '/catalog?sub=komplektuyushie-k-stroitelnym-lesam'
                    }
                ]
            },
            {
                id: 2,
                title: t('common:homuti'),
                img: '/images/catalog/slider-chomut-equip-construct.png',
                link: '/catalog?sub=nepovorotnyj&sub=povorotnyj&sub=homut-stykovochnyj&sub=homut-fiksiruyushij&sub=homut-balochnyj&sub=homut-k-doske&sub=bolt-t-obraznyj&sub=homut-k-lestnice',
                categories: [
                    {
                        id: 1,
                        name: t('common:nepovorot'),
                        link: '/catalog?sub=nepovorotnyj'
                    },
                    {
                        id: 2,
                        name: t('common:povorot'),
                        link: '/catalog?sub=povorotnyj'
                    },
                    {
                        id: 3,
                        name: t('common:stykov'),
                        link: '/catalog?sub=homut-stykovochnyj'
                    },
                    {
                        id: 4,
                        name: t('common:fix'),
                        link: '/catalog?sub=homut-fiksiruyushij'
                    },
                    {
                        id: 5,
                        name: t('common:bal'),
                        link: '/catalog?sub=homut-balochnyj'
                    },
                    {
                        id: 6,
                        name: t('common:dosk'),
                        link: '/catalog?sub=homut-k-doske'
                    },
                    {
                        id: 7,
                        name: t('common:bolt'),
                        link: '/catalog?sub=bolt-t-obraznyj'
                    },
                    {
                        id: 8,
                        name: t('common:lestnic'),
                        link: '/catalog?sub=homut-k-lestnice'
                    }
                ]
            },
            {
                id: 3,
                title: t('common:opalub_complect'),
                img: '/images/catalog/slider-complect-opalubka.png',
                link: '/catalog?sub=gajka-vaterstop&sub=zamok-klinovoj&sub=zamok-bfd-ocinkovannyj&sub=gajka-dlya-vintovoj-opory&sub=gajka-styazhnaya-trehrozhkovaya-ocinkovannaya&sub=gajka-styazhnaya-dvuhrozhkovaya-ocinkovannaya-90mm&sub=gajka-sharnirnaya&sub=vint-styazhnoj-1-m-08-m-15-m-2m&sub=gajka-malaya-barashkovayakrylchataya&sub=fiksatory-armatury',
                categories: [
                    {
                        id: 1,
                        name: t('common:waterstop'),
                        link: '/catalog?sub=gajka-vaterstop'
                    },
                    {
                        id: 2,
                        name: t('common:klin_zamok'),
                        link: '/catalog?sub=zamok-klinovoj'
                    },
                    {
                        id: 3,
                        name: t('common:bfd_zamok'),
                        link: '/catalog?sub=zamok-bfd-ocinkovannyj'
                    },
                    {
                        id: 4,
                        name: t('common:gaika_vint_opor'),
                        link: '/catalog?sub=gajka-dlya-vintovoj-opory'
                    },
                    {
                        id: 5,
                        name: t('common:gaika_stayzh_treh'),
                        link: '/catalog?sub=gajka-styazhnaya-trehrozhkovaya-ocinkovannaya'
                    },
                    {
                        id: 6,
                        name: t('common:gaika_staych_dvuh'),
                        link: '/catalog?sub=gajka-styazhnaya-dvuhrozhkovaya-ocinkovannaya-90mm'
                    },
                    {
                        id: 7,
                        name: t('common:gaika_sharnir'),
                        link: '/catalog?sub=gajka-sharnirnaya'
                    },
                    // {
                    //     id: 8,
                    //     name: 'Винт стяжной',
                    //     link: '/catalog?sub=vint-styazhnoj-1-m-08-m-15-m-2m'
                    // },
                    // {
                    //     id: 9,
                    //     name: 'Гайка малая брашковая/крыльчатая',
                    //     link: '/catalog?sub=gajka-malaya-barashkovayakrylchataya'
                    // },
                    // {
                    //     id: 10,
                    //     name: 'Фиксаторы арматуры',
                    //     link: '/catalog?sub=fiksatory-armatury'
                    // },
                ]
            },
            {
                id: 4,
                title: t('common:trubi_vgp'),
                img: '/images/catalog/truba.png',
                link: '/catalog?sub=truby-vgp',
                categories: [
                    {
                        id: 1,
                        name: t('common:trubi_vgp'),
                        link: '/catalog?sub=truby-vgp'
                    },
                ]
            },
            {
                id: 5,
                title: t('common:opalubka_perkrit'),
                img: '/images/catalog/opalub_perek.png',
                link: '/catalog?sub=opalubka-perekrytij',
                categories: [
                    {
                        id: 1,
                        name: t('common:opalubka_perkrit'),
                        link: '/catalog?sub=opalubka-perekrytij'
                    },
                ]
            },
        ]
    ))

    return data
}

export default useCatalogData