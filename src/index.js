import React from 'react';
import ReactDOM from 'react-dom';
import './component/index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import configureStore from './store'
import { BrowserRouter } from "react-router-dom";
import Routes from './routes'

ReactDOM.render(
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
,
document.getElementById('root'));
registerServiceWorker();