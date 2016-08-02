var TodoComponent = React.createClass({
  render : function(){
    var todoList = [1,2,3,4,5]
    return (
      <ul> {todoList.map(function(x){
        return <li key={x}>{x}</li>
      })}
      </ul>
    );
  }
});

ReactDOM.render(<TodoComponent/>, document.getElementById('container'))
