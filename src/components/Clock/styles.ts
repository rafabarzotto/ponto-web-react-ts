import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    
    @media (max-width: 480px) {
        margin-top: 25px;
    }

    @media (max-width: 768px) {
        margin-top: 30px;
    } 

    @media (max-width: 1024px) {
        margin-top: 30px;
    }
        
    @media (max-width: 1400px) {

    }     
    
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
    background-color: #033549;

    @media (max-width: 480px) {
        height: 60px;
        width: 54px;
        max-height: 60px;
        max-width: 54px;
    }

    @media (max-width: 768px) {
        height: 60px;
        width: 54px;
        max-height: 60px;
        max-width: 54px;
    }

    @media (max-width: 1024px) {
        height: 100px;
        width: 80px;
    }
        
    @media (max-width: 1400px) {
        height: 100px;
        width: 80px;
    }
 
`;

const Day = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 124px;
    width: 100px;
    border-radius: 8px;
    background-color: #f0821a;

    @media (max-width: 480px) {
        height: 60px;
        width: 54px;
        max-height: 60px;
        max-width: 54px;
    }

    @media (max-width: 768px) {
        height: 60px;
        width: 54px;
        max-height: 60px;
        max-width: 54px;
    }  

    @media (max-width: 1024px) {
        height: 60px;
        width: 54px;
    }
        
    @media (max-width: 1400px) {
        height: 100px;
        width: 80px;
    }     
`;

const TimeText = styled.div`
    color: #FFFFFF;
    font-size: 48px;
    font-weight: bold;

    @media (max-width: 480px) {
        font-size: 30px;
    }  

    @media (max-width: 768px) {
        font-size: 30px;
    }
    
    @media (max-width: 1024px) {

    }
        
    @media (max-width: 1400px) {

    }    
`;

const WeekText = styled.div`
    color: #FFFFFF;
    font-size: 32px;
    font-weight: bold;

    @media (max-width: 480px) {
        font-size: 12px;
    }  

    @media (max-width: 768px) {
        font-size: 14px;
    }
    
    @media (max-width: 1024px) {

    }
        
    @media (max-width: 1400px) {

    }    
`;

const MonthText = styled.div`
    margin-top: 8px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;

    @media (max-width: 480px) {
        font-size: 8px;
    }  

    @media (max-width: 768px) {
        font-size: 10px;
    }
    
    @media (max-width: 1024px) {

    }
        
    @media (max-width: 1400px) {

    }   
`;


export { Container, ContainerTime, Day, Time, WeekText, MonthText, TimeText };