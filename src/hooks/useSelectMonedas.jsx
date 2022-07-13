import {useState} from "react";
import styled from "@emotion/styled";

// cree un componente styled para el select y label 

const Label = styled.label`
color: #FFF;
display: block;
font-family: 'Lato', sans-serif;
font-size: 24px;
font-weight: 700;
margin 15px 0; 
margin-bottom: 20px; 
`
const Select = styled.select`
width: 100%;
font-size: 18px;
padding: 14px;
border-radius: 10px;
margin-bottom: 20px;

`

// puedo crear mi propio hook y exportar una funcion o un arreglo, y retorno el arreglo en este caso de SelectMonedas 

function useSelectMonedas(label, monedas) {

    const [state, setState] = useState("");

  const SelectMonedas = () => (
     <>
     <Label>{label}</Label>
        <Select value={state} onChange={e => setState(e.target.value)}> 
            <option value="">Selecciona</option>
            {monedas.map(
                (moneda) => (
                    <option key={moneda.id} value={moneda.id}>{moneda.nombre}</option>
                )
             )}
        </Select>
     </>
  )
  return[state , SelectMonedas];
}
export default useSelectMonedas