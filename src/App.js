import React, {useState, createContext} from 'react';
import Counter_CC from './Counter_CC'
import Counter_FC from './Counter_FC'

export const myContext = createContext()

function App() {
  const initialValueObj = {
    backgroundColor: 'white',
    color: 'black'
  }
  const [theme, setTheme] = useState(initialValueObj)  
  
  const contextValue = {backgroundColor: theme.backgroundColor, color: theme.color }
  
  
// ussing Arrow Function
  const toggleColor_arrow_Obj = () => setTheme(prevState => {  return {
    backgroundColor: prevState.backgroundColor === 'white'? 'black': 'white',
    color: prevState.color === 'black'? 'white': 'black'
  } ;})

// ussing Normal Function  
  function toggleColor_normal_Obj (){
    setTheme(prevState => {return {
      backgroundColor: prevState.backgroundColor === 'white'? 'black': 'white',
      color: prevState.color === 'black'? 'white': 'black'
    }})
  } 

  return (
    <myContext.Provider value={contextValue} >
      <h1> Class Component </h1>
      <Counter_CC initialCount={0} />
      <h1> Functioncal Component </h1>      
      <Counter_FC initialCount={10} />
      <button onClick={() => toggleColor_normal_Obj()}> Toggle Button Normal Function </button>
      <button onClick={() => toggleColor_arrow_Obj()}> Toggle Button Arrow Function </button>
    </myContext.Provider>
  )
}

export default App;
