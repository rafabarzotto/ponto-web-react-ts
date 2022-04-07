import styled from "styled-components";

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;
    @media (max-width: 768px) {
        flex-direction: column;
    }     
`;

const Container = styled.div`

`;

const ContainerSaveButton = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 188px;
    @media (max-width: 768px) {
        width: auto;
    }      
`;

const SaveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 65px;
    border-width: 0px;
    border-radius: 8px;
    background-color: #033549;
    margin-top: 40px;

    &:hover {
        cursor: pointer;
        background-color: #f0821a;
        box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
    }    
`;

const TextButton = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #FFFFFF;
    margin-left: 8px;
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
    width: 600px;
    // min-width: 600px;
    margin: 20px;
    border: 1px solid rgba(11, 53, 73, 0.1);
    box-sizing: border-box;
    border-radius: 32px;
    @media (max-width: 768px) {
        max-width: 350px;
        margin: 0px;
        margin-top: 30px;
    }      
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


const ButtonText = styled.div`
    color: #F98B47;
    font-weight: bold;
    font-size: 14px;
    margin: 8px;
`;

export {
    Container, Title, TitleName, SpanText, ContainerPunches, Content, ButtonRow,
    ButtonText, PunchesTitle, PunchesList, PunchesRow, PunchesRowIcon, ButtonHistory, ContainerSaveButton, SaveButton, TextButton
}
