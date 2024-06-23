
// Adicione o NOME das suas pastas de vídeos aqui para o menu de videos
// USE O MESMO NOME DE PASTA PARA VIDEOS E ARTIGOS!
export const videoFolders = ['videos1', 'videos2', 'videos3','videos1', 'videos2', 'videos3','videos1', 'videos2', 'videos3' ]; 

// Para importar uma pasta nova em importFolder:
// adicione um novo case com o NOME da pasta, exemplo case 'videos1'
// após adicionar o case adiciona um return importAll(require.context('../assets/videos/videos1', false, /\.mp4$/));
// dentro das aspas de string tera ../assets/videos/(neste lugar você coloca o nome da pasta, como o exemplo era videos1 foi colocado videos1)
// código montado com os exemplos:

// case 'videos1':
//     return importAll(require.context('../assets/videos/videos1', false, /\.mp4$/));

const importFolder = (folder) => {
  switch (folder) {
    case 'videos1':
      return importAll(require.context('../assets/videos/videos1', false, /\.mp4$/));
    case 'videos2':
      return importAll(require.context('../assets/videos/videos2', false, /\.mp4$/));
    default:
      return [];
  }
};


// Função para retornar todos os itens dentro da pasta
function importAll(videosInPaste) {
  return videosInPaste.keys().map(videosInPaste);
}


const VideosFolder = (folder) => {
  let videos = []
  try {
    videos = importFolder(folder)
  } catch (error) {
    console.error(`Erro ao carregar vídeos da pasta ${folder}:`, error);
  }

  return videos;
}

export {VideosFolder};
