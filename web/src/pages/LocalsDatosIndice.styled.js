import styled from 'styled-components';
import bgfoto from '../assets/img/bg-mercado.jpg';


export const DivLocalsTot = styled.div`

min-height:  calc(100vh - 234px);
height: 100%;
margin: 0 auto;
display: flex;
flex-direction: column;
background-image: url(${bgfoto});
  background-repeat: repeat;
 background-attachment: fixed;  /* */
  background-position: center;
  background-size: cover;
@media(max-width: 420px) {
min-height:  calc(100vh - 190px);

}
`;

export const DivMapa = styled.div`
min-height: calc(100vh - 207px);
`;