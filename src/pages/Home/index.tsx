import Clock from '../../components/Clock';
import Layout from '../../components/Layout';

import { Container, ContainerPunches, ContainerTimer, PunchesList, PunchesName, PunchesRow, PunchesTitle, SpanText, Title, TitleName } from './styles';

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

            <ContainerPunches>
                <PunchesTitle>Atividades Recentes</PunchesTitle>
                <PunchesList>
                    <PunchesRow>
                        <PunchesName>
                            asdfasdf
                        </PunchesName>                        
                    </PunchesRow>
                </PunchesList>
            </ContainerPunches>
        </Layout>
    );
}

export default HomePage;