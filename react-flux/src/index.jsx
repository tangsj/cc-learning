import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todolist.jsx';

require('./css/main.css');

ReactDOM.render(<TodoList />, document.querySelector('#entry'));