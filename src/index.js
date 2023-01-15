import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import 'modern-normalize';
import './index.css';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter basename='/goit-react-hw-01-components'>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );

ReactDOM.render(
  <StrictMode>
    <BrowserRouter basename='/goit-react-hw-01-components'>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
);
