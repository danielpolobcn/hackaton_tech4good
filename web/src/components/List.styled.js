import styled from "styled-components";


export const DivResults = styled.div`
width: 90%;
margin: 30px auto;
padding: 30px;
display: flex;
background-color: rgba(255, 255, 255, 0.9);
border: 1px dotted blue;
`;

export const DivResultScore = styled.div`
width: 35%;
display: flex;
flex-direction: column;
align-items: center;
color: blue;
font-size: 0.79rem;
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
border: 6px dotted #8800ff2a;
background-color:#005792;
background-image: radial-gradient(${props => props.color}, #8800ff25);
@media(max-width: 425px) {
   height: 80px;
width: 80px;
  } 
`;

export const DivInfo = styled.div`
width: 65%;
margin: 0px 10px;
padding: 10px 20px 30px 10px;

@media(max-width: 425px) {
   padding: 10px 10px 30px 20px;
  } 
`;

export const GoodDiv = styled.div`
color: green;
`;
export const BadDiv = styled.div`
color: red;
`;