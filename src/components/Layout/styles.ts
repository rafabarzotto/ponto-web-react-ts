import styled from 'styled-components';

export const Layout = styled.main`
    min-height: 768px;
    display: grid;
    grid-template-areas: "sidebar body";
    grid-template-columns: auto 1fr;
`

export const Body = styled.div`
    grid-area: body;
    margin-left: 300px;
`