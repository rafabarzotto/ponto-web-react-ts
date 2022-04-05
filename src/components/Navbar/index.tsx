import React, { } from 'react';
import { FaRegUser, FaRegBell } from "react-icons/fa";
import { Container, ShortcutsMenu, Header } from './styles';

function Navbar() {

    return (
        <Container>
            <Header>
                <ShortcutsMenu>
                    <FaRegBell color='#033549' size={20}></FaRegBell>
                    <FaRegUser color='#033549' size={20}></FaRegUser>
                </ShortcutsMenu>
            </Header>
        </Container>
    );
}

export default Navbar;