import React from "react"
import { useEffect, useState } from "react"
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import monedas from '../data/monedas.js'
import Error from "./Error"

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


function Formulario({setMoneda}) {

    const [cripto, setCripto] = useState([])
    const [error, setError]= useState(false)
    const [Monedastate, SelectMonedas]= useSelectMonedas("Elige tu Moneda",monedas);
    const [criptomoneda, SelectCriptomoneda]= useSelectMonedas("Elige tu Cripto",cripto);


useEffect(() => {

    const consultarApi = async () => {
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
        const fetchData = await fetch(url)
        const resp = await fetchData.json()
       

        const arrayCripto =  resp.Data.map(cripo => {
           
         const obj = {
                id: (cripo.CoinInfo.Name),
                nombre: (cripo.CoinInfo.FullName)
           }
           
            return obj
          
        } )
        
       setCripto(arrayCripto)

    }

consultarApi()

}, [])

const handleSubmit = (e) => {
    e.preventDefault()
    if(criptomoneda === "" || Monedastate === ""){
        setError(true)
        return
    }
    setError(false)
    setMoneda({
         Monedastate, criptomoneda 
    })
}

  return (
    <>
   {error && <Error/>}
   <form onSubmit={handleSubmit}>
   <SelectMonedas />
   <SelectCriptomoneda/>
    <InputSubmit type="submit" value="Cotizar" />

   </form></>
  )
}
export default Formulario