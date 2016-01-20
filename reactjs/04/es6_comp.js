import { Component } from 'react';

export class Es6_Comp extends Component{
  clickHandler(){
    alert('clickHandler');
  }
  render(){
    return (
      <div onClick={this.clickHandler}>Es6_Comp</div>
    )
  }
}


