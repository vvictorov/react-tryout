import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import {createEpicMiddleware} from 'redux-observable';
import {allEpics} from './epics';

const epicMiddleware = createEpicMiddleware(allEpics);

const store = createStore(allReducers, applyMiddleware(epicMiddleware));

store.dispatch({type: 'FETCH_ACTIVE_TASKS'});

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
