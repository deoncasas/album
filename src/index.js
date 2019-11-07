import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers  } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddelware from 'redux-thunk';
import './assets/scss/custom.scss';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { searchVideos } from './reducer/searchVideoReducer';
import { requestVideo } from './reducer/requestVideoReducer';

const logger = createLogger();
const rootReducer = combineReducers({
    searchVideos,
    requestVideo,
});
const store = createStore(rootReducer, applyMiddleware(thunkMiddelware, logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
