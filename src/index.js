import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HandleDisplayContext } from './HandleDisplayContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HandleDisplayContext >

    <App />
    </HandleDisplayContext>

);

