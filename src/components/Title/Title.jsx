import React from 'react'

const Title = ({ children, className = "" }) => {
  return (
    <div
      data-aos="fade-down"
      className={`font-title text-white font-meduim
         text-xl opacity-80 mb-12 md:text-2xl lg:text-2xl text-center ${className}`}
    >
      {children}
    </div>
  )
}

export default Title