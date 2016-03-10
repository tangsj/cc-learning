import React from 'react';

import TodoAction from '../actions/todoAction.js';
import TodoStore from '../stores/todoStore.js';

var List = React.createClass({
  render(){
    return (
      <ul className="list">
      {
        this.props.items.map(function(item, i){
          return <li key={`list-${i}`}> { i } : { item }</li>
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
  getInitialState(){
    return {
      items: TodoStore.getAll()
    }
  },
  componentDidMount(){
    TodoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount(){
    TodoStore.removeChangeListener(this._onChange);
  },
  _onChange(){
    this.setState({
      items: TodoStore.getAll()
    });
  },
  inputItem(text){
    // 触发Action
    TodoAction.add(text);
  },
  render(){
    return (
      <div className="todo-list">
        <h2>TodoList</h2>
        <List items={ this.state.items }/>
        <Input add={ this.inputItem }/>
      </div>
    )
  }
});

module.exports = TodoList;