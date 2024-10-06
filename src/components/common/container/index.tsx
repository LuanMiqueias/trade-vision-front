import React from 'react'

const Container: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
  return (
    <div className={`w-full max-w-[1600px] mx-auto ${className} px-6`} >
      {children}
    </div>
  )
}

export default Container
