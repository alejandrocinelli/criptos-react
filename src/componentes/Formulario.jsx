import React from "react"
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import monedas from '../data/monedas.js'

const InputSubmit = styled.input`
background-color: #9497FF;
border: none;
width: 100%;
padding: 10px;
color: #FFF;
font-weight: 700;
text-transform: uppercase;
font-size: 20px;
border-radius: 5px;
transition: background-color .3s ease;
margin-top: 20px;
&:hover {
    cursor: pointer;
    background-color: #7a7dfe;
}
`

function Formulario() {

    const [Monedastate, SelectMonedas]= useSelectMonedas("Elige tu Moneda",monedas);
    

   // SelectMonedas()

  return (
   <form>
    <SelectMonedas />
   {Monedastate}
    <InputSubmit type="submit" value="Cotizar" />

   </form>
  )
}
export default Formulario