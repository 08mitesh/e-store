import React,{useReducer} from 'react';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import ComponentC from './Components/ComponentC';

export  const countContext = React.createContext()

const initialState = 0
const reducer11 = (stateValue,action) =>{
  console.log('function called')
  switch(action)
  {
    case 'increment':
      return stateValue + 1;
    case 'decrement':
      return stateValue - 1;
    case 'reset':
      return initialState;
    default:
      return stateValue
  }
}

function App() {

  const [countValue,dispatch] = useReducer( reducer11, initialState )
  return (
    <countContext.Provider value={{countState : countValue, countDispatch: dispatch}}>
      <div className="App">
      Count - {countValue }
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
      </div>
    </countContext.Provider>  
    );
}

export default App;
