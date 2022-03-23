import React from 'react';
import { FaHome, FaRegClock, FaRegFileAlt, FaSignOutAlt } from "react-icons/fa";
import { useNavigate, NavLink } from 'react-router-dom';

import { Container, List, Row, Icon, Title, TopSection, TopSectionLogo, TopSectionLogoImg, ButtonLogout, ButtonText, Body } from './styles';
import Logo from "../../assets/logo.png";



const sidebarData = [
    {
        title: "Início",
        icon: <FaHome />,
        link: "/"
    },
    {
        title: "Histórico",
        icon: <FaRegClock />,
        link: "/history"
    },
    {
        title: "Exportar",
        icon: <FaRegFileAlt />,
        link: "/export"
    },
]


function Sidebar() {
    let navigate = useNavigate();

    return (
        <>
            <Container>
            <Body>
                <TopSection>
                    <TopSectionLogo>
                        <TopSectionLogoImg src={Logo}></TopSectionLogoImg>
                    </TopSectionLogo>
                </TopSection>

                <List className='SidebarList'>
                    {sidebarData.map((val, key) => {
                        return (
                            <Row
                                key={key}
                                onClick={() => {
                                    navigate(val.link)
                                    console.log(val.link);
                                }}>
                                <Icon>{val.icon}</Icon><Title>{val.title}</Title>
                            </Row>
                        );
                    })}
                </List>
                </Body>
                <ButtonLogout>
                    <FaSignOutAlt size={20} />
                    <ButtonText>Sair</ButtonText>
                </ButtonLogout>
            </Container>
        </>
    );
}

export default Sidebar;