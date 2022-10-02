import { configureStore } from '@reduxjs/toolkit';
// import {composeWithDevTools} from 'redux-devtools-extension';
import {combineReducers, applyMiddleware} from 'redux';
import authReducer from './reducers/auth.reducer';
import alertReducer from './reducers/alert.reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer
})

const store = configureStore({reducer: rootReducer})

export default store;