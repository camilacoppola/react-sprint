import React from 'react'
import PlantillaPagina from '../../components/PlantillaPagina/PlantillaPagina'
import './Home.css'
import MainContentHome from '../MainContent/MainContentHome';
import HeaderSearchHome from '../../components/HeaderSearchHome/HeaderSearchHome'

const Home = () => {
  return (
    <PlantillaPagina>
        <h1>Hola Olivia!</h1>
      <MainContentHome />
    </PlantillaPagina>
  )
}

export default Home