import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, ButtonBox, Title } from './styles';
import { Button } from '../../components/Button';

import { articlesFolders } from '../../services/articlesFolders';

const ArticlesList = () => {
    const navigate = useNavigate();

    const handleClickFolder = (folder) => {
        navigate(`/articles/${folder}`);
    };

    return (
        <Container>
            <Title>Artigos disponiveis</Title>
            <ButtonBox>
            {articlesFolders.map(folder => (
                <Button
                key={folder}
                title={`Artigos sobre: ${folder}`}
                onClick={() => handleClickFolder(folder)}
                />
            ))}
            </ButtonBox>
        </Container>
    );
};

export { ArticlesList };
