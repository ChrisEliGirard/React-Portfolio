import './components/styles/out.css';
import { Document, Page, pdfjs } from 'react-pdf';
import Portfolio from './components/PortfolioContainer'

function App() {
  return (
    <div className="portfolio">
      <Portfolio />
    </div>
  );
}

export default App;
