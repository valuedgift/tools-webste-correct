// File: src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SpellChecker from './tools/SpellChecker';
import CaseConverter from './tools/CaseConverter';
import WordCounter from './tools/WordCounter';
import WebsitePageSizeChecker from './tools/WebsitePageSizeChecker';
import Contributors from './pages/Contributors';
import NotFound from './pages/NotFound';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spell-checker" element={<SpellChecker />} />
          <Route path="/case-converter" element={<CaseConverter />} />
          <Route path="/word-counter" element={<WordCounter />} />
          <Route path="/page-size-checker" element={<WebsitePageSizeChecker />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;