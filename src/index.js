import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';
import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges'
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';


const container = document.getElementById("app");

ReactDOM.render(<Badges 
    // firstName ="Jose" 
    // lastName ="Vásquez" 
    // avatarUrl ="https://www.gravatar.com/avatar?d=identicon"
    // jobTitle ="Microbiologist" 
    // twitter ="@jvasquez" 
    />, container);



// const element = document.createElement('h1');
// element.innerText = 'Hello, platzi!';

// const container = document.getElementById('app');

// container.appendChild(element)
