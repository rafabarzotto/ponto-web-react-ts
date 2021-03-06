import React, { useState, useEffect, FC } from 'react';

import {
    Container, ContainerTime, Day,
    Time, WeekText, TimeText, MonthText
} from './styles';

const Clock: FC<any> = (): JSX.Element => {

    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [dayWeek, setDayWeek] = useState('');
    const [dayMonth, setDayMonth] = useState('');

    const days = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
    const months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

    // Função para formatar 1 em 01
    function zeroFill(n: number) {
        return ('0' + n).slice(-2);
    }

    const refreshClock = () => {
        const now = new Date();

        let day = days[now.getDay()];
        let date = zeroFill(now.getUTCDate()) + ' ' + months[now.getMonth()];

        setDayWeek(day);
        setDayMonth(date);
        setHours(zeroFill(now.getHours()));
        setMinutes(zeroFill(now.getMinutes()));
        setSeconds(zeroFill(now.getSeconds()));
    }

    useEffect(() => {
        // Execução a cada segundo
        const timerId = setInterval(refreshClock, 1000);

        return function cleanup() {
            clearInterval(timerId);
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
            </Container>
        </>
    );
}

export default Clock;