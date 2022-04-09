import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'
import './css/maizuo.css'
//---------------------------------------------
class Movies extends Component {
  render() {
    return (
      <div>Movies Component</div>
    )
  }
}
class Cinema extends Component {
  constructor(){
    super()
  //   axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=2979068").
  //   then(res=>{
  //     console.log(res)
  //   }).catch(err=>{console.log(err)})
  this.state = ({
    cinemaList:[],
    backupCinemaList:[]
  })
    axios({
      url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=2979068",
      headers:{
        'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.2.0","e":"1649358780437038692171777", "bc":"110100"}',
        'X-Host':' mall.film-ticket.cinema.list'
      }
    }).then(res=>{
      console.log(res.data.data.cinemas)
      this.setState({
        cinemaList:res.data.data.cinemas,
        backupCinemaList:res.data.data.cinemas
      })
    })
    
   }
  //-----------------------------------------------
  handleInput = (event) => {
    let newList = this.state.backupCinemaList.filter(item => item.name.toUpperCase().includes(
      event.target.value.toUpperCase()
    ))
    this.setState({
      cinemaList: newList
    })
  }
  //-----------------------------------------------
  render() {
    return (
      <div>
        <input className='input_search' onInput={this.handleInput}/>
        {
          this.state.cinemaList.map(item => 
            <dl key={item.cinemaId}> 
            {/* key值在dl不在dt里面； */}
              <dt>{item.name}</dt>
              <dd>{item.address}</dd>
            </dl>
            
          
          )
          }
      </div>
    )
  }
}
class Me extends Component {
  render() {
    return (
      <div>About Me Component</div>
    )
  }
}
//---------------------------------------------

class App extends Component{
  state = {
    list:[
      {
        id:1,
        txt:"Movies"
      },
      {
        id:2,
        txt:"Cinema"
      },
      {
        id:3,
        txt:"About me"
      }
    ],
    current:1
  }
  //------------------------------------
  handleClick = (index) => {
    this.setState({
      current: index
    })
  }
  //------------------------------------
  render(){
    return(
      <div>
        { this.state.current === 0 && <Movies />}
        { this.state.current === 1 && <Cinema />}
        { this.state.current === 2 && <Me />}
        <ul>
          {
            this.state.list.map((item, index) =>
              <li key={item.id} onClick={() => this.handleClick(index)} 
                className={this.state.current == index ? "active":""}>
                {item.txt}
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
