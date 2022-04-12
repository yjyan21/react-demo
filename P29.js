import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import PropType from 'prop-types'
//import axios from 'axios'

//---------------------------------------------
function Sidebar(props) {
  let {bg, position} = props
  var obj1 = {
    left:0
  }
  var obj2 = {
    right:0
  }
  var obj = {
    backgroundColor:bg,
    width: "150px",
    position: "fixed"
  }
  var objStyle = position === 'left'? {...obj1, ...obj} : {...obj2,...obj}
  //注意上面这句=号后面是没有大括号的
    return (
      <div>
        <ul style={objStyle}>
          <li>11111111111</li>
          <li>11111111111</li>
          <li>11111111111</li>
          <li>11111111111</li>
          <li>11111111111</li>
          <li>11111111111</li>
          <li>11111111111</li>
          <li>11111111111</li>
          <li>11111111111</li>
        </ul>
      </div>
    )
  }

class Navbar extends Component {
  
  static propTypes = {
    title: PropType.string,
    leftAr: PropType.bool
  }
  static defaultProps = {
    leftAr: true,
    rightAr: true
  }
  render() {
    let {title, leftAr, rightAr} = this.props
    return (
      <div>
        {leftAr && <button>left</button>}
        {title}
        {rightAr && <button>right</button>}
      </div>
    )
  }
}

//---------------------------------------------

class App extends Component{
  
  //------------------------------------
  render(){
    var obj = {
      backgroundColor: 'yellow'
    }  
    console.log(obj.backgroundColor)
    return(
      <div>
        <div>
          <Navbar title=" MainNav "/>
        </div>
        <Sidebar bg={obj.backgroundColor} position="right"/>
       
      </div>
      
     
    
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
