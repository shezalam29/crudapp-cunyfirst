//  import { applyMiddleware, createStore, combineReducers } from 'redux';
//  import { createLogger } from 'redux-logger';
//  import thunk from 'redux-thunk';

//  import * as reducers from "./reducers";
//  const reducer = combineReducers(reducers);

//  // Construct Redux store 
//  const logger = createLogger({ collapsed: true });
//  //const middleware = applyMiddleware(thunkMiddleware, logger);
//  const store = createStore(reducer, applyMiddleware(thunk,logger));

//  // Export store by default, provided to and injected within entire application
//  export default store;

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import * as reducers from "./reducers";
const reducer = combineReducers(reducers);

// Construct Redux store 
const logger = createLogger({ collapsed: true });
//const middleware = applyMiddleware(thunkMiddleware, logger);
const store = createStore(reducer, applyMiddleware(thunk,logger));

// Export store by default, provided to and injected within entire application
export default store;

