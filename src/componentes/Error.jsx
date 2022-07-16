import styled from "@emotion/styled"

const Texto = styled.p`

background-color: #B7322C;
color: #FFF;
padding: 15px;
font-size: 22px;
text-transform: uppercase;
font-family: 'Lato', sans-serif;
font-weight: 700;
text-align: center;

`

function Error() {
  return (
    <Texto>Todo los campos son obligatorios</Texto>
  )
}
export default Error