import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import App from './Components/App';
import './Content/index.css';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore(); //can pass initial state here or in reducer default

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();