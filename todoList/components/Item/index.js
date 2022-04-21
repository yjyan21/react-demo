import React, { Component } from 'react'

export default class Item extends Component {
  state = {mouse:false}
  handleMouse = (flag) => {
    return () => {
      this.setState({mouse:flag})
    }
  }
  handleChange = (id) => { //这一行忘了写id参数,其实不懂这一段代码
    return (event) => {
      this.props.updateChecked(id,event.target.checked) //漏掉了target
    }
  }
  handleDelete = (id) => {
    if(window.confirm("Are you sure to delete?")){
      this.props.deleteItem(id)
    }
  }
    
  render() {
    const {id,name,done} = this.props
    return (
      <li style={{backgroundColor:this.state.mouse? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        {/*#ddd, white都要记得加引号 */}
        <lable>
          <input type="checkbox" checked={done} onChange={this.handleChange(id)}/>
          {/* 注意这里的checked={done}的checked首字母是小写 */}
          <span>{name}</span>
        </lable>
        <button onClick={() => this.handleDelete(id)} className='btn btn-danger' style={{display:this.state.mouse ? 'block' : 'none'}}>delete</button>
        {/*上面一行里面的block和none忘了带引号 */}
      </li>
    )
  }
}