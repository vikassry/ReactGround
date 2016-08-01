var MyComponent = React.createClass({
  getInitialState : function(){
    return { count : 0 }
  },
  increment : function(){
    this.setState({count : this.state.count + 1 });
  },
  render : function(){
    return (
      <div>
      <span> {this.props.name}: {this.state.count} </span><br/>
      <button type='button' onClick={this.increment}>Increment</button>
      </div>
    );
  }
});
ReactDOM.render(<MyComponent name='Count'/> , document.getElementById('container'));
