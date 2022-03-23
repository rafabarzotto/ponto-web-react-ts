import styled from 'styled-components';

export const Layout = styled.main`
    display: grid;
    grid-template-areas: "sidebar body";
    grid-template-columns: 20rem 1fr;
    min-height: 100vh;
`

export const Body = styled.div`
    grid-area: body;
`