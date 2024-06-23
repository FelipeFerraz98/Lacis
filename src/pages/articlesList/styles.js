import { styled, keyframes } from 'styled-components';

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

export const Container = styled.div`
    max-width: 960px;
    margin: 20px auto;
    padding: 20px;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding-top: calc(${headerHeight} + 20px); // Adiciona o padding-top para não ficar embaixo do header no inicio.
    animation: ${fadeIn} 1.5s forwards;

    @media (max-width: 768px) {
        padding-top: calc(${headerHeight} + 10px); // Ajusta para dispositivos móveis
    }
    
`;

export const ButtonBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding: 20px;
    animation: ${fadeIn} 1.5s forwards;
`;

export const Title = styled.h1`
    font-family: 'Sora';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 10px;
    line-height: 60px;

    color: #000;

    @media screen and (max-width: 768px) {
        font-size: 48px;
        width: 90%;
        margin: 0 auto;
        margin-top: 120px;
        text-align: center;
    }
`;