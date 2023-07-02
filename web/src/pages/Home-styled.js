import styled from "styled-components";
import bgfoto from '../assets/img/mercado-2.jpg'

export const DivContent = styled.div`
/* width: 100vw; 
margin: 0 auto;*/
display: flex;
justify-content: center;
text-align: center;
/* position: relative; */
min-height: calc(100vh - 205px);
height: 100%;
background-image: url(${bgfoto});
  background-repeat: repeat;
 background-attachment: fixed;  /* */
  background-position: center;
  background-size: cover;

@media screen and (max-width: 769px){
    flex-direction: column;
}
`;

export const DivHome = styled.div`
/* position: absolute;
z-index: 5; */
width: 70%;
max-width: 750px;
border: 1px dotted transparent;
margin: 70px auto;
padding: 50px;
background-color: rgba(255, 255, 255, 0.9);

@media screen and (max-width: 769px){
    font-size: 0.9rem;
    width: 100%;
    padding: 30px;
}
`;

export const DivIntro1 = styled.div`
@media screen and (max-width: 769px){
    display: none;
}
`;

export const DivImg = styled.div`
width: 100%;
margin: 0px;
@media screen and (max-width: 769px){
    width: 100%;
    margin: 0;
}
`;

export const ImgHome = styled.img`
width: 100%;
object-fit: cover;

@media screen and (max-width: 769px){
    width: auto;
    height: 100vh;    
    margin: 0;
}

`;


