var mainStyle = require('./main.css');

var Comp = React.createClass({
  getInitialState: function(){
    return {};
  },
  componentWillUnmount: function(){
  },
  clickHandler: function(){
    $('body').append('jquery apend');
  },
  render: function(){
    return (
      <div>
        <button onClick={this.clickHandler}>React Webpack demo</button>
      </div>
    );
  }
});

export {Comp}