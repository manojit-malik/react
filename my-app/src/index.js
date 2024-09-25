import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import {Ex5} from './Ex5';
import Ex6 from './Ex6';
import Ex7 from './Ex7';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ex1 />
    <Ex2 />
    
    <Ex5 msg="Happy Dipawali"/>
    <Ex5 msg="HeHeHeHe"/>

    <Ex6 />
    <Ex7 wish="I want to be a cricketer" />
    <Ex7 wish="I want to be a God" />
    <Ex7 wish="I want my elo in chess to be 2000+" />
    <App />

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();