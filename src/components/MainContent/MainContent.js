import React from 'react'
import './MainContent.css'

const MainContent = ({children}) => {
  return (
    <div className='MainContent'>
        {children}
    </div>
  )
}

export default MainContent