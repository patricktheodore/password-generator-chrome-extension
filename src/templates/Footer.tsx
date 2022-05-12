import React from 'react'
import { useAppSelector } from '../app/hooks'
import PasswordDisplay from '../atoms/PasswordDisplay'
import { getFormValues } from './Form/formSlice'
import Button from '../atoms/Button'
import CopyButton from '../atoms/CopyButton'

const Footer: React.FC = () => {
  const state = useAppSelector(getFormValues)

  return (
    <div className='text-center justify-center'>
      <Button />
      <PasswordDisplay value={state.password} />
      <CopyButton />

      <h1 className='text-xs text-center mt-8 mb-4 hover:underline font-light'>
        <a href='https://patricktheodore.github.io/patricktheodore-react-portfolio/' target='_blank' >
          patricktheodore
          </a>
      </h1>
    </div>
  )
}

export default Footer