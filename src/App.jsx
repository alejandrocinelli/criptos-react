import { useState } from 'react'
import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import Formulario from './componentes/Formulario'

function App() {
  
  const [moneda, setMoneda] = useState({})

  // aca declare un par de style component for the app ... 

  const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
  `

  const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
  `


  const Heading = styled.h1` 
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  `

  return (

    <Contenedor>
    <Imagen src={ImagenCripto} alt="Imagen"/>
    <div>
    <Heading>Cotiza Criptomonedas</Heading>
    <Formulario />
    </div>
    </Contenedor>
  )
}

export default App
