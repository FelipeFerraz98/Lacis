import styled, { keyframes } from 'styled-components';

import backgroundImg from '../../assets/background/homeBackground.jpg'

const headerHeight = '100px';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Background = styled.div`
    background-image: url("${backgroundImg}");
    position: fixed;
    top: 50%;
    left: 50%;
    width: 102vw;
    height: 100vh;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: -1;
`;

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: calc(${headerHeight} + 20px); // Adiciona o padding-top para não ficar embaixo do header no inicio.
    
    @media screen and (max-width: 768px) {
        padding-top: calc(${headerHeight} + 10px); // Ajusta para dispositivos móveis
        flex-direction: column; 
        max-width: 90%;
        margin-top: 80px;
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 8em;
    margin-bottom: 5em;
`;

export const Title = styled.h1`
    font-family: 'Sora';
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    width: 620px;
    margin-top: 240px;
    margin-bottom: 20px;
    line-height: 60px;

    animation: ${fadeIn} 1.5s forwards;

    color: #fff;

    @media screen and (max-width: 768px) {
        font-size: 48px;
        width: 90%;
        margin: 0 auto;
        margin-top: 120px;
        text-align: center;
    }
`;

export const TextContent = styled.p`
    font-family: 'Sora';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 30px;
    width: 620px;

    animation: ${fadeIn} 2.5s forwards;

    color: #fff;

    @media screen and (max-width: 768px) {
        font-size: 24px;
        width: 90%;
        text-align: center;
        margin: 0 auto;
    }
`;