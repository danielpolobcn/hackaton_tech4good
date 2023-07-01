import styled from 'styled-components';
import bgfoto from '../assets/img/bg-mercado.jpg';


export const DivLocalsTot = styled.div`
width: 100vw;
min-height: 99vh;
height: 100%;
margin: 0 auto;
display: flex;
flex-direction: column;
background-image: url(${bgfoto});
  background-repeat: repeat;
 background-attachment: fixed;  /* */
  background-position: center;
  background-size: cover;

`;