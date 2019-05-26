import { combineReducers } from 'redux';
import loginFormReducer from './loginFormReducer';
import loginReducer from './loginReducer';
import newsReducer from './newsReducer';

export default combineReducers({ loginForm: loginFormReducer, login: loginReducer, news: newsReducer });
