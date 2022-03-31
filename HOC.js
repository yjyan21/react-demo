import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import img from './images/cat.png'

//create A HOC
function withMouse(WrappedComponent){
  class Mouse extends Component{
    state = {
      x:0,
      y:0
    }
  handleClick = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }
  componentDidMount(){
    window.addEventListener('mousemove',this.handleClick)
  }
  componentWillUnmount(){
    window.removeEventListener('mousemove',this.handleClick)
  }
  render(){
    return(
      <WrappedComponent {...this.state}></WrappedComponent>
    )
  }
  }
  return Mouse  
}

//test HOC
const Position = (props) => {
  return(
    <p>
      Location of the mouse:(x: {props.x}, y: {props.y})
    </p>
  )
  
}
//test HOC 2.0 MouseCat
const Cat = props => {
  return(
    <img src={img} alt='cat'
      style={{
        width:100,
        height:100,
        position: 'absolute',
        top: props.y,
        left: props.x
    }}/>
  )
}

const MousePosition = withMouse(Position)
const MouseCat = withMouse(Cat)

class App extends Component{
  render(){
    return(
      <div>
        <h1>HOC</h1>
        <MousePosition />
        <MouseCat />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
