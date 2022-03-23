import React, { useEffect, useState } from 'react';
import { FaRegSave } from "react-icons/fa";
import Api from '../../services/Api';

import {
    Container, ContainerTime, Day,
    Time, WeekText, TimeText, MonthText,
    SaveButton, TextButton
} from './styles';

function Clock() {

    const [latitude, setLatitude] = useState(0);
    const [longitude, setlongitude] = useState(0);

    const [deviceType, setDeviceType] = useState("");

    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [dayWeek, setDayWeek] = useState('');
    const [dayMonth, setDayMonth] = useState('');

    const days = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
    const months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

    const punch = {
        dateTime: new Date(),
        ipAddress: "",
        deviceInfo: navigator.userAgent,
        latitude: latitude,
        longitude: longitude,
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

        async function getPunch() {
            try {
                await Api.post('/empresa1/api/clock/punch', punch);
            } catch (err) {
                console.log(err);
            }
        }

        getInformationsFromBrowser();

        // Execução a cada segundo
        setInterval(() => {
            const now = new Date();

            let day = days[now.getDay()];
            let date = zeroFill(now.getUTCDate()) + ' ' + months[now.getMonth()];

            setDayWeek(day);
            setDayMonth(date);
            setHours(zeroFill(now.getHours()));
            setMinutes(zeroFill(now.getMinutes()));
            setSeconds(zeroFill(now.getSeconds()));
        }, 1000);


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
                    <SaveButton onClick={getPunch}>
                        <TextButton>Registrar</TextButton>
                        <FaRegSave color='#ffffff' size={20}></FaRegSave>
                    </SaveButton>
                </Container>
            </>
        );
    }

    export default Clock;