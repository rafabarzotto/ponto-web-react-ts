import styled from 'styled-components';

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    & > div:not(:last-child) {
        top: 50%;
        left: 50%;
        margin: 0;
        position: absolute;
        transform: translate(-50%, -50%);
    }    
`;

const LoadingText = styled.div`
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -60%);

    @media (max-width: 768px) {
        // display: none !important;
    }
`

export { Overlay, LoadingText };