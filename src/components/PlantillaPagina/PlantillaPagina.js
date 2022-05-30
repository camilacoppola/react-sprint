import React from 'react'
import Header from '../../components/Header/Header'
import MainContent from '../../components/MainContent/MainContent'
import Sidebar from '../../components/Sidebar/Sidebar'
import MenuContext from '../../contexts/MenuContext'
import './PlantillaPagina.css'

const PlantillaPagina = ({children}) => {
  return (
    <MenuContext>
      <div className='containerBody'>
        <Sidebar />
        <MainContent>
          <Header />
          {children}
        </MainContent>
      </div>
    </MenuContext>
  )
}

export default PlantillaPagina