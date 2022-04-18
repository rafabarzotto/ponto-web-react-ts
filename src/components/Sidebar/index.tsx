import React, { useContext, useEffect, useState } from 'react';
import { FaHome, FaRegClock, FaRegFileAlt, FaSignOutAlt } from "react-icons/fa";
import { BsHouseDoor, BsClock, BsCalendar4Event, BsFileEarmarkFont } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Container, List, Row, RowLogout, Icon, Title, TopSection, TopSectionLogo, TopSectionLogoImg, ButtonLogout, ButtonText, Body, TopSectionLogoMobileImg } from './styles';
import SanconLogo from "../../assets/sancon-logo-claro.svg";
import SanconLogoMobile from "../../assets/logo.png";

const sidebarDataUser = [
    {
        title: "Início",
        icon: <BsHouseDoor size={24} />,
        link: "/"
    },
    {
        title: "Histórico",
        icon: <BsCalendar4Event size={22} />,
        link: "/history"
    }
]

const sidebarDataAdmin = [
    {
        title: "Início",
        icon: <BsHouseDoor size={24} />,
        link: "/"
    },
    {
        title: "Histórico",
        icon: <BsCalendar4Event size={22} />,
        link: "/history"
    },
    {
        title: "Exportar",
        icon: <BsFileEarmarkFont size={24} />,
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
                            <TopSectionLogoImg src={SanconLogo}></TopSectionLogoImg>
                            <TopSectionLogoMobileImg src={SanconLogoMobile}></TopSectionLogoMobileImg>
                        </TopSectionLogo>
                    </TopSection>

                    <List className='SidebarList'>
                        {sidebar.map((val, key) => {
                            return (
                                <Row
                                    key={key}
                                    onClick={() => {
                                        navigate(val.link)
                                    }}>
                                    <Icon>{val.icon}</Icon><Title>{val.title}</Title>
                                </Row>
                            );
                        })}
                        <RowLogout onClick={handleLogout}><Icon><FaSignOutAlt size={22} /></Icon><Title>Sair</Title></RowLogout>
                    </List>
                </Body>
                {/* <ButtonLogout onClick={handleLogout}>

                    <ButtonText>Sair</ButtonText>
                </ButtonLogout> */}
            </Container>
        </>
    );
}

export default Sidebar;