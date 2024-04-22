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
                link: '/catalog?sub=klinovye-lesa&sub=chashechnye-lesa&sub=khomutovye-lesa&sub=komplektuiushchie-k-stroitelnym-lesam',
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
                        link: '/catalog?sub=khomutovye-lesa'
                    },
                    {
                        id: 4,
                        name: t('common:complect'),
                        link: '/catalog?sub=komplektuiushchie-k-stroitelnym-lesam'
                    }
                ]
            },
            {
                id: 2,
                title: t('common:homuti'),
                img: '/images/catalog/slider-chomut-equip-construct.png',
                link: '/catalog?sub=khomut-nepovorotnyi&sub=khomut-povorotnyi&sub=khomut-stykovochnyi&sub=khomut-fiksiruiushchii&sub=khomut-balochnyi&sub=khomut-k-doske&sub=bolt-t-obraznyi&sub=khomut-k-lestnitse',
                categories: [
                    {
                        id: 1,
                        name: t('common:nepovorot'),
                        link: '/catalog?sub=khomut-nepovorotnyi'
                    },
                    {
                        id: 2,
                        name: t('common:povorot'),
                        link: '/catalog?sub=khomut-povorotnyi'
                    },
                    {
                        id: 3,
                        name: t('common:stykov'),
                        link: '/catalog?sub=khomut-stykovochnyi'
                    },
                    {
                        id: 4,
                        name: t('common:fix'),
                        link: '/catalog?sub=khomut-fiksiruiushchii'
                    },
                    {
                        id: 5,
                        name: t('common:bal'),
                        link: '/catalog?sub=khomut-balochnyi'
                    },
                    {
                        id: 6,
                        name: t('common:dosk'),
                        link: '/catalog?sub=khomut-k-doske'
                    },
                    {
                        id: 7,
                        name: t('common:bolt'),
                        link: '/catalog?sub=bolt-t-obraznyi'
                    },
                    {
                        id: 8,
                        name: t('common:lestnic'),
                        link: '/catalog?sub=khomut-k-lestnitse'
                    }
                ]
            },
            {
                id: 3,
                title: t('common:opalub_complect'),
                img: '/images/catalog/slider-complect-opalubka.png',
                link: '/catalog?sub=gaika-vaterstop&sub=zamok-klinovoi-otsinkovannyi&sub=zamok-bfd-otsinkovannyi&sub=gaika-dlia-vintovoi-opory&sub=gaika-stiazhnaia-trekhrozhkovaia-otsinkovannaia&sub=gaika-stiazhnaia-dvukhrozhkovaia-otsinkovannaia&sub=gaika-sharnirnaia&sub=vint-stiazhnoi&sub=gaika-malaia-barashkovaiakrylchataia&sub=fiksatory-armatury',
                categories: [
                    {
                        id: 1,
                        name: t('common:waterstop'),
                        link: '/catalog?sub=gaika-vaterstop'
                    },
                    {
                        id: 2,
                        name: t('common:klin_zamok'),
                        link: '/catalog?sub=zamok-klinovoi-otsinkovannyi'
                    },
                    {
                        id: 3,
                        name: t('common:bfd_zamok'),
                        link: '/catalog?sub=zamok-bfd-otsinkovannyi'
                    },
                    {
                        id: 4,
                        name: t('common:gaika_vint_opor'),
                        link: '/catalog?sub=gaika-dlia-vintovoi-opory'
                    },
                    {
                        id: 5,
                        name: t('common:gaika_stayzh_treh'),
                        link: '/catalog?sub=gaika-stiazhnaia-trekhrozhkovaia-otsinkovannaia'
                    },
                    {
                        id: 6,
                        name: t('common:gaika_staych_dvuh'),
                        link: '/catalog?sub=gaika-stiazhnaia-dvukhrozhkovaia-otsinkovannaia'
                    },
                    {
                        id: 7,
                        name: t('common:gaika_sharnir'),
                        link: '/catalog?sub=gaika-sharnirnaia'
                    },
                    // {
                    //     id: 8,
                    //     name: 'Винт стяжной',
                    //     link: '/catalog?sub=vint-stiazhnoi'
                    // },
                    // {
                    //     id: 9,
                    //     name: 'Гайка малая брашковая/крыльчатая',
                    //     link: '/catalog?sub=gaika-malaia-barashkovaiakrylchataia'
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
                link: '/catalog?sub=truby-dlia-stroitelnykh-lesov',
                categories: [
                    {
                        id: 1,
                        name: t('common:trubi_stroiles'),
                        link: '/catalog?sub=truby-dlia-stroitelnykh-lesov'
                    },
                ]
            },
            {
                id: 5,
                title: t('common:opalubka_perkrit'),
                img: '/images/catalog/opalub_perek.png',
                link: '/catalog?sub=opalubka-perekrytii',
                categories: [
                    {
                        id: 1,
                        name: t('common:opalubka_perkrit'),
                        link: '/catalog?sub=opalubka-perekrytii'
                    },
                ]
            },
        ]
    ))

    return data
}

export default useCatalogData