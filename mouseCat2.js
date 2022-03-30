import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import img from './images/cat.png'

class App extends Component{
  render(){
    return(
      <div>
        <Mouse>
          {
          mouse => {
            return <p>Location of the mouse is:(x: {mouse.x}), (y:{mouse.y})</p>
          }
          }
        </Mouse>

        <Mouse>
          {mouse =>{
            return <img src={img} alt='cat'
            style={{
              width:100,
              height:100,
              position: 'absolute',
              top: mouse.y,
              left: mouse.x
          }}/>
          }}
        </Mouse>
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
    return this.props.children(this.state)
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
