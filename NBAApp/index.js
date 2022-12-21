import React from 'react';
import { AppRegistry } from 'react-native';
import App from './app/index';
import Auth from './app/components/auth'
import { name as appName } from './app.json';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';

import reducers from './app/store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

const createStoreWithMiddleware = createStore(reducers, composeEnhancers(
    applyMiddleware(promiseMiddleware)
))

const appRedux = () => (
    <Provider store={createStoreWithMiddleware}>
        <Auth />
    </Provider>
)

AppRegistry.registerComponent(appName, () => appRedux);
