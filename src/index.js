import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const store = createStore(reducer);
const provider = (
    <Provider store = {store}>
        <App />
    </Provider>
)

ReactDOM.render(provider, document.getElementById('container-fluid'));

serviceWorker.unregister();
