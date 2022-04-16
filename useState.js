import React, { Component, useState} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';


function App() {
  let [text, setText] = useState("")
  let [list, setList] = useState(["aa", "bb", "cc"])
  
  const handleChange = (evt) =>{
    setText(evt.target.value)
      //这里的规则就是不用这么写，这是类组件中更新状态的方式
    }
  const handleClick = () =>{
    //console.log(text)
    setList([text, ...list]) //难怪这里一直报错，说text现在是一个对象，预期应该是一个string
        //这里的规则就是不用这么写，这是类组件中更新状态的方式
    setText("")
    }
  const handleDel = (index) => {
    const newList = [...list]
    newList.splice(index,1)
    setList(newList)
  }

  return (
    <div>
      <input onChange={handleChange} value={text}/>
      <button onClick={handleClick}>add</button>
      <ul>
        {//这里的大括号忘了写
          list.map((item,index)=> //这一行箭头后面没有大括号
            <li key={item}>{item}  <button onClick={()=>handleDel(index)}>delete</button></li>
          )
        }
      </ul>
      {!list.length && <div>Nothing to do!!</div> }
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
