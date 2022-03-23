import styled from "styled-components";

const Container = styled.nav`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 10px 20px;
`;

const ShortcutsMenu = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75px;
    align-items: center;
    margin-right: 60px;
`;

export { Container, ShortcutsMenu };