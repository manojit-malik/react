import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Assignment2a from './Assignment2a';
import Assignment2b from './Assignment2b';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Assignment2a />
    <Assignment2b wish="I want to be a cricketer" />
    <Assignment2b wish="I want to be a God" />
    <Assignment2b wish="I want my elo in chess to be 2000+" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();