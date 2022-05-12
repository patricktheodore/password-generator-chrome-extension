import React from 'react'

interface InputProps {
  value: string
}

const PasswordDisplay: React.FC<InputProps> = ({ value }) => {
  return (
    <>
      <textarea 
      id='passwordDisplay' 
      cols={28}
      rows={4} 
      name='passwordDisplay' 
      value={value} 
      disabled 
      className='bg-background block text-center mb-4 w-fit mx-8 resize-none'
      >  
      </textarea>
    </>
  )
}

export default PasswordDisplay