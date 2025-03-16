import { useState } from 'react'
import './App.css'

function App() {
  
  const [list, setList] = useState([])
  const [text, setText] = useState("")
  
  function shevseba() {
    setList (  [...list, text])
  }

  function removeItem(index){
    setList(list.filter( (item, i) => index !== i))
  }

  return (
    <>
      <div className="card">
         <input onKeyUp={ (e) => setText(e.target.value)} type="text" />
         <button onClick={shevseba}>add</button>
         <ul>
          {
            list.map( (item, i) => (
              <li>{item} <button onClick={ () => removeItem(i) }>x</button></li>
            ))
          }
         </ul>
      </div>
    </>
  )
}

export default App
