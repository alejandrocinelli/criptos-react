import React from "react"
import styled from "@emotion/styled"

const ResultadoDiv = styled.div`
color: #FFF;
font-family: 'Lato', sans-serif;
display: flex;
align-items: center;
gap: 1rem;
margin-top: 30px;
`
const Imagen = styled.img`
display: block;
width: 120px;
`

const Texto = styled.p`
font-size: 18px;
span {
    font-weight: 700;
}
`
const Precio = styled.p`

font-size: 24px;
span {
    font-weight: 700;
}

`

function Resultado({cotizacion}) {

    const {PRICE,HIGHDAY,LOWDAY,IMAGEURL,CHANGEPCT24HOUR,LASTUPDATE} = cotizacion

  return (

    <ResultadoDiv>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt=""/>
        <div>
        <Precio>El precio es de <span>{PRICE}</span></Precio>
        <Texto>Precio mas alto del dia <span>{HIGHDAY}</span></Texto>
        <Texto>Precio mas bajo del dia <span>{LOWDAY}</span></Texto>
        <Texto>Cambio ultimas 24 horas <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Ultima actualizacion <span>{LASTUPDATE}</span></Texto>
        </div>
    </ResultadoDiv>
  )
}
export default Resultado