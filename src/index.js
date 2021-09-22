import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import './content/index.css';
import registerServiceWorker from './registerServiceWorker';
import { loadCharacters } from './actions/characterActions';

const store = configureStore(); // can pass initial state here or in reducer default
store.dispatch(loadCharacters());

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);

registerServiceWorker();

