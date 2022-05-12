import React from 'react'
import { useAppSelector } from '../app/hooks'
import PasswordDisplay from '../atoms/PasswordDisplay'
import { getFormValues } from './Form/formSlice'

const Footer:React.FC = () => {
    const state = useAppSelector(getFormValues) 

    return (
    <div>
        oh no
    </div>
  )
}

export default Footer