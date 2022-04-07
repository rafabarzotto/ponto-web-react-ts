import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    
    @media (max-width: 768px) {
        margin-top: 30px;
    }     
`;

const ContainerTime = styled.div`
    flex: 1;
    display: flex;
    width: 600px;
    @media (max-width: 768px) {
        width: auto;
    }      
`;

const Time = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100px;
    height: 124px;
    margin-left: 4px;
    border-radius: 8px;
    background-color: #033549;

    @media (max-width: 768px) {
        width: 50px;
        height: 60px;
        margin-left: 4px;
    }     
`;

const Day = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    width: 100px;
    height: 124px;
    border-radius: 8px;
    background-color: #f0821a;

    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
    }     
`;

const TimeText = styled.div`
    color: #FFFFFF;
    font-size: 48px;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 30px;
    }      
`;

const WeekText = styled.div`
    color: #FFFFFF;
    font-size: 32px;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 22px;
    }    
`;

const MonthText = styled.div`
    margin-top: 8px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 12px;
    }    
`;


export { Container, ContainerTime, Day, Time, WeekText, MonthText, TimeText };