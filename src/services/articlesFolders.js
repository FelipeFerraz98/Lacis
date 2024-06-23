
// Adicione o NOME das suas pastas de artigos aqui para o menu de artigos
// USE O MESMO NOME DE PASTA PARA VIDEOS E ARTIGOS!
export const articlesFolders = ['videos1', 'videos2', 'videos3','videos1', 'videos2', 'videos3','videos1', 'videos2', 'videos3' ]; 

// Para importar uma pasta nova em importFolder:
// adicione um novo case com o NOME da pasta, exemplo case 'videos1'
// após adicionar o case adiciona um return importAll(require.context('../assets/articles/videos1', false, /\.pdf$/));
// dentro das aspas de string tera ../assets/videos/(neste lugar você coloca o nome da pasta, como o exemplo era videos1 foi colocado videos1)
// código montado com os exemplos:

// case 'videos1':
//     return importAll(require.context('../assets/articles/videos1', false, /\.pdf$/));

const importFolder = (folder) => {
  switch (folder) {
    case 'videos1':
      return importAll(require.context('../assets/articles/videos1', false, /\.pdf$/));
    case 'videos2':
      return importAll(require.context('../assets/articles/videos2', false, /\.pdf$/));
    default:
      return [];
  }
};


// Função para retornar todos os itens dentro da pasta
function importAll(videosInPaste) {
  return videosInPaste.keys().map(videosInPaste);
}


const ArticleFolder = (folder) => {
  let articles = []
  try {
    articles = importFolder(folder)
  } catch (error) {
    console.error(`Erro ao carregar artigos da pasta ${folder}:`, error);
  }

  return articles;
}

export {ArticleFolder};
