import styled from 'styled-components';

const LoaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #F8F8F8AD;
`

const Loader = styled.div`
    left: 50%;
    top: 30%;
    z-index: 1000;
    position: absolute;
`

export { LoaderContainer, Loader };