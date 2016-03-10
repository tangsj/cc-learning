import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import VisibleTodoList from './containers/visibleTodoList.js';
import rootReducer from './reducers';

import './css/main.css';

var store = createStore(rootReducer);

render(
  <Provider store={ store }>
    <VisibleTodoList />
  </Provider>
  , document.querySelector('#entry')
);