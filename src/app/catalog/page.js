import React, { Suspense } from 'react'

import styles from '@/styles/catalog.module.css'
import CatalogContent from '@/components/catalog/CatalogContent'


const getData = async () => {
    const response = await fetch(process.env.API_URL + '/products/categories', { cache: 'no-store' })

    if (!response.ok) {
        throw new Error(response.status + ' запрос не удался')
    }

    return await response.json()
}

const Catalog = async () => {
    const categories = await getData()

    return (
        <div className={`${styles['catalog']} first-screen`}>
            <div className='container'>
                <h2 className={styles['catalog__title']}>Каталог</h2>
                <Suspense fallback={<div>...loading</div>}>
                <CatalogContent categories={categories} />
                </Suspense>
            </div>
        </div>
    )
}



// const categories = [
//     {
//         id: 1,
//         name: 'Хомуты',
//         slug: 'homut',
//         subs: [
//             {
//                 slug: 'nepovorot',
//                 name: 'Хомут неповоротный'
//             },
//             {
//                 slug: 'povorot',
//                 name: 'Хомут поворотный'
//             },
//             {
//                 slug: 'stikovoch',
//                 name: 'Хомут стыковочный'
//             },
//             {
//                 slug: 'fixiru',
//                 name: 'Хомут фиксирующий'
//             },
//             {
//                 slug: 'balochn',
//                 name: 'Хомут балочный'
//             },
//         ]
//     },
//     {
//         id: 2,
//         name: 'Строительные леса',
//         slug: 'lesa',
//         subs: [
//             {
//                 slug: 'chashochn',
//                 name: 'Чашочные леса'
//             },
//             {
//                 slug: 'klinov',
//                 name: 'Клиновые леса'
//             },
//             {
//                 slug: 'homutov',
//                 name: 'Хомутовые леса'
//             },
//             {
//                 slug: 'comlect',
//                 name: 'Комплектующие к строительным лесам'
//             },
//             {
//                 slug: 'balochn',
//                 name: 'Хомут балочный'
//             },
//         ]
//     },
//     {
//         id: 3,
//         name: 'Комплектующие к опалубке',
//         slug: 'complect_opalubke',
//         subs: [
//             {
//                 slug: 'watersyop',
//                 name: 'Гайка ватерстоп'
//             },
//             {
//                 slug: 'kinov_zamok',
//                 name: 'Замок клиновый оценкованный 2,7кг'
//             },
//             {
//                 slug: 'zamok_bfd',
//                 name: 'Замок BFD оцинкованный 3,9 кг'
//             },
//             {
//                 slug: 'vint_opor',
//                 name: 'Гайка для винтовой опоры'
//             },
//         ]
//     },
// ]

export default Catalog