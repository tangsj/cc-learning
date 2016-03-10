import { connect } from 'react-redux';
import { addTodo } from '../actions/todolist.js';
import TodoList from '../components/todolist.jsx';

const mapStateToProps = function(state){
  return {
    todolist: state.todolist
  }
}

const mapDispatchToProps = function(dispatch){
  return {
    onAddClick: function(text){
      dispatch(addTodo(text));
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;