import React, {useState, createContext} from 'react';
import CounterCc from './CounterCc'
import CounterFc from './CounterFc'

export const myContext = createContext()

function App() {
  const initialValueObj = {
    backgroundColor: 'white',
    color: 'black'
  }
  const [theme, setTheme] = useState(initialValueObj)  
  
  const contextValue = {backgroundColor: theme.backgroundColor, color: theme.color }
  
  
// using Arrow Function
  const toggleColor_arrow_Obj = () => setTheme(prevState => {  return {
    backgroundColor: prevState.backgroundColor === 'white'? 'black': 'white',
    color: prevState.color === 'black'? 'white': 'black'
  } ;})

// using Normal Function  
  function toggleColor_normal_Obj (){
    setTheme(prevState => {return {
      backgroundColor: prevState.backgroundColor === 'white'? 'black': 'white',
      color: prevState.color === 'black'? 'white': 'black'
    }})
  } 

  return (
    <myContext.Provider value={contextValue} >
      <h1> Class Component </h1>
      <CounterCc initialCount={0} />
      <h1> Functioncal Component </h1>      
      <CounterFc initialCount={10} />
      <p> <button onClick={() => toggleColor_normal_Obj()}> Toggle Button Normal Function </button></p>
      <p><button onClick={() => toggleColor_arrow_Obj()}> Toggle Button Arrow Function </button></p>
    </myContext.Provider>
  )
}

export default App;
