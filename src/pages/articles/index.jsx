import React from 'react';
import { Container, Articles, Title } from './styles';
import { Button } from '../../components/Button';
import { useParams } from 'react-router-dom';
import { ArticleFolder } from '../../services/articlesFolders';
import { extractFileName } from '../../services/extractFileName';

const Article = () => {
  const { name } = useParams();
  const articles = ArticleFolder(name);

  return (
      <Container>
        <Title>Artigos de {name}</Title>
        <Articles>
          {articles.map((article, index) => (
            <Button
              key={index}
              title={extractFileName(article)}
              onClick={() => window.open(article, '_blank')}
            />
          ))}
        </Articles>
      </Container>
  );
};

export { Article };
