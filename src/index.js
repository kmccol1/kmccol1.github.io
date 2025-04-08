//Date: 7 April 2025
//File name: index.js
//Author: Kyle McColgan
//Description: Main entry point for the website.

import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18+...
import App from './App'; // The main app component.
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root element...

//Render the root element...
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);
