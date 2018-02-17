import React from 'react';

import { render } from 'react-dom';

import { Provider } from 'react-redux';

import { createStore } from 'redux';

import { DashboardApp } from './reducers/DashboardApp';

import App from './containers/App';

let store = createStore(DashboardApp,{});

render(
    <Provider store={store}>
    <App name='DashboardApp'/>
    </Provider>
    , document.getElementById('root'));
