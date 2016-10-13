import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './home';
import './index.css';
import rootReducer from './rootReducer'
import { Actions } from './subreddit'

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    )
)

store.dispatch(Actions.fetchPosts('reactjs'))

const renderApp = () => ReactDOM.render(
  <Home state={ store.getState() } store={ store } />,
  document.getElementById('root')
);

store.subscribe(renderApp)

renderApp()
