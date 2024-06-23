import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button';

import { Container, Title, TextContent, ButtonBox, Background } from './styles';

const Home = () => {

    const navigate = useNavigate();

    const handleClickVideos = () => {
        navigate('/videos');
      };
    
      const handleClickArtigos = () => {
        navigate('/articles');
      };

    return (<>
        <Background/>
          <Container>
              <div>
                <Title>
                    Bem-vindo à Lacis! <br />
                </Title>
                <TextContent>
                Body text for your whole article or post. <br />
                We'll put in some lorem ipsum to show how a filled-out page might look: <br />
                </TextContent>
              </div>       
          </Container>
          <ButtonBox>
            <Button title={'Videos!'} onClick={handleClickVideos}></Button>
            <Button title={'Artigos!'} onClick={handleClickArtigos}></Button>
          </ButtonBox>       
      </>
    );
}

export { Home }