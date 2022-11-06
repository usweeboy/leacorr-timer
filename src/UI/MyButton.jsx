import React from 'react'

const MyButton = ({children, bgColor, isClick}) => {
  return (
    <button 
      style={{ backgroundColor : bgColor}} 
      className='rounded py-2 font-medium px-4 text-white text-[15px]'
      onClick={isClick}
    >
      {children}
    </button>
  )
}

export default MyButton