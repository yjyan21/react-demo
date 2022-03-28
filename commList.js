import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello'
import reportWebVitals from './reportWebVitals';

class App extends Component{
  
  state={
    comments:[
      {id:1, name:'Jack', content:'First~'},
      {id:2, name:'Rose', content:'Second~'},
      {id:3, name:'Yumi', content:'Third~'},
    ],
    userName:'',
    userContent:''
  }
  
  changeName = e => {
    this.setState({
       userName:e.target.value
    }
      
    )
  }

  handleAll = e => {
    const {name, value} = e.target
    this.setState({
      [name]:value
    })
  }

  addComment = () => {
    
    const {comments, userName, userContent} = this.state
    if(userName == '' || userContent == ''){
      alert('Please input userName or userContent')
    }else{
      const newComments = [
        {
          id:Math.random(),
          name: userName,
          content: userContent
        },
        ...comments
      ]
      this.setState({
        comments:newComments,
        userName: '',
        userContent: ''
      })
    }
    
  }
 

  render(){
    const { userName, userContent} = this.state
    return(
      <div className='app'>
        <div>
          <input className='userName' type="text" placeholder='username:' name='userName'
          value={userName}
          onChange={this.handleAll}/>
          <br/>
          <textarea 
            className="content" name='userContent' value={userContent} onChange={this.handleAll} 
            cols = "30"
            rows = "10"
            placeholder="please input your comments:"
          ></textarea>
          <br/>
          <button onClick={this.addComment}>submit</button>
        </div>
        <br/>
        
        <ul>
          {
          (this.state.comments.length == 0)
          ? <div className='no-comments' >No any comments ~</div>
          : (this.state.comments.map(item => (
            <li key={item.id}>
              <h3>user: {item.name}</h3>
              <p>content: {item.content}</p>
            </li>
          ))
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
