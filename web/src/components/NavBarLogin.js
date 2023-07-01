import { useState } from 'react';
import logo from '../assets/img/logo.png';
import { DivBarGridLogin, DivImg, LogoImg, DivLoginRight, DivLogin, DivLoginLeft, DivLoginLeftLinks, MenuMobile, DivUser, DivUserMob } from './NavBar-styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { DivMenu, LiMenu, NavbarLink } from './NavBar-styled';


const NavBarLogin = () => {

    const [isActive, setIsActive] = useState(false);

    return (

        <DivBarGridLogin>

            <DivLoginLeft>
                <MenuMobile className='menumobile'>
                    <FontAwesomeIcon onClick={() => { setIsActive(!isActive) }}
                        icon={isActive ? faXmark : faBars} size="2xl" style={{ color: "#005792", }} />
                </MenuMobile>
                {isActive && (
                    <DivLoginLeftLinks>
                        <NavbarLink
                            style={{
                            }}
                            to="/" onClick={() => { setIsActive(!isActive) }}>
                            <LiMenu>HOME </LiMenu>
                        </NavbarLink>

                        <NavbarLink
                            style={{
                            }}
                            to="/chart" onClick={() => { setIsActive(!isActive) }}>
                            <LiMenu>GRAFICO</LiMenu>
                        </NavbarLink>

                        <NavbarLink
                            style={{
                            }}
                            to="/ranks" onClick={() => { setIsActive(!isActive) }}>
                            <LiMenu>BUSCADOR</LiMenu>
                        </NavbarLink>

                        <NavbarLink
                            style={{
                            }}
                            to="/map" onClick={() => { setIsActive(!isActive) }}>
                            <LiMenu>MAPA BARCELONA</LiMenu>
                        </NavbarLink>

                        <br /><br />
                    </DivLoginLeftLinks>
                )}

            </DivLoginLeft>
            <Link to="/" className='noLine'>
                <DivImg>

                    <LogoImg src={logo} alt="comerç15" /> <strong >
                        Comerç15'
                    </strong>
                </DivImg>
            </Link>

            <DivMenu id='menu'>
                {/* <NavbarLink className="menu"
                    style={{
                    }}
                    to="/">
                    HOME
                </NavbarLink> */}

                <NavbarLink className="menu"
                    style={{
                    }}
                    to="/chart">
                    INDICE
                </NavbarLink>

                <NavbarLink className="menu"
                    style={{
                    }}
                    to="/ranks">
                    BARRIO
                </NavbarLink>

                <NavbarLink className="menu"
                    style={{
                    }}
                    to="/map">
                    MAPA
                </NavbarLink>

            </DivMenu >

            <DivLoginRight>


            </DivLoginRight>
            <br />
        </DivBarGridLogin >
    )
}
export default NavBarLogin;