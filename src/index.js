import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {userReducer} from './reducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {watchLoadRepoData} from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
    repositories: userReducer
}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchLoadRepoData);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
