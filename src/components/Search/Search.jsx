import React, { useEffect, useState } from 'react'

import styles from './search.module.css'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'

const Search = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [searchLine, setSearchLine] = useState(searchParams.get('search') || '')

    const {t} = useTranslation()

    useEffect(() => {
        setSearchLine(searchParams.get('search') || '')
    }, [searchParams])

    const handleSearch = (e) => {
        e.preventDefault()
        router.replace(`/catalog?search=${searchLine}`, {scroll: false})
    }
    return (
            <form className={styles['search']} onSubmit={handleSearch}>
                <div className={styles['search__input']}>
                    <input type='text' placeholder={t('catalog:search_placeholder')} value={searchLine} onChange={(e) => setSearchLine(e.target.value)} />
                    <button className='search__button'><img src='/svgs/search-icon.svg' alt='иконка'/></button>
                </div>
            </form>
    )
}

export default Search