//This is a Class Component, a traditional React component
//It is possible to write logic in a JS Class
//and it must include a render method
//It can use State and Lifecycle Methods
//...(with React Hooks now also Function Components can do it!)

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello there!</h1>
        <h1>Hello there!</h1>
        <h1>Hello there!</h1>
      </div>
    );
  }
}

//This is a Function Component used for simpler and dumb components
//It is possible to write logic in a JS function
//No render method is needed, we just need to return content

/*
	function Hello() {
		return (
			<div>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
			</div>
		);
	}
*/
ReactDOM.render(<Hello />, document.getElementById('root'));
