import { useContext, useEffect, useState } from 'react';
import Clock from '../../components/Clock';
import Layout from '../../components/Layout';
import { AuthContext } from '../../context/AuthContext';
import { FaClock, FaTags} from "react-icons/fa";

import { 
    Container, 
    Content, 
    ContainerPunches, 
    ContainerTimer, 
    PunchesList, 
    ButtonHistory, 
    PunchesRow, 
    PunchesTitle, 
    SpanText, 
    Title, 
    TitleName,
    ButtonText,
    ButtonRow
} from './styles';

function HomePage() {

    const { userData } = useContext(AuthContext);

    useEffect(() => {

    },[]);

    return (
        <Layout>
            <Content>
                <Container>

                    <ContainerTimer>
                        <Title>Olá, <TitleName>{userData?.name}</TitleName></Title><br></br>
                        <SpanText>Bem-vindo de volta à nossa plataforma de gestão do ponto</SpanText>
                    </ContainerTimer>

                    <Clock></Clock>
                </Container>

            

                <ContainerPunches>
                    <PunchesTitle>Atividades Recentes</PunchesTitle>
                    <PunchesList>
                        <PunchesRow>
                            <FaClock color='#0B3549'/>
                            <SpanText>22 de janeiro</SpanText>
                            <SpanText>Segunda-feira</SpanText>
                            <SpanText>8:00</SpanText>                        
                        </PunchesRow>
                        <PunchesRow>
                            <FaClock color='#0B3549'/>
                            <SpanText>22 de janeiro</SpanText>
                            <SpanText>Segunda-feira</SpanText>
                            <SpanText>8:00</SpanText>                        
                        </PunchesRow>
                        <PunchesRow>
                            <FaClock color='#0B3549'/>
                            <SpanText>22 de janeiro</SpanText>
                            <SpanText>Segunda-feira</SpanText>
                            <SpanText>8:00</SpanText>                        
                        </PunchesRow>
                        <PunchesRow>
                            <FaClock color='#0B3549'/>
                            <SpanText>22 de janeiro</SpanText>
                            <SpanText>Segunda-feira</SpanText>
                            <SpanText>8:00</SpanText>                        
                        </PunchesRow>
                        <PunchesRow>
                            <FaClock color='#0B3549'/>
                            <SpanText>22 de janeiro</SpanText>
                            <SpanText>Segunda-feira</SpanText>
                            <SpanText>8:00</SpanText>                        
                        </PunchesRow>
                    </PunchesList>
                    <ButtonRow>
                        <ButtonHistory>
                            <ButtonText>Ver todas</ButtonText>
                            <FaTags size={16} color='#F98B47'/>
                        </ButtonHistory>
                    </ButtonRow>
                </ContainerPunches>
            </Content>
        </Layout>
    );
}

export default HomePage;