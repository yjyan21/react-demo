import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

class App extends Component{
  state = {
    parentMsg:''
  }
  getMsg = (data) => {
    this.setState({
      parentMsg: data
    })
  }
  render(){
   return(
    <div>
      <h3>This is Parent Component. <p style={{color:'red'}}>{this.state.parentMsg}</p></h3>
      <Child getMsg={this.getMsg} />
    </div>
   )
  }
}
class Child extends Component {
  state = {
    msg:'study'
  }
  handleChange = (props) => {
    this.props.getMsg(this.state.msg)
  }
  render(){
    return(
      <h4>This is Child component.
        <br/>Click the button to send a msg to parent component.<br/>
        <button onClick={this.handleChange}>click</button>
      </h4>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
