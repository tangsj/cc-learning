var mainStyle = require('./main.css');

var Comp = React.createClass({
  getDefaultProps: function(){
    console.log('default props set run');
    return {
      data : ['default']
    }
  },
  getInitialState: function(){
    return {};
  },
  componentWillUnmount: function(){
  },
  clickHandler: function(){
    $('body').append('<p>jquery apend</p>');
  },
  render: function(){

    var child = [];
    var _list = this.props.data.forEach((l, index)=>{
      child.push(
        <p key={'l_' + index}>{l}</p>
      );
    });

    return (
      <div>
        {child}
        <button onClick={this.clickHandler}>React Webpack demo</button>
      </div>
    );
  }
});

export {Comp}