import { createStore, applyMiddleware } from 'redux';
import logger from 'rexux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;