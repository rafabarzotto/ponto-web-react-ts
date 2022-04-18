import styled, { css } from "styled-components";

const DivTable = styled.div`
    padding-right: 3%;
`;

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

    &:nth-child(odd) {
        background-color: #f9f9f9;
    }
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

export { DivTable, Table, Thead, Tr, Th, Tbody, Td, TableFooter, Button };

