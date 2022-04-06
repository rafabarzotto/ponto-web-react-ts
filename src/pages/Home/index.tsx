import { useContext, useEffect, useState } from 'react';
import Clock from '../../components/Clock';
import Layout from '../../components/Layout';
import { AuthContext } from '../../context/AuthContext';
import { FaClock, FaTags } from "react-icons/fa";
import api from '../../services/Api';

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

interface PuncheData {
    id: number;
    date: Date;
    time: string;
}

function HomePage() {

    const { userData } = useContext(AuthContext);
    const [punches, setPunches] = useState<PuncheData[]>();

    const days = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    async function getUserPunches() {
        try {
            const response = await api.clockApi.get('/empresa1/api/punches/history?page=1&perPage=5');

            if (response.status === 200) {
                setPunches(response.data.punches);
            }
        } catch (e) {

        }
    }

    // Função para formatar 1 em 01
    function zeroFill(n: number) {
        return ('0' + n).slice(-2);
    }

    useEffect(() => {
        getUserPunches();
    }, []);

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
                        {punches?.map((val, key) => {
                            let date = new Date(val.date);
                            let day = days[date.getDay()];
                            let month = zeroFill(date.getUTCDate()) + ' de ' + months[date.getMonth()];
                            return (
                                <PunchesRow>
                                    <FaClock color='#0B3549' />
                                    <SpanText>{day}</SpanText>
                                    <SpanText>{month}</SpanText>
                                    <SpanText>{val.time}</SpanText>
                                </PunchesRow>
                            );
                        })}
                    </PunchesList>
                    <ButtonRow>
                        <ButtonHistory>
                            <FaTags size={16} color='#F98B47' />                            
                            <ButtonText>Ver todas</ButtonText>
                        </ButtonHistory>
                    </ButtonRow>
                </ContainerPunches>
            </Content>
        </Layout>
    );
}

export default HomePage;