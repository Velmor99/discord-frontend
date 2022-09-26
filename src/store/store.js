import { configureStore } from '@reduxjs/toolkit';
// import {composeWithDevTools} from 'redux-devtools-extension';
import {combineReducers, applyMiddleware} from 'redux';
import authReducer from './reducers/auth.reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  auth: authReducer,
})

const store = configureStore({reducer: rootReducer})

export default store;