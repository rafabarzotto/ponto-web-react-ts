import React, { useState, useEffect, FC } from 'react';
import { FaRegSave } from "react-icons/fa";
import useAxios from '../../hooks/useAxios';
// import api from '../../services/Api';

import {
    Container, ContainerTime, Day,
    Time, WeekText, TimeText, MonthText,
    SaveButton, TextButton
} from './styles';


const Clock: FC<any> = (): JSX.Element => {

    const clockApi = useAxios();

    const [latitude, setLatitude] = useState(0);
    const [longitude, setlongitude] = useState(0);

    const [deviceType, setDeviceType] = useState("");

    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [dayWeek, setDayWeek] = useState('');
    const [dayMonth, setDayMonth] = useState('');


    const punch = {
        dateTime: new Date(),
        ipAddress: "192.168.0.1",
        deviceInfo: navigator.userAgent,
        latitude: 0,
        longitude: 0,
    }

    // Função para formatar 1 em 01
    function zeroFill(n: number) {
        return ('0' + n).slice(-2);
    }

    function getInformationsFromBrowser() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function (position) {
                setLatitude(position.coords.latitude);
                setlongitude(position.coords.longitude);
            });
        }
    }

    async function postPunch() {
        try {
            await clockApi.post('/empresa1/api/clock/punch', punch);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {

        const days = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
        const months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

        // Execução a cada segundo
        const interval = setInterval(() => {
            const now = new Date();

            let day = days[now.getDay()];
            let date = zeroFill(now.getUTCDate()) + ' ' + months[now.getMonth()];

            setDayWeek(day);
            setDayMonth(date);
            setHours(zeroFill(now.getHours()));
            setMinutes(zeroFill(now.getMinutes()));
            setSeconds(zeroFill(now.getSeconds()));
        }, 1000);

        getInformationsFromBrowser();

        return () => {
            clearInterval(interval);
        };

    }, [])


    return (
        <>
            <Container>
                <ContainerTime>
                    <Day>
                        <WeekText>{dayWeek}</WeekText>
                        <MonthText>{dayMonth}</MonthText>
                    </Day>
                    <Time>
                        <TimeText>{hours}</TimeText>
                    </Time>
                    <Time>
                        <TimeText>{minutes}</TimeText>
                    </Time>
                    <Time>
                        <TimeText>{seconds}</TimeText>
                    </Time>
                </ContainerTime>
                <SaveButton onClick={postPunch}>
                    <TextButton>Registrar</TextButton>
                    <FaRegSave color='#ffffff' size={20}></FaRegSave>
                </SaveButton>
            </Container>
        </>
    );
}

export default Clock;