import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './src/store';
import App from './src';

//support IE11
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);