import React, { Component } from 'react'

export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  } //函数需要写在render外面，之前写在里面了
  handleClearAllDone = () => {
    this.props.clearAllDone()
  }
  render() {
    const {todos,clearAllDone} = this.props //注意，这句是写在render函数体里面；
    const doneCount = todos.reduce((pre,item) => pre + (item.done?1:0),0) //三元体外面是小括号不是大括号
    const total = todos.length
    
    return (
      <div className='todo-footer'>
        <lable>
          <input type='checkbox' onChange={this.handleCheckAll} checked={doneCount === total && total !== 0? true: false}/>
        </lable>
        <span>
          <span>done {doneCount} </span> / All {total}
        </span>
        <button onClick={this.handleClearAllDone} className='btn btn-danger'>clear all done items</button>
      </div>
    )
  }
}
