import styled from "styled-components";

const greeny = "#005F9E";

export const DivFooter = styled.div`
width: 100%;
min-height: 90px;
background-color: ${greeny};
color: white;
display: flex;
justify-content: center;
align-items: center;
margin: 0;
padding: 46px;

@media(max-width: 430px) {
padding: 38px;
justify-content: space-around;
}
`;