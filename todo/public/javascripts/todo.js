var TodoList = React.createClass({
  render : function(){
    console.log(this.props.tasks)
    return (
      // </br>
      )
  }
});

var TodoComponent = React.createClass({
  // getInitialState : function(){
  //   console.log(document.getElementById("list"))
  //   return {tasks:document.getElementById("list").children, text:''}
  // },

  addTask : function(e){
    e.preventDefault();
    var todo = this.state.text;
    if(isEmpty(todo)){
      alert("Can't add empty task!");
      return;
    }
    var new_task = {text:todo, key:Date.now()};
    var newTasks = this.state.tasks.concat(new_task);
    this.setState({tasks : newTasks, text:''});
  },

  onChange : function(e){
    this.setState({text : e.target.value});
  },

  render : function(){
    return (
      <div>
        <TodoList tasks={document.getElementById("list"))}/>
          <form onSubmit={this.addTask}>
            <input onChange={this.onChange} value={this.state.text} /> &nbsp;
            <button>{'Add '+ '\u00b7 #' +(this.state.tasks.length + 1)}</button>
            <p>You typed {this.state.text.length} characters. </p>
          </form>
        </div>
      );
    }
  }
);

ReactDOM.render(<TodoComponent/>, document.getElementById('container'))

var isEmpty = function(text) {
  return text.trim().length == 0;
}
