import { useState } from 'react';
import { DivHeader } from './NavBar-styled';
import NavBarLogin from './NavBarLogin';

/* import { useMyContext } from '../application/Provider'; */

const NavBar = () => {
    /* const [state, setState] = useMyContext();
    */

    
    return (
        <DivHeader>
            <NavBarLogin />
            
        </DivHeader >
    )
}
export default NavBar;