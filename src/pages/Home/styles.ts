import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
`;

const ContainerTimer = styled.div`
`;

const Title = styled.div`
    font-size: 28px;
    color: #0B3549;

    
    @media (max-width: 768px) {
        font-size: 20px;
    } 
`;

const TitleName = styled.div`
    font-size: 32px;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const SpanText = styled.div`
    font-size: 16px;
    color: #8D91A5;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const ContainerPunches = styled.div`
    height: 500px;
    margin: 20px;
    border: 1px solid rgba(11, 53, 73, 0.1);
    box-sizing: border-box;
    border-radius: 32px;
`;

const PunchesTitle = styled.div`
    padding: 30px;
    width: 179px;
    height: 23px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 60px;
    color: #0B3549;
`;

const PunchesList = styled.ul`

`;

const PunchesRow = styled.li`


`;

const PunchesRowIcon = styled.div`
    flex: 30%;
    display: grid;
    place-items: center;
`;

const PunchesName = styled.div`
  
`;

export {Container, Title, TitleName, SpanText, 
    ContainerTimer, ContainerPunches, 
    PunchesTitle, PunchesList, PunchesRow, PunchesRowIcon, PunchesName};