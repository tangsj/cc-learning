import { combineReducers } from 'redux';
import todolistReducer from './todolist.js';

const rootReducer = combineReducers({
  todolist: todolistReducer
});

module.exports = rootReducer;