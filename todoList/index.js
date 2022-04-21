import React, { Component, useState} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Header from'./components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './index.css'

 class App extends Component {
  state = {todos: //这一行忘了写todos:
    [
      {id:'001', name:"homeWork",done:false},
      //这里的id是需要加引号的
      {id:'002', name:'Lab',done:false},
      {id:'003', name:'clean house',done:false},
      {id:'004', name:'wash clothes',done:true}
    ]
  }
  addNewitem = (newitemObj) => { //这里addNewitem前面不能加 const
    const {todos} = this.state
    //const newtodos = [...todos]
    //newtodos = [newitemObj, ...todos] //这么写成两行是不对的
    const newtodos = [newitemObj, ...todos]
    this.setState({
      todos:newtodos
    })
  } 
  updateChecked = (id,done) => {
    const {todos} = this.state
    const newTodos = todos.map(item => { //所以这里箭头函数后面到底要不要大括号？？？？
      //别忘了要赋值给const newTodos
      if(item.id === id) return {...item,done:done} // 为什么不是item.done=done??,还要注意是冒号，不是等于号
      else return item })
    this.setState({
      todos:newTodos
    })
  }
  deleteItem = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter(item =>{
     return item.id !== id
    })
    this.setState({
      todos:newTodos
    })
  }
  checkAllTodo = (done) => {
    const {todos} = this.state
    const newTodos = todos.map(item => {
      return {...item,done}
    })
    this.setState({
      todos:newTodos
    })
  }
  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter(item => {
      return !item.done
    })
    this.setState({
      todos:newTodos
    })
  }
  render() {
    const {todos} = this.state
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addNewitem={this.addNewitem}/>
          <List todos={todos} updateChecked={this.updateChecked} deleteItem={this.deleteItem}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
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
