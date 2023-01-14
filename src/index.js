import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import 'modern-normalize';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='https://dmitrij-pularija.github.io/goit-react-hw-01-components'>
      <App />
    </BrowserRouter>
  </StrictMode>
);