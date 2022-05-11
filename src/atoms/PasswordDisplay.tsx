import React from 'react'

interface InputProps {
    value: string
}

const PasswordDisplay:React.FC<InputProps> = ({value}) => {
  return (
    <>
    <label htmlFor='passwordDisplay'></label>
    <textarea rows={4} cols={50} id='passwordDisplay' name='passwordDisplay' value={value} disabled ></textarea>
    </>
  )
}

export default PasswordDisplay