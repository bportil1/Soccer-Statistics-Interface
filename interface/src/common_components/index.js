import React from 'react';
import ReactDOM from 'react-dom/client';
import Headline from './Headline.js';
import PgNavBar from './PgNavBar.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Headline />
    <PgNavBar />
  </React.StrictMode>
);

