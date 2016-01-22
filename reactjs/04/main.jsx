import { Comp }  from './comp.jsx';
import { Es6_Comp } from './es6_comp.js';

var vdom = [
  <Comp key="1"/>,
  <Es6_Comp key="2"/>
]
ReactDOM.render(<div>{ vdom }</div>,document.querySelector('#example'));

