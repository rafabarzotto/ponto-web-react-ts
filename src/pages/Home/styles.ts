import styled from "styled-components";

const Content = styled.div`
    display: flex;
`;

const Container = styled.div`
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
    height: auto;
    width: 600px;
    margin: 20px;
    border: 1px solid rgba(11, 53, 73, 0.1);
    box-sizing: border-box;
    border-radius: 32px;

`;

const PunchesTitle = styled.div`
    padding: 30px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 60px;
    color: #0B3549;
`;

const PunchesList = styled.ul`
    list-style-type: none;
`;

const PunchesRow = styled.li`
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    margin-right: 50px;
    
    & + li {
        margin-top: 50px;
    }
`;

const PunchesRowIcon = styled.div`
    flex: 30%;
    display: grid;
    place-items: center;
`;

const ButtonRow = styled.div`
    display: flex;
    flex: 1;

    align-items: center;
    justify-content: center;

    margin-top: 50px;
    margin-bottom: 24px;
`;

const ButtonHistory = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    height: 40px;
    border-width: 0px;
    border-radius: 8px;
    background-color: rgba(249, 139, 71, 0.25);
`;



const ButtonText = styled.text`
    color: #F98B47;
    font-weight: bold;
    font-size: 14px;

    margin: 8px;
`;

export {Container, Title, TitleName, SpanText, 
    ContainerTimer, ContainerPunches, Content, ButtonRow,
    ButtonText, PunchesTitle, PunchesList, PunchesRow, PunchesRowIcon, ButtonHistory}
        