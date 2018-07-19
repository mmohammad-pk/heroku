import React from 'react';
import ReactDOM from 'react-dom';
import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
import 'ecqm-uberbundle/dist/uberbundle.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
