import { Comp }  from './comp.jsx';
import { Es6_Comp } from './es6_comp.js';


var propsData = ['propdata1', 'propdata2'];

var vdom = [
  <Comp key="1" data={propsData}/>,
  <Es6_Comp key="2" data={propsData}/>
]
ReactDOM.render(<div>{ vdom }</div>,document.querySelector('#example'));

