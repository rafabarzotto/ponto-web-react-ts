import styled from 'styled-components';

const Layout = styled.div`
    display: grid;
    // grid-template-areas: "sidebar body";
    grid-template-columns: 20rem 1fr;
    grid-template-rows: 80px 1fr 80px;
    min-height: 100vh;
    transition: width .2s ease-in;  

    @media (max-width: 768px) {
        grid-template-columns: 6rem 1fr;
        grid-template-rows: auto 1fr auto;
    }
`
const Header = styled.header`
    grid-area: 1 / 2 / 2 / 3;
    margin: 30px;
`

const Aside = styled.aside`
    grid-area: 1 / 1 / 4 / 2;
`

const Main = styled.main`
    grid-area: 2 / 2 / 3 / 3;
    margin: 30px;
`

const Footer = styled.footer`
    grid-area: 3 / 2 / 4 / 3;
`

// export const Body = styled.div`
//     grid-area: body;
// `

export { Layout, Header, Aside, Main, Footer};