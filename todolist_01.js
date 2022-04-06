import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import img from './images/cat.png'

class App extends Component{
  state = {
    list:[
      {
        id:1,
        txt:"aa"
      },
      {
        id:2,
        txt:"bb"
      },
      {
        id:3,
        txt:"cc"
      }
    ]
  }
  handleClick = () => {
    if(this.myref.current.value == ""){
      alert('please input value')
    }else{
      let newlist = this.myref.current.value
      this.setState({
        list:[
          {
            id:Math.random(),
            txt:newlist
          },...this.state.list]
      })
      this.myref.current.value = ""
    }
    
  }
  handleClickDel = (index) => {
    console.log(index)
    let newlist = this.state.list.concat()
    newlist.splice(index, 1)
    this.setState({
      list:newlist
    })
  }
  myref = React.createRef()
  render(){
    return(
      <div>
        <input ref={this.myref} />
        {/* <button onClick={() => {
          console.log("click 1,", this.myref.current.value)
        }}>click 1</button> */}
        <button onClick={this.handleClick} >add</button>
        <ul>
          {
            this.state.list.length == 0 ?
              <div>there is no any item to do.</div>
              :
              this.state.list.map((item, index) => //原来这里加了一层花括号，li的内容就都无法显示了；
                <li key={item.id}>{item.txt} 
                <span style={{paddingLeft:10}}>
                  <button onClick={() => this.handleClickDel(index)}>del</button>
                </span>
                </li>
              )
            }
           
          
        </ul>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
