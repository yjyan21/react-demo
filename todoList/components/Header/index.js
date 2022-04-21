import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
  static propTypes = {
    addNewitem:PropTypes.func.isRequired,
  }

  handleKey = (event) => {
    //console.log(event.target.value)
    const {keyCode, target} = event
    if(keyCode !== 13) return
    const newItem = {
      id:Math.random(), name:target.value, done:false
    }
    //return newItem //这一句这么写不对
    if(target.value.trim() == ""){  //这句写成了newItem.name, 后来trim后面又忘了加小括号
      alert("please input something..")
      return
    } 
    
    this.props.addNewitem(newItem)
    target.value = ""
  }
  render() {
    return (
      <div className='todo-header'>
        <input type="text" placeholder='please input item, then click Enter key...' onKeyUp={this.handleKey}/>
      </div>
    )
  }
}