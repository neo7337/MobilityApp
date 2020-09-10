import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import "@elastic/charts/dist/theme_light.css";
import '@elastic/eui/dist/eui_theme_light.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
