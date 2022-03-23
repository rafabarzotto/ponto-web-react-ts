import styled from "styled-components";

const Container = styled.div`

`;

const Header = styled.div`
    height: 50px;
    display: flex;
    justify-content: flex-end;
    padding: 10px;
`;


const ShortcutsMenu = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70px;
    align-items: center;
    margin-right: 10px;
`;

export { Container, ShortcutsMenu, Header };