import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

class App extends Component{
  state = {
    counter:0
  }
  onIncreament = () => {
    this.setState({
      counter:this.state.counter + 1
    })
  }
  render(){
   return(
     <div>
       <Child1 counter={this.state.counter}/>
       <Child2 Increament={this.onIncreament}/>
     </div>
   )
 }
}
class Child1 extends Component {
  render(){
    return(
      <div>
        <h1>Counter: {this.props.counter}</h1>
      </div>
    )
  }
}
class Child2 extends Component {
  handleClick = (props) => {
    this.props.Increament()
  }
  render(){
    return(
      <div>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
