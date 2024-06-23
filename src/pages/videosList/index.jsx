import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, ButtonBox, Title } from './styles';
import { Button } from '../../components/Button';

import { videoFolders } from '../../services/videosFolders'

const VideosList = () => {
    const navigate = useNavigate();

    const handleClickFolder = (folder) => {
        navigate(`/videos/${folder}`);
    };

    return (
        <Container>
            <Title>Vídeos disponiveis</Title>
            <ButtonBox>
            {videoFolders.map(folder => (
                <Button
                key={folder}
                title={`Videos sobre: ${folder}`}
                onClick={() => handleClickFolder(folder)}
                />
            ))}
            </ButtonBox>
        </Container>
    );
};

export { VideosList };
