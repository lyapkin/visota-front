'use client'
import addToStorageCart from '@/utils/addToStorageCart'
import deleteFromStorageCart from '@/utils/deleteFromStorageCart'
import React, { createContext, useEffect, useState } from 'react'

export const SearchLineContext = createContext(null)

const SearchLineProvider = ({children}) => {
    const [searchLine, setSearchLine] = useState('')

    // const addToCart = (id) => {
    //     addToStorageCart(id)
    //     setCart(prev => ({...prev, [id]: 1}))
    // }

    // const deleteFromCart = (id) => {
    //     deleteFromStorageCart(id)
    //     setCart(prev => {
    //         const newState = {...prev}
    //         delete newState[id]
    //         return newState
    //     })
    // }

    return (
        <SearchLineContext.Provider value={[searchLine, setSearchLine]} >
            {children}
        </SearchLineContext.Provider>
    )
}

export default SearchLineProvider