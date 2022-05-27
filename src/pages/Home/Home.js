import React from 'react'
import Header from '../../components/Header/Header'
import MainContent from '../../components/MainContent/MainContent'
import Sidebar from '../../components/Sidebar/Sidebar'
import MenuContext from '../../contexts/MenuContext'
import './Home.css'

const Home = () => {
  return (
    <MenuContext>
      <div className='containerBody'>
        <Sidebar />
        <MainContent>
          <Header />
        </MainContent>
      </div>
    </MenuContext>
  )
}

export default Home