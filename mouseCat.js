import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

class App extends Component{
  render(){
    return(
      <div>
        <Mouse 
        render = { mouse => {
          return <p>Location of the mouse is:(x: {mouse.x}), (y:{mouse.y})</p>
        }}
        />
      </div>
    )
  }
}
class Mouse extends Component{
  state = {
    x:0,
    y:0
  }
  handleMousemove = (e) => {
    this.setState({
      x:e.clientX,
      y:e.clientY
    })
  }
  componentDidMount(){
    window.addEventListener('mousemove', this.handleMousemove)
  }
  render(){
    return this.props.render(this.state)
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
