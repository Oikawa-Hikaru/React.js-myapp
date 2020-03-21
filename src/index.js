import React from 'react';
import ReactDOM from 'react-dom';
// import -- CSS
import './css/reset.css';
import './css/style.css';
import './css/hello.css';
import './css/clickbutton.css';
import './css/countup.css';
import './css/listup.css';
import './css/samplebox.css';

// import -- Components
import Hello from './components/hello';
import Clickbutton from './components/clickbutton';
import Countup from './components/countup';
import Listup from './components/listup';

// React Define constant
const helloReact = document.querySelector('#hello');
ReactDOM.render(<Hello/>, helloReact);
const clickEvent = document.querySelector('#clickbutton');
ReactDOM.render(<Clickbutton/>, clickEvent);
const countup = document.querySelector('#countup');
ReactDOM.render(<Countup/>, countup);
const listup = document.querySelector('#listup');
ReactDOM.render(<Listup/>, listup);