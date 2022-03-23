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

const Title = styled.text`
    font-size: 28px;
    color: #0B3549;

    font-family: 'Roboto';
`;

const TitleName = styled.text`
    font-size: 32px;
    font-weight: bold;

    font-family: 'Roboto', sans-serif;
`;

const SpanText = styled.text`
    font-size: 16px;
    color: #8D91A5;

    font-family: 'Roboto';
`;

export {Container, Title, TitleName, SpanText, ContainerTimer};