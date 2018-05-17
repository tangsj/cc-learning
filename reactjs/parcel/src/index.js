import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Router, Route, Link } from 'react-router-dom';

import './index.css';
const TestContext = React.createContext({
  data: '',
});

class Child extends React.Component {
  constructor(props) {
    super(props);

    this.spanRef = React.createRef();

    this.state = {
      style: {
        color: 'blue',
      },
    }
  }
  static defaultProps = {
    name: '-defaultProps-'
  }
  handleClick = (e) => {
    e.stopPropagation();
    console.log(this.spanRef.current.innerHTML);
  }
  changeColor() {
    this.setState({
      style: {
        color: 'red',
      },
    });
  }
  render() {
    return (
      <div>
        <div style={this.state.style} onClick={this.handleClick} ref={this.spanRef}>
          Child Component {this.props.name}
        </div>
        <TestContext.Consumer>
          {
            ({ data }) => {
              return <span>{data}</span>;
            }
          }
        </TestContext.Consumer>
      </div>
    );
  }
}

class TestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.compRef = React.createRef();
  }
  handleClick = () => {
    console.log(this.compRef);
    this.compRef.current.changeColor();
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        Render { this.props.name }
        <div>
          <Child ref={this.compRef}/>
          <Child name="prop"/>
        </div>

        { this.props.children }
      </div>
    )
  }
}

/* React Router */

ReactDom.render(
  <TestContext.Provider value={ { data : 'codecook'} }>
    <HashRouter>
      <Route path="/" component={ TestList }></Route>
    </HashRouter>
  </TestContext.Provider>,
  document.querySelector('#app')
);

if (module.hot) {
  module.hot.accept();
}
