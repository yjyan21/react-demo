import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import PropType from 'prop-types'
//import axios from 'axios'

//---------------------------------------------

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
  state = {
   
  }
  
  //------------------------------------
  render(){
    return(
      <div>
        <div>
          <h2>Home</h2>
          <Navbar title=" home " leftAr={false}/>
        </div>
        <div>
          <h2>List</h2>
          <Navbar title=" List "/>
        </div>
        <div>
          <h2>Search</h2>
          <Navbar title=" Search "/>
        </div>
      </div>
      
     
    
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
