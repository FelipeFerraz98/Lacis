import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import { GlobalStyle } from './styles/global';
import { Header } from './components/Header'
// import { Footer } from './components/Footer'

import { Videos } from './pages/videos'
import { Home } from './pages/home';
import { VideosList } from './pages/videosList';
import { ArticlesList } from "./pages/articlesList";
import { Article } from "./pages/articles";

function App() {
  return (
    <Router>
     <GlobalStyle />
     <Header />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<VideosList />} />
        <Route path="/videos/:name" element={<Videos />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:name" element={<Article />} />
     </Routes >
    </Router>
  );
}

export default App;