import styled from "styled-components";


export const DivResults = styled.div`
width: 80%;
margin: 30px auto;
padding: 30px;
display: flex;
background-color: rgba(255, 255, 255, 0.9);
border-radius: 25px;
border: 1px dotted blue;

@media(max-width: 570px) {
width: 95%;
flex-direction: column;
align-items: center;
  } 
`;

export const DivResultScore = styled.div`
width: 35%;
display: flex;
flex-direction: column;
align-items: center;
color: blue;
font-size: 0.79rem;
@media(max-width: 570px) {
width: 95%;
  } 
`;

export const Result = styled.div`
color: white;
font-size: 1.3rem;
height: 90px;
width: 90px;
display: flex;
justify-content: center;
align-items: center;
padding: 3px 7px;
margin: 14px;
border-radius: 100%;
border: 6px solid #8800ff2a;
background-color:#005792;
background-image: radial-gradient(${({ score }) => (score < 5) ? "red" : "#63beffa7"}, ${({ score }) => (score < 5) ? "#ff3363" : "#8800ff25"});
@media(max-width: 425px) {
   height: 80px;
width: 80px;
  } 
`;

export const DivInfo = styled.div`
width: 65%;
margin: 0px 10px;
padding: 10px 20px 30px 10px;
line-height: 1.5rem;

@media(max-width: 570px) {
width: 100%;
padding: 2px;
  } 
`;

export const GoodDiv = styled.div`
color: green;
`;
export const BadDiv = styled.div`
color: red;
`;