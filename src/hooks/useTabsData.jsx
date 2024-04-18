import { useMemo } from "react"

const { useTranslation } = require("react-i18next")

const useTabsData = () => {
    const {t} = useTranslation()

    const data = useMemo(() => [
        {
            id: 1,
            name: t('common:homuti'),
            subs: [
                {
                    id: 1,
                    slug: 'nepovorotnyj',
                    name: t('common:nepovorot'),
                    img: '/images/categories/povorotniy.jpg'
                },
                {
                    id: 2,
                    slug: 'povorotnyj',
                    name: t('common:povorot'),
                    img: '/images/categories/nepovorotniy.jpg'
                },
                {
                    id: 3,
                    slug: 'homut-stykovochnyj',
                    name: t('common:stykov'),
                    img: '/images/categories/stik.jpg'
                },
                {
                    id: 4,
                    slug: 'homut-fiksiruyushij',
                    name: t('common:fix'),
                    img: '/images/categories/fix.jpg'
                },
                {
                    id: 5,
                    slug: 'homut-balochnyj',
                    name: t('common:bal'),
                    img: '/images/categories/balochniy.jpg'
                },
                {
                    id: 6,
                    slug: 'homut-k-doske',
                    name: t('common:dosk'),
                    img: '/images/categories/doske.png'
                },
                {
                    id: 7,
                    slug: 'bolt-t-obraznyj',
                    name: t('common:bolt'),
                    img: '/images/categories/bolt-t.png'
                },
                {
                    id: 8,
                    slug: 'homut-k-lestnice',
                    name: t('common:lestnic'),
                    img: '/images/categories/lestnice.png'
                },
            ]
        },
        {
            id: 2,
            name: t('common:stroyles'),
            subs: [
                {
                    id: 1,
                    slug: 'klinovye-lesa',
                    name: t('common:klin'),
                    img: '/images/categories/klinov-les.png'
                },
                {
                    id: 2,
                    slug: 'chashechnye-lesa',
                    name: t('common:chash'),
                    img: '/images/categories/chushech-les.png'
                },
                {
                    id: 3,
                    slug: 'homutovye-lesa',
                    name: t('common:homut'),
                    img: '/images/categories/homut-les.png'
                },
                {
                    id: 4,
                    slug: 'komplektuyushie-k-stroitelnym-lesam',
                    name: t('common:complect'),
                    img: '/images/categories/complect-stroit-les.png'
                }
            ]
        },{
            id: 3,
            name: t('common:opalub_complect'),
            subs: [
                {
                    id: 1,
                    slug: 'gajka-vaterstop',
                    name: t('common:waterstop'),
                    img: '/images/categories/gajka-vaterstop.jpg'
                },
                {
                    id: 2,
                    slug: 'zamok-klinovoj',
                    name: t('common:klin_zamok'),
                    img: '/images/categories/zamok-klin-ocink.jpg'
                },
                {
                    id: 3,
                    slug: 'zamok-bfd-ocinkovannyj',
                    name: t('common:bfd_zamok'),
                    img: '/images/categories/zamok-bfd.jpg'
                },
                {
                    id: 4,
                    slug: 'gajka-dlya-vintovoj-opory',
                    name: t('common:gaika_vint_opor'),
                    img: '/images/categories/gaik-vint-opor.jpg'
                },
                {
                    id: 5,
                    slug: 'gajka-styazhnaya-trehrozhkovaya-ocinkovannaya',
                    name: t('common:gaika_stayzh_treh'),
                    img: '/images/categories/gaika-styazh.jpg'
                },
                {
                    id: 6,
                    slug: 'gajka-styazhnaya-dvuhrozhkovaya-ocinkovannaya-90mm',
                    name: t('common:gaika_staych_dvuh'),
                    img: '/images/categories/gaika-styazh-dvuh.jpg'
                },
                {
                    id: 7,
                    slug: 'gajka-sharnirnaya',
                    name: t('common:gaika_sharnir'),
                    img: '/images/categories/gaika-sharnir.jpeg'
                },
                {
                    id: 8,
                    slug: 'vint-styazhnoj-1-m-08-m-15-m-2m',
                    name: t('common:vint_stayzh'),
                    img: '/images/categories/styazhnoj-vint.png'
                },
                {
                    id: 9,
                    slug: 'gajka-malaya-barashkovayakrylchataya',
                    name: t('common:gaika_malaya'),
                    img: '/images/categories/gajka-barashkovaya.png'
                },
                {
                    id: 10,
                    slug: 'fiksatory-armatury',
                    name: t('common:fix_armatur'),
                    img: '/images/categories/fiksator-armatury-zvezdochka.png'
                },
            ]
        },{
            id: 4,
            name: t('common:trubi_vgp'),
            subs: [
                {
                    id: 1,
                    slug: 'truby-vgp',
                    name: t('common:trubi_vgp'),
                    img: '/images/categories/truba-vgp.jpg'
                }
            ]
        },{
            id: 5,
            name: t('common:opalubka_perkrit'),
            subs: [
                {
                    id: 1,
                    slug: 'opalubka-perekrytij',
                    name: t('common:opalubka_perkrit'),
                    img: '/images/catalog/opalub_perek.png'
                }
            ]
        },
    ])

    return data
}

export default useTabsData