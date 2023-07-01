import styled from "styled-components";
//import logo from '../sw_logo.webp';
import { NavLink } from 'react-router-dom';

const greyBorder = "#4f4f4f";
const pinkyBorder = "rgba(99, 198, 255, 0.2)";
const pinky = "rgba(255, 99, 132, 1)";
const greeny = "#005F9E";
const greenyHover = "#078191";
const yellowy = "#ffb91d";


export const DivHeader = styled.div`
color: #adadad;
`;

export const DivBarGridLogin = styled.div`
display: grid;
position: relative;
z-index: 100;
height: 105px;
grid-template-columns: 1fr 1fr 7fr 1fr ;
align-items: center;
padding: 10px 30px;
background-color: rgba(255,255,255,0);
border-bottom: 2px solid ${pinkyBorder};
box-shadow: 2px 2px 9px gray;


@media(max-width: 768px) {
display: flex;
flex-direction: column; 
justify-content: space-between;
max-width: 100vw;
  }
@media(min-width: 1900px) {
grid-template-columns: 1fr 1fr 4fr 1fr ;
  }

`;
export const DivImg = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: no-wrap;
font-size: 2rem;
color: #00589C;

@media(max-width: 769px) {
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
   max-width: 200px; 
   font-size: 1.5rem;
   margin-right: 35px;
    }

 @media(max-width: 700px) {
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
   max-width: 200px; 
   font-size: 1.5rem;
   margin-right: 0px;
    }   

`;

export const LogoImg = styled.img`
height:100px;
margin: 0 auto;

@media(max-width: 768px) {
max-height: 70px;
  } 
`;

export const DivLoginLeft = styled.div`
visibility: hidden;


@media(max-width: 768px) {
  position: absolute;
    visibility: visible;
    display: block;
     width: 100%;
  height: 100%;
  text-align: right;
  }
`;
export const DivLoginLeftLinks = styled.div`
display:none;
position: relative;
    z-index: 999;
@media(max-width: 768px) {
    display: block;
    background-color: white;

    margin-top: 43px;
    margin-left: -20px;
    text-align: left;
  }
`;

export const DivLoginRight = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-content: center;
margin-right: 5px;

@media(max-width: 768px) {
  align-self: start;
  margin-top: 10px;
}
`;



export const DivLogin = styled.div`
display: flex;
flex-flow: row wrap;
align-content: flex-end;
margin-left: auto;

@media(max-width: 768px) {
    flex: column; 
   /*  margin-left: 0;*/
   align-content: flex-end;
   margin-left: 10px
  }
`;

export const LinkIds = styled.span`
cursor: pointer;
color: gray;
&:hover {
  color: ${greeny};  
  text-shadow: 2px 2px 5px rgb(255, 255, 255, 0.7);
}
`;

export const SpanLogin = styled(LinkIds)`
margin-right: 20px;
@media(max-width: 768px) {
     display:none;
  }
`;

export const MenuMobile = styled.span`
display:none;
color: yellow;
cursor: pointer;
width:30px;
height: 30px;

@media(max-width: 768px) {
display: flex;
margin-left: 30px;
margin-top: 20px;
  }
`;

export const DivMenu = styled.div`
width: 100%;
margin: 10px 0;
font-size: 1.2rem;
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
list-style-type: none;

@media(max-width: 768px) {
  display:none;
}
`;

export const LiMenu = styled.li`
padding: 5px 35px;
border-bottom: 2px dotted blue;
background-color: white;
list-style-type: none;
`;

export const NavbarLink = styled(NavLink)`
padding: 15px 7px;
margin-right: 30px;
font-size: 1.1rem;
text-decoration: none;
color:${greeny};
transition: all 0.2s ease -in -out;
&:hover {
  /* border-bottom: 4px solid white;
  margin-bottom: -4px;*/
  color: ${greenyHover};
  z-index: 101;
  text-shadow: 2px 2px 5px rgba(140, 253, 255, 0.7);
}
 &:active{
  color: ${pinky};
  box-shadow: 2px 2p 2px #defbffd2;
};

@media(max-width: 769px) {
padding: 15px 5px;
margin: 0 12px;
  }
`;



export const DivUser = styled.div`
font-size: 0.7rem;
position: absolute;
right: 2%;
top: 79px;
text-align: right;
color: #555555bb;

 @media(max-width: 768px) {
  display: none;
} /**/

`;
export const DivUserMob = styled.div`
font-size: 0.7rem;
text-align: right;
margin-right:27px ;
margin-top: -15px;
`;
