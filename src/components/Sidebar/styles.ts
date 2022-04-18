import styled, { css } from "styled-components";

const Container = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 250px;
    height: 100%;
    margin: 0px;
    background-color: #033549;
    box-sizing: border-box;
    transition: width .2s ease-in;  

    @media (max-width: 768px) {
        width: 70px;
    }

`;

const Body = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
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
    margin-top: 20px;

    &:hover {
        cursor: pointer;
        background-color: #f0821a;
    }

    &.active {
        cursor: pointer;
        background-color: #f0821a;
    }   
`;

const RowLogout = styled.li`
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
    margin-top: 20px;

    &:hover {
        cursor: pointer;
        background-color: #f0821a;
    }    
`

const Icon = styled.div`
    flex: 30%;
    display: grid;
    place-items: center;
`;

const Title = styled.div`
    flex: 70%;
    font-size: 16px;
    @media (max-width: 768px) {
        display: none !important;
    }  
`;

const Image = styled.image`
    width: 56px;
    height: 56px;        
`;


const TopSection = styled.div`
    margin-top: 40px;
    margin-bottom: 50px;
    position: relative;
    display: flex;
    justify-content: center;
`;

const TopSectionLogo = styled.div`
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;     
`;

const TopSectionLogoImg = styled.img`
    max-width: 80%;   
    @media (max-width: 768px) {
        display: none;
        transition: all 0.3s ease-in-out;
    }     
`;

const TopSectionLogoMobileImg = styled.img`
    @media (min-width: 768px) {
        display: none;
    }
  
    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
        max-width: 100%;
        max-height: 100%;        
        transition: all 0.3s ease-in-out;
    }      
`;

const ButtonLogout = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    
    background-color: #033549;
    border-radius: 4px;
    border-width: 1px;
    border-color: #ffffff;

    width: 60px;
    height: 80px;

    color: #ffffff;

    margin-bottom: 200px;
`;

const ButtonText = styled.div`
    color: #FFFFFF;
    font-size: 14px;
    font-weight: bold;

    margin-top: 16px;

    @media (max-width: 768px) {
        display: none !important;
    }
`;


export { Container, List, Row, RowLogout, Icon, Title, Image, TopSectionLogoMobileImg, TopSection, TopSectionLogo, TopSectionLogoImg, ButtonLogout, ButtonText, Body };