import { useContext, useEffect, useState } from 'react';
import Clock from '../../components/Clock';
import Layout from '../../components/Layout';
import { AuthContext } from '../../context/AuthContext';
import { FaClock, FaTags, FaRegSave } from "react-icons/fa";
import LoadingComponent from '../../components/Loading';
import { toast } from 'react-toastify';
import api from '../../services/Api';

import {
    Container,
    Content,
    ContainerPunches,
    PunchesList,
    ButtonHistory,
    PunchesRow,
    PunchesTitle,
    SpanText,
    Title,
    TitleName,
    ButtonText,
    ButtonRow,
    SaveButton,
    TextButton,
    ContainerSaveButton,
    Table, Thead, Tr, Th, Tbody, Td
} from './styles';
import { useNavigate } from 'react-router-dom';


interface PuncheData {
    id: number;
    date: Date;
    time: string;
}

function HomePage() {

    const { userData } = useContext(AuthContext);
    const [punches, setPunches] = useState<PuncheData[]>();

    const [loading, setLoading] = useState(false);

    const [deviceType, setDeviceType] = useState<String>();
    const [ipAddress, setIpAddress] = useState<String>();
    const [latitude, setLatitude] = useState<String>();
    const [longitude, setlongitude] = useState<String>();

    const days = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const punch = {
        dateTime: new Date(),
        ipAddress: ipAddress,
        deviceInfo: deviceType,
        latitude: latitude,
        longitude: longitude,
    }

    let navigate = useNavigate();

    const getInformationsFromBrowser = () => {

        if (navigator.userAgent) {
            setDeviceType(navigator.userAgent);
        }

        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function (position) {
                setLatitude(String(position.coords.latitude));
                setlongitude(String(position.coords.longitude));
            });
        }
    }

    async function postPunch() {
        setLoading(true);
        try {
            const response = await api.clockApi.post('/empresa1/api/clock/punch', punch);
            if (response.status === 201) {
                toast.success("Marcação realizada!");
                getUserPunches();
            } else {
                toast.error("Erro ao realizar marcação!");
            }
        } catch (err) {
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
    }

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
        getInformationsFromBrowser();
        getUserPunches();
    }, []);


    if (loading) {
        return (<LoadingComponent value='Realizando marcação...' type='clock'></LoadingComponent>);
    }

    return (
        <Layout>
            <Content>
                <Container>
                    <Title>Olá, <TitleName>{userData?.name}</TitleName></Title><br></br>
                    <SpanText>Bem-vindo de volta à nossa plataforma de gestão do ponto</SpanText>
                    <Clock></Clock>
                    <ContainerSaveButton>
                        <SaveButton onClick={postPunch}>
                            <FaRegSave color='#ffffff' size={20}></FaRegSave>
                            <TextButton>Registrar</TextButton>
                        </SaveButton>
                    </ContainerSaveButton>
                </Container>

                <ContainerPunches>
                    <PunchesTitle>Marcações Recentes</PunchesTitle>
                    <Table>
                        {/* <Thead>
                        <Tr>
                            <Th>Data</Th>
                            <Th>Hora</Th>
                            <Th>Dia da Semana</Th>
                        </Tr>
                    </Thead> */}
                        <Tbody>
                            {punches?.map((val, key) => {
                                let date = new Date(val.date);
                                let datestring = zeroFill(date.getDate()) + "/" + zeroFill((date.getMonth() + 1)) + "/" + date.getFullYear();
                                let dayOfWeek = days[date.getDay()];
                                return (
                                    <Tr key={key}>
                                        <Td><FaClock color='#0B3549' /></Td>
                                        <Td>{datestring}</Td>
                                        <Td>{dayOfWeek}</Td>
                                        <Td>{val.time}</Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>

                    {/* <PunchesList>
                        {punches?.map((val, key) => {
                            let date = new Date(val.date);
                            let datestring = zeroFill(date.getDate())  + "/" + zeroFill((date.getMonth()+1)) + "/" + date.getFullYear();
                            return (
                                <PunchesRow>
                                    <FaClock color='#0B3549' />
                                    <SpanText>{datestring}</SpanText>
                                    <SpanText>{val.time}</SpanText>
                                </PunchesRow>
                            );
                        })}
                    </PunchesList> */}
                    <ButtonRow>
                        <ButtonHistory onClick={() => {
                                navigate('/history')
                            }}>
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