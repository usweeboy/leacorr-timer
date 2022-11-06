import React from 'react'
import { Link } from 'react-router-dom'

const StartPage = () => {
  return (
    <div>
      <div className='container m-auto px-4 sm:px-0'>
        <div className="mt-32">
          <div className="flex justify-center items-center">
            <span className="text-[#FFFFFE] font-light text-[40px] sm:text-[52px]">
              Time to study
            </span>
            <div className="text-flicker bg-[#FFFFFE]"></div>
          </div>
          <div className='mt-5 flex justify-center'>
            <Link to='/home' className="bg-[#7F5AF0] text-[16px] text-center rounded-lg cursor-pointer py-4 px-12 text-[#FFFFFE]">
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartPage