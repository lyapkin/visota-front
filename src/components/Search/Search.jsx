import React from 'react'

import styles from './search.module.css'

const Search = ({searchLine, submit}) => {
    return (
        
            <form className={styles['search']} onSubmit={submit}>
                <div className={styles['search__input']}>
                    <input type='text' placeholder='Поиск оборудования' value={searchLine.get} onChange={(e) => searchLine.onChange(e.target.value)} />
                    <button className='search__button' ><img src='/svgs/search-icon.svg' alt='иконка'/></button>
                </div>
            </form>
    )
}

export default Search