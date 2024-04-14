'use client'
import { LocationNameContext } from '@/providers/LocationNameProvider'
import React, { useContext, useEffect } from 'react'

const PassBreadcrumbs = ({title}) => {
    const [_, setLocationName] = useContext(LocationNameContext)

    useEffect(() => {
        setLocationName(prev => ({...prev, post: title}))

        return () => {
            setLocationName(prev => {
                const newState = {...prev}
                delete newState.post
                return newState
            })
        }
    }, [])

    return (
        <></>
    )
}

export default PassBreadcrumbs