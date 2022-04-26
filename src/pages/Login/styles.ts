import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    margin: 0 auto;

    @media (max-width: 1024px) {
        margin-top: 36px;
    }  
`;

const ContainerForm = styled.div`
    display: flex;
    flex: 1;

    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Text = styled.div`
    color: #1D254E;
    font-size: 44px;
    font-weight: bold;

    @media (max-width: 1024px) {
        font-size: 30px;
    }     
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 50px 0;     
`;


const Input = styled.input`
    height: 56px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;

    
    /*background-color: #F4F4F4;*/

    font-size: 16px;

    &{
        margin-top: 16px;
    }

    &:focus{
        color: #1D254E;
        border: 1px solid #959090;
    }



    @media (max-width: 1024px) {
        height: 40px;
        font-size: 16px;
    }  
`;

const Button = styled.button`
    margin-top: 36px;
    width: 540px;
    height: 65px;
    border-radius: 10px;
    border-width: 0;

    background-color: #F98B47;
    color: #FFFFFF;
    
    font-size: 24px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        background-color: #1D254E;
        box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
    }
    
    @media (max-width: 1024px) {
        width: 350px;
        height: 45px;
        font-size: 18px;
    }     
`;



const ContainerWelcome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;


    width: 800px;
    height: 100vh;
    
    background-color: #1D254E;

    @media (max-width: 1024px) {
        display: none !important;
    } 
`;


const TitleWelcome = styled.div`

    display: flex;
    flex-direction: column;

    font-size: 48px;
    color: #FFFFFF;
    font-weight: bold;
    margin-left: 40px;
    margin-top: 180px;

    span {
        margin-top: 8px;
    }
`;

const TextWelcome = styled.div`
    display: flex;
    flex-direction: column;

    font-size: 32px;
    color: #8C8C99;
    margin-left: 40px;
    margin-top: 16px;
`;

const ImageLogin = styled.img`
    width: 590px;
    height: 550px;

    margin-left: -60px;
    margin-top: 40px;
`;

const ImageLogo = styled.img`
    width: 40px;
    height: 40px;

    margin: 50px;
    position: absolute;
`;





export {Container, ContainerForm, ContainerWelcome, ImageLogin, TextWelcome, TitleWelcome, Text, Input, Form, Button, ImageLogo};