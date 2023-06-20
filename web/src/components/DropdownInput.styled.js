import styled from "styled-components";

export const DivInputNameBarris = styled.div`
display: flex;
width: 100%;
flex-direction: column;
margin: 50px;
align-items: center;

@media(max-width: 768px) {
display: flex;
flex-direction: column; 
max-width: 90vw;
margin: 50px auto;
  }
`;

export const InputDatos = styled.input`
font-size:1.2rem;
margin: 20px auto;
padding: 5px;
min-width: 400px; 
max-width: 500px;
background-color: rgba(255, 255, 255, 0.968);

&:focus {
  outline-width: 0;
  border: 2px solid #006edd;
  background-color: rgba(219, 255, 223, 0.3);
 }
 
@media(max-width: 425px) {
    width: 90%;
    min-width: 150px; 
  } 
`;
export const DivLeyenda = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: 340px;

@media(max-width: 425px) {
    width: 90%;
    min-width: 150px; 
  } 
`;