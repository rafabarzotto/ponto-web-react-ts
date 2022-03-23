import Clock from '../../components/Clock';
import Layout from '../../components/Layout';

import { Container, ContainerTimer, SpanText, Title, TitleName } from './styles';

function HomePage() {
    return (
        <Layout>
        <Container>

            <ContainerTimer>
                <Title>Olá, <TitleName>Leonardo</TitleName></Title><br></br>
                <SpanText>Bem-vindo de volta à nossa plataforma de gestão do ponto</SpanText>
            </ContainerTimer>

            <Clock></Clock>

        </Container>
        </Layout>
    );
}

export default HomePage;