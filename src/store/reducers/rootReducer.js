import { combineReducers } from 'redux';
import loginFormReducer from './loginFormReducer';
import authReducer from './authReducer';
import newsReducer from './newsReducer';

export default combineReducers({ loginForm: loginFormReducer, auth: authReducer, news: newsReducer });
