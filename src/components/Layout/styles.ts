import styled from 'styled-components';

const Layout = styled.div`
    display: grid;
    // grid-template-areas: "sidebar body";
    grid-template-columns: 20rem 1fr;
    grid-template-rows: 100px 1fr;
    min-height: 100vh;
    transition: width .2s ease-in;  

    @media (max-width: 480px) {
        grid-template-columns: 5rem 1fr;
        grid-template-rows: auto 1fr auto;
    }

    @media (max-width: 768px) {
        grid-template-columns: 5rem 1fr;
        grid-template-rows: auto 1fr auto;
    }
   
   
`
const Header = styled.header`
    grid-area: 1 / 2 / 2 / 3;
    padding: 20px 20px 30px 0px;  
`

const Aside = styled.aside`
    grid-area: 1 / 1 / 4 / 2;
`

const Main = styled.main`
    grid-area: 2 / 2 / 3 / 3;
    @media (max-width: 768px) {
        margin: 10px;
    }     
`

const Footer = styled.footer`
    grid-area: 3 / 2 / 4 / 3;
`

export { Layout, Header, Aside, Main, Footer};