import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getFormValues, setPassword } from '../templates/Form/formSlice'

const Button: React.FC = () => {

  const dispatch = useAppDispatch()
  const state = useAppSelector(getFormValues)

  const genPass = () => {

    console.log(state);
    
    let password: string = ''
    const arr = state.availChars.join('');

    for (var i = 0; i < parseInt(state.length); i++) {
      password += arr.charAt(Math.floor(Math.random() * arr.length))
    }

    dispatch(setPassword(password))
  }

  return (
    <button type='button' className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 mb-4 rounded' onClick={() => { genPass() }}>
      GENerate PASSword
    </button>
  )
}

export default Button