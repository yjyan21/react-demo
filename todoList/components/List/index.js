import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'

export default class List extends Component {
  static propTypes = {
    updateChecked:PropTypes.func.isRequired,
    todos:PropTypes.array.isRequired,
    deleteItem:PropTypes.func.isRequired
  }
  render() {
    const {todos,updateChecked,deleteItem} = this.props
    //上一行原来写的是 const {id,name,done} = this.props.todos
    return (
      <ul className='todo-main'>
        {todos.length==0 && <div>There is no item to do ~</div>}
        {
          todos.map(item => { //原来这行写的是(item,id)，下面也是key={id},其实跟都写成index一个意思
            return <Item key={item.id} {...item} updateChecked={updateChecked} deleteItem={deleteItem}/>  //原来这里没写return，也没写外面的花括号
            //传的值写成了{...todos}，注意，这里是每一条数据；
            //item本身是一个对象，用...就可以把东西批量的传进去，其实不太明白这句；【扩展运算符】
          }
          )
        }
      </ul>
    )
  }
}