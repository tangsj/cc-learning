import React from 'react';
import { addTodo } from '../actions/todolist.js';

var List = React.createClass({
  render(){
    return (
      <ul className="list">
      {
        this.props.items.map((item, i) => {
          return <li key={`list-${i}`}> { i } : { item.text }</li>
        })
      }
      </ul>
    )
  }
});

var Input = React.createClass({
  additem(){
    var text = this.refs.input.value.trim();
    if(text.length == 0){
      this.refs.input.focus();
      return false;
    }
    this.props.add(text);
  },
  render(){
    return (
      <div className="input-area">
        <input type="text" ref="input" placeholder="input"/>
        <a href="javascript:;" onClick={ this.additem }>Add</a>
      </div>
    )
  }
});

var TodoList = React.createClass({
  render(){
    const { todolist, onAddClick } = this.props;
    return (
      <div className="todo-list">
        <h2>TodoList</h2>
        <List items={ todolist }/>
        <Input add={ onAddClick }/>
      </div>
    )
  }
});

module.exports = TodoList;