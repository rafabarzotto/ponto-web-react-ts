import React, { useContext, useEffect, useState } from 'react';
import LoginImage from '../../assets/login.png';
import { AuthContext } from '../../context/AuthContext';
import { Container, ContainerForm, ContainerWelcome, ImageLogin, TextWelcome, TitleWelcome, Text, Input, Form, Button } from './styles';

interface LoginFormData {
    username: string;
    password: string;
}
function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { authenticated, login } = useContext(AuthContext);

    console.log(authenticated);

    async function handleLogin(event: any) {
        event.preventDefault();
        await login({ username: username, password: password });
    }

    return (
        <Container>
            <ContainerForm>
                <Text>Entrar</Text>
                <Form onSubmit={handleLogin}>
                    <Input type="text" placeholder='Usuário' autoFocus value={username} onChange={(e) => setUsername(e.target.value)} />
                    <Input type="password" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button type='submit'>Entrar</Button>
                </Form>
            </ContainerForm>
            <ContainerWelcome>
                <TitleWelcome>Olá, seja {`\n`}bem vindo.</TitleWelcome>
                <TextWelcome>Esta é nossa plataforma {`\n`}para gestão de registros do ponto</TextWelcome>
                <ImageLogin src={LoginImage} />
            </ContainerWelcome>
        </Container>
    );
}

export default Login;