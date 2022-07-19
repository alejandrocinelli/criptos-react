import { useState,useEffect } from 'react'
import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import Formulario from './componentes/Formulario'
import Resultado from './componentes/Resultado'
import Spinner from './componentes/Spinner'

function App() {
  
  const [moneda, setMoneda] = useState({})
  const [cotizacion, setCotizacion] = useState({})
  const [cargando, setCargando]= useState(false)

useEffect(() => {
  const {Monedastate, criptomoneda} = moneda
  const Url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${Monedastate}`
    
  if(Object.keys(moneda).length > 0){
    
      setCargando(true) // para el cargando
      setCotizacion({}) // limpia el resultado anterior
      const cotizarApi = async () => {
      const fetchData = await fetch(Url)
      const resp = await fetchData.json()
      setCotizacion(resp.DISPLAY[criptomoneda][Monedastate]) // otra forma de acceder a la data de un objeto de manera dinamica
      setCargando(false) // para el cargando
    }
    cotizarApi()
  }

}, [moneda])

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
    <Formulario setMoneda={setMoneda}/>
    {cargando ? <Spinner/> : null}
    {Object.keys(cotizacion).length > 0 ? <Resultado cotizacion={cotizacion}/> : null}
    
    </div>
    </Contenedor>
  )
}

export default App
