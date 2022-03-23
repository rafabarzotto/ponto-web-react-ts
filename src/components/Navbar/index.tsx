import React from 'react';
import { FaRegUser, FaRegBell } from "react-icons/fa";

import {Container, ShortcutsMenu} from './styles';

function Navbar(){
    return(
        <Container>
            <ShortcutsMenu>
                <FaRegBell color='#1D254E' size={20}></FaRegBell>
                <FaRegUser color='#1D254E' size={20}></FaRegUser>
            </ShortcutsMenu>
        </Container>
    );
}

export default Navbar;