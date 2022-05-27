import React from 'react'
import Header from '../../components/Header/Header'
import MainContent from '../../components/MainContent/MainContent'
import Sidebar from '../../components/Sidebar/Sidebar'
import MenuContext from '../../contexts/MenuContext'
import './Home.css'
import MainContentHome from '../MainContent/MainContentHome';

const Home = () => {
  return (
    <MenuContext>
      <div className='containerBody'>
        <Sidebar />
        <MainContent>
          <Header />
          <MainContentHome/>
        </MainContent>
      </div>
    </MenuContext>
  )
}

export default Home