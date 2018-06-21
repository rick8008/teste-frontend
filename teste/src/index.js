import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Localinfo from './Localinfo';
import Dadoscnpj from './Dadoscnpj';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

localStorage.removeItem('cnpj_data');
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Dadoscnpj />, document.getElementById('block2'));
ReactDOM.render(<Localinfo />, document.getElementById('block3'));

registerServiceWorker();
