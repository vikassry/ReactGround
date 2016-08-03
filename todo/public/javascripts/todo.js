var TodoComponent = React.createClass({
  getInitialState : function(){
    return {tasks:[], text:''}
  },
  addTask : function(e){
    e.preventDefault();
    var todo = this.state.text.trim();
    if(isEmpty(todo)){
      alert("Can't add empty task!");
      return;
    }
    var allTasks = this.state.tasks.concat({text:todo, id:Date.now()})
    this.setState({tasks : allTasks, text:''});
  },
  onChange : function(e){
    this.setState({text : e.target.value});
  },
  render : function(){
    var todoList = this.state.tasks;
    return (
      <div>
      <ul> {todoList.map(function(item){
        return <li key={item.id}>{item.text}</li>
      })}
      </ul>
      <form onSubmit={this.addTask}>
        <input onChange={this.onChange} value={this.state.text} />
        <button>{'Add #' + (this.state.tasks.length + 1)}</button>
      </form>
      </div>
    );
  }
});

ReactDOM.render(<TodoComponent/>, document.getElementById('container'))

var isEmpty = function(text) {
  return text.trim().length ==0;
}
