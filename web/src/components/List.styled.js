import styled from "styled-components";

const lightBorder = "#4f4f4f";
const pinkyBorder = "rgba(99, 198, 255, 0.2)";
const pinky = "rgba(255, 99, 132, 1)";
const pinkish = "#ef2551";
const greeny = "#005F9E";
const greenish = "#009e5a";
const greenisher = "#027c57";

export const DivResults = styled.div`
width: 70%;
max-width: 700px;
margin: 30px auto;
/* padding: 30px; */
display: flex;
background-color: rgba(255, 255, 255, 0.9);

border-top-right-radius: 25px;
border-bottom-right-radius: 25px;
box-shadow: 5px 7px 12px #a9a9a9;

@media(max-width: 570px) {
width: 95%;
border-radius: 25px;
flex-direction: column;
align-items: center;
  } 
`;

export const DivResultScore = styled.div`
width: 35%;
max-width: 190px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

background-image: radial-gradient(${({ score }) => (score < 5) ? pinky : greenish}, ${({ score }) => (score < 5) ? pinkish : greenisher});

border-top-right-radius:50%;
border-bottom-right-radius:50%;
color: white;
font-size: 0.79rem;

@media(max-width: 570px) {
border-top-right-radius:25px;
border-top-left-radius:25px;
border-bottom-right-radius:0;
border-bottom-left-radius:0;
width: 100%;
max-width: 100%;
height: 90px;
  } 
`;

export const Result = styled.div`
color: white;
font-size: 5rem;
text-shadow: 2px 2px 4px #00000099;
@media(max-width: 570px) {
  font-size: 4rem;
}
`;

export const DivInfo = styled.div`
width: 65%;
margin: 10px;
padding: 20px 20px 30px 40px;
line-height: 1.5rem;

@media(max-width: 570px) {
  width: 100%;
  padding: 40px;
}
`;

export const GoodDiv = styled.div`
color: green;
`;
export const BadDiv = styled.div`
color: red;
`;