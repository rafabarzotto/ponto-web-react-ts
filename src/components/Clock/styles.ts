import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 48px;
`;

const ContainerTime = styled.div`
    flex: 1;
    display: flex;
`;

const Time = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100px;
    height: 124px;
    margin-left: 4px;
    border-radius: 8px;
    background-color: #1D254E;
`;

const Day = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    width: 100px;
    height: 124px;
    border-radius: 8px;
    background-color: #F98B47;
`;

const TimeText = styled.text`
    color: #FFFFFF;
    font-size: 48px;
    font-weight: bold;
`;

const WeekText = styled.text`
    color: #FFFFFF;
    font-size: 32px;
    font-weight: bold;
`;

const MonthText = styled.text`
    margin-top: 8px;

    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
`;

const SaveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 124px;
    height: 60px;
    border-width: 0px;
    border-radius: 8px;
    background-color: #1D254E;

    margin-top: 40px;
`;

const TextButton = styled.text`
    font-size: 14px;
    font-weight: bold;
    color: #FFFFFF;
    margin-right: 8px;
`;


export {Container, ContainerTime, Day, Time, WeekText, MonthText, TimeText, SaveButton, TextButton};