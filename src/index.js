import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

// import PropTypes from 'prop-types';
// import ReactDOM from "react-dom";
// import paintings from "./user.json";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(painting, document.querySelector('#root'));
