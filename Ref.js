import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import img from './images/cat.png'

class App extends Component{
  myref = React.createRef()
  render(){
    return(
      <div>
        <input ref={this.myref} />
        <button onClick={() => {
          console.log("click 1,", this.myref.current.value)
        }}>click 1</button>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
