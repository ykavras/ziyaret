import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

const middleWares = [ReduxThunk];

const enhancerList = [applyMiddleware(...middleWares)];

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

const composedEnhancer = compose(...enhancerList);


const store = createStore(reducers, {}, composedEnhancer);

export default store;
