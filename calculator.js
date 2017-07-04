
class CalculateContainer extends React.Component {
	constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    alert("change");
  }
  render() {
    return (
      <div>
  		<label>
          Input1:
          <input type="text" name="title" onChange={this.handleChange} />
        </label>
        <label>
          For Operator:
          <input type="text" onChange={this.handleChange} />
        </label>
        <label>
          Input2:
          <input type="text" onChange={this.handleChange} />
        </label>
        <label>=</label>
        <label>
          Result:
          <input type="text" readOnly/>
        </label>
    </div>
    );
  }
}
const element = <CalculateContainer />;
ReactDOM.render(
  element,
  document.getElementById('container')
);