import React, { useContext, useEffect, useState } from 'react';
import { FaHome, FaRegClock, FaRegFileAlt, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Container, List, Row, Icon, Title, TopSection, TopSectionLogo, TopSectionLogoImg, ButtonLogout, ButtonText, Body } from './styles';
import Logo from "../../assets/logo.png";

const sidebarDataUser = [
    {
        title: "Início",
        icon: <FaHome />,
        link: "/"
    },
    {
        title: "Histórico",
        icon: <FaRegClock />,
        link: "/history"
    }
]

const sidebarDataAdmin = [
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

    const { logout, tokenData } = useContext(AuthContext);
    const [sidebar, setSidebar] = useState(sidebarDataUser);

    let navigate = useNavigate();

    function handleLogout() {
        logout();
    }

    useEffect(() => {
        if (tokenData && tokenData?.roles.includes('ADMIN_CLOCK')) {
            setSidebar(sidebarDataAdmin);
        }
    });

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
                        {sidebar.map((val, key) => {
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
                <ButtonLogout onClick={handleLogout}>
                    <FaSignOutAlt size={20} />
                    <ButtonText>Sair</ButtonText>
                </ButtonLogout>
            </Container>
        </>
    );
}

export default Sidebar;