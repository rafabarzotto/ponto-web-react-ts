import styled, { css } from "styled-components";

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: start;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: start;
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: start;
    }
        
    @media (max-width: 1400px) {

    }     
   
`;

const Container = styled.div`
 
`;

const ContainerSaveButton = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    // align-items: flex-end;
    // margin-right: 290px;   
`;

const SaveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 55px;
    border-width: 0px;
    border-radius: 8px;
    background-color: #033549;
    margin-top: 40px;

    &:hover {
        cursor: pointer;
        background-color: #f0821a;
        box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
    }
    
    @media (max-width: 768px) {
        width: 100px;
        height: 45px;
    } 
`;

const TextButton = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #FFFFFF;
    margin-left: 8px;

    @media (max-width: 768px) {
        font-size: 12px
    }    
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

    width: auto;
    margin-top: 30px;
    padding: 1%;
    border: 1px solid rgba(11, 53, 73, 0.1);
    box-sizing: border-box;
    border-radius: 8px;

    @media (min-width: 800px) {
        margin-left: 0px;
        width: 400px;
    }

    @media (min-width: 1024px) {
        margin-left: 30px;
        width: 500px;
    }    

    @media (min-width: 1367px) {
        margin-left: 80px;
        width: 500px;
    }

    @media (max-width: 768px) {
        display: none !important;
    } 
    
    
`;

const PunchesTitle = styled.div`
    padding: 20px;
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
    justify-content: space-evenly;
    align-items: center;
    padding-right: 30px;
    & + li {
        margin-top: 20px;
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
    margin-top: 40px;
    margin-bottom: 20px;
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

    &:hover {
        cursor: pointer;
        background-color: #033549;
    }       
`;


const ButtonText = styled.div`
    color: #F98B47;
    font-weight: bold;
    font-size: 14px;
    margin: 8px;
`;



// aqui

const Table = styled.table`
    border-collapse: collapse;
    border: none;
    width: 100%;
`;

const Thead = styled.thead`
    background-color: transparent;
    transition: all 0.25s ease;
    border-radius: 10px;
`;

const Tr = styled.tr`
    cursor: auto;

    // &:nth-child(odd) {
    //     background-color: #f9f9f9;
    // }
`;

const Th = styled.th`
    background-color: #f1f1f1;
    padding: 12px;
    font-weight: 500;
    text-align: left;
    font-size: 14px;
    color: #2c3e50;

    &:first-child {
        border-top-left-radius: 15px;
    }

    &:last-child {
        border-top-right-radius: 15px;
    }

`;

const Tbody = styled.tbody`

`;

const Td = styled.td`
    padding: 12px;
    font-size: 14px;
    color: grey;
`;


const TableFooter = styled.div`
    background-color: #f1f1f1;
    padding: 8px 0px;
    width: 100%;
    font-weight: 500;
    text-align: left;
    font-size: 16px;
    color: #2c3e50;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    border: none;
    padding: 7px 14px;
    border-radius: 10px;
    cursor: pointer;
    margin-right: 4px;
    margin-left: 4px;
    color: #2c3e50;
    background: #f9f9f9;

    ${props => props.disabled && css`
        color: white;
        background: #f0821a;
    `}  
`;


export {
    Container, Title, TitleName, SpanText, ContainerPunches, Content, ButtonRow,
    ButtonText, PunchesTitle, PunchesList, PunchesRow, PunchesRowIcon, ButtonHistory, ContainerSaveButton, SaveButton, TextButton,
    Table, Thead, Tr, Th, Tbody, Td
}
