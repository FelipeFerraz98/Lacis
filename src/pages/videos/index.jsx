import React, { useState } from 'react';
import { Container, ButtonBox, TabContent, VideoContainer, VideoItem, Articles, Title, ContainerArticles, TextContent } from './styles';
import { Button } from '../../components/Button';
import { useParams } from 'react-router-dom';
import { VideosFolder } from '../../services/videosFolders';
import { ArticleFolder } from '../../services/articlesFolders';
import { extractFileName } from '../../services/extractFileName';

const Videos = () => {
  const { name } = useParams();
  const videos = VideosFolder(name);
  const articles = ArticleFolder(name);

  // Divide os vídeos em grupos de 4
  const videoChunks = [];
  for (let i = 0; i < videos.length; i += 4) {
    videoChunks.push(videos.slice(i, i + 4));
  }

  const [activeTab, setActiveTab] = useState(0); // Qual guia de video ele está

  // Mudar guia de video
  const openTab = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <Container>
        <ButtonBox>
          {videoChunks.map((_, index) => (
            <Button
              key={index}
              title={`Vídeos ${index + 1}`}
              active={activeTab === index}
              onClick={() => openTab(index)}
            />
          ))}
        </ButtonBox>

        {videoChunks.map((videos, index) => (
          <TabContent key={index} active={activeTab === index}>
            <VideoContainer>
              {videos.map((video, i) => (
                <VideoItem key={i}>
                  <TextContent>{extractFileName(video)}</TextContent>
                  <video controls>
                    <source src={video} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                </VideoItem>
              ))}
            </VideoContainer>
          </TabContent>
        ))}
      </Container>

      <ContainerArticles>
        <Title>Artigos Relacionados</Title>
        <Articles>
          {articles.map((article, index) => (
            <Button
              key={index}
              title={extractFileName(article)}
              onClick={() => window.open(article, '_blank')}
            />
          ))}
        </Articles>
      </ContainerArticles>
    </>
  );
};

export { Videos };
