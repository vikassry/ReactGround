var MarkdownEditor = React.createClass({
  getInitialState: function() {
    return {value: 'Type some markdown here!'};
  },
  onChange: function() {
    this.setState({value: this.refs.textarea.value});
  },
  rawMarkup: function() {
    var md = new Remarkable();
    return { __html: this.state.value };
  },
  render: function() {
    return (
      <div>
        <h3>Input</h3>
        <textarea rows="8" cols="80"
          onChange={this.onChange}
          ref="textarea"
          defaultValue={this.state.value} />
        <h3>Output</h3>
        <span> {this.state.value} </span>
      </div>
    );
  }
});

ReactDOM.render(<MarkdownEditor />, document.getElementById('container'));
