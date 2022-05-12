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
    <button type='button' className='bg-blue-600 hover:bg-blue-800 text-white shadow-lg font-bold py-2 px-4 mb-4 rounded inline-flex items-center text-center' onClick={() => { genPass() }}>
      <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"/></svg>
      <span>Generate Password</span>
    </button>
  )
}

export default Button