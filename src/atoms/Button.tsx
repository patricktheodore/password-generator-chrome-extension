import React from 'react'
import { useAppSelector } from '../app/hooks'
import { getFormValues } from '../templates/Form/formSlice'

const Button:React.FC = () => {
  
  const state = useAppSelector(getFormValues)
  
    return (
        <button type='button' 
        // onClick={() => { handleSubmit() }}
        >
        Generate Password
      </button>
  )
}

export default Button