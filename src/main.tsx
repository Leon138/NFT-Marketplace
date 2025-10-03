import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router';
import App from './App.tsx';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Router>
    <App />
  </Router>,
);
