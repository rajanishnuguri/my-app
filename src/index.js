import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Intro from './Components/Intro';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Experience from './Components/Experience';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <div style={{display:"block"}}>
    <App />
    <Intro />
    <Skills/>
	<Education/>
	<Experience />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
