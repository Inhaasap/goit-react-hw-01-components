// main library
import React from 'react';
import ReactDOM from 'react-dom/client';

// App Component
import { App } from 'components/App';

// Styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
