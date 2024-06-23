import styled from 'styled-components';

export const ButtonContainer = styled.button`
  font-size: 16px;
  position: relative;
  margin: 0.5em;
  cursor: pointer;
  padding: 1em 1.5em 1em 1.5em;
  border: none;
  border-radius: 0.5em;
  background: #2987a3;
  &active{
  background: #ddd;
  }
`;


export const TextContent = styled.span`
    font-family: 'Sora';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    margin-top: 0px;
    height: 0px;
    color: #fff;
`;