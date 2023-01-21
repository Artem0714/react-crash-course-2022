import React from 'react'

interface ErrorMesProps {
    error: string
}
export function ErrorMes({error}: ErrorMesProps) {
    return(
        <p className='text-center text-red-600' >Error</p>
    )
}