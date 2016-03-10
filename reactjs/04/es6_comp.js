import { Component } from 'react';

export class Es6_Comp extends Component{
  //Warning: getDefaultProps was defined on n, a plain JavaScript class.
  //This is only supported for classes created using React.createClass.
  //Use a static property to define defaultProps instead.
  /*
  getDefaultProps(){
    return {
      data : ['default']
    }
  }
  */
  clickHandler(){
    alert('clickHandler');
  }
  render(){
    var child = [];
    var _list = this.props.data.forEach((l, index)=>{
      child.push(
        <p key={'l_' + index}>Class _ {l}</p>
      );
    });
    return (
      <div>
        <div onClick={this.clickHandler}>Es6_Comp</div>
        {child}
      </div>
    )
  }
}


