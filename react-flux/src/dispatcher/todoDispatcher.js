import { Dispatcher } from 'flux';
import TodoStore from '../stores/todoStore.js';
var TodoDispatcher = new Dispatcher();


TodoDispatcher.register(function(action){
  switch(action.actionType){
    case 'add_one':
      TodoStore.addItem(action.text);
      break;
    default:
      break;
  }
});

module.exports = TodoDispatcher;