import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ThemeContext from './contexts/ThemeContext';
import './generalCSS/reset.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ThemeContext>
            <App />
        </ThemeContext>
    </BrowserRouter>
);


