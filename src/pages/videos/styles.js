import styled, { keyframes } from 'styled-components';

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

    @media (max-width: 768px) {
        padding-top: calc(${headerHeight} + 10px); // Ajusta para dispositivos móveis
    }
`;

export const ButtonBox = styled.div`
    margin-bottom: 20px;
    animation: ${fadeIn} 1.5s forwards
`;

export const TabContent = styled.div`
    display: ${props => (props.active ? 'block' : 'none')};
    padding: 20px;
    border-top: 1px solid #ddd;
`;

export const VideoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    animation: ${fadeIn} 1.5s forwards
`;

export const VideoItem = styled.div`
    width: 45%;
    margin-bottom: 20px;
    text-align: center;

    video {
        width: 100%;
    }
`;

export const ContainerArticles = styled.div`
    max-width: 960px;
    margin: 20px auto;
    padding: 20px;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Articles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
`;

export const Title = styled.h1`
    font-family: 'Sora';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
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

export const TextContent = styled.p`
    font-family: 'Sora';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;

    animation: ${fadeIn} 2.5s forwards;

    color: #000;
`;