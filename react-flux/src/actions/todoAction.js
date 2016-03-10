import TodoDispatcher from '../dispatcher/todoDispatcher.js';

module.exports = {
  add: function(text){
    TodoDispatcher.dispatch({
      actionType: 'add_one',
      text: text
    })
  }
}