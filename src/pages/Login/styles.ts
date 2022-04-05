import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
`;

const ContainerForm = styled.div`
    display: flex;
    flex: 1;

    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Text = styled.div`
    color: #033549;
    font-size: 36px;
    font-weight: bold;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;

    margin-top: 52px;
`;


const Input = styled.input`
    width: 540px;
    height: 60px;
    border-radius: 10px;
    border-width: 0;

    color: #636885;
    background-color: #F4F4F4;

    font-size: 20px;

    &{
        margin-top: 16px;
    }

    :focus{
        color: #033549;
    }
`;

const Button = styled.button`
    margin-top: 36px;
    width: 540px;
    height: 65px;
    border-radius: 10px;
    border-width: 0;

    background-color: #f0821a;
    color: #FFFFFF;
    
    font-size: 24px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        background-color: #033549;
        box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
    }     
`;



const ContainerWelcome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;


    width: 800px;
    height: 100vh;
    
    background-color: #033549;
`;


const TitleWelcome = styled.div`
    font-size: 48px;
    color: #FFFFFF;
    font-weight: bold;
    margin-left: 40px;
    margin-top: 200px;
`;

const TextWelcome = styled.div`
    font-size: 32px;
    color: #8C8C99;
    margin-left: 40px;
    margin-top: 16px;
`;

const ImageLogin = styled.img`
    display: flex;

    width: 590px;
    height: 550px;

    margin-left: -60px;
    margin-top: 50px;
    
`;



export {Container, ContainerForm, ContainerWelcome, ImageLogin, TextWelcome, TitleWelcome, Text, Input, Form, Button};