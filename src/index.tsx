import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/stylesheets/bootstrap.css';
import './assets/stylesheets/style.css';
import './assets/stylesheets/responsive.css';
import './assets/stylesheets/colors/color1.css';
import './assets/stylesheets/animate.css';



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


