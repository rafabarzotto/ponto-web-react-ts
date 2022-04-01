import React, { } from 'react';
import { FaRegUser, FaRegBell } from "react-icons/fa";
import { Container, ShortcutsMenu, Header } from './styles';

function Navbar() {

    return (
        <Container>
            <Header>
                <ShortcutsMenu>
                    <FaRegBell color='#1D254E' size={20}></FaRegBell>
                    <FaRegUser color='#1D254E' size={20}></FaRegUser>
                </ShortcutsMenu>
            </Header>
        </Container>
    );
}

export default Navbar;