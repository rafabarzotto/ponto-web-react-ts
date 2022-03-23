import styled from "styled-components";

const Container = styled.div`
    width: 250px;
    height: 100%;
    margin: 0px;
    background-color: #1D254E;
    // position: fixed;
    box-sizing: border-box;
    transition: width .2s ease-in;    
`;


const List = styled.ul`
    height: auto;
    padding: 0;
    width: 100%;
`;

const Row = styled.li`
    width: 100%;
    height: 60px;
    list-style-type: none;
    margin: 0%;
    display: flex;
    flex-direction: row;
    color: #FFFFFF;
    justify-content: center;
    align-items: center;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        background-color: #8D91A5;
    }
`;

const Icon = styled.div`
    flex: 30%;
    display: grid;
    place-items: center;
`;

const Title = styled.div`
    flex: 70%;
    font-size: 16px;
`;

const Image = styled.image`
    width: 56px;
    height: 56px;
`;

const TopSection = styled.div`
    margin-top: 30px;
    margin-bottom: 50px;
    position: relative;
    display: flex;
    justify-content: center;
`;

const TopSectionLogo = styled.div`
    width: 40px;
    height: 40px;
    overflow: hidden;
`;

const TopSectionLogoImg = styled.img`
    max-width: 100%;
    max-height: 100%;
`;


// .side-menu.inactive{
//     width: 80px;
// }

// .side-menu .top-section{
//     position: relative;
// }

// .side-menu .top-section .logo{
//     width: 40px;
//     height: 40px;
//     overflow: hidden;
//     display: inline-block;
// }
// .side-menu .top-section .logo img{
//     max-width: 100%;
//     max-height: 100%;
// }

export {Container, List, Row, Icon, Title, Image, TopSection, TopSectionLogo, TopSectionLogoImg};