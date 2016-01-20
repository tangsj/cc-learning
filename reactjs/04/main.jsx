var {Comp} = require('./comp.jsx');
var {Es6_Comp} = require('./es6_comp.js');


var vdom = [
  <Comp key="1"/>,
  <Es6_Comp key="2"/>
]
ReactDOM.render(<div>{ vdom }</div>,document.querySelector('#example'));

