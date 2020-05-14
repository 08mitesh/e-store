import React,{useContext} from 'react';
import { countContext } from '../App';


function ComponentD() {

  const countContextD = useContext(countContext)
  return (
    <div>
      Component D
      <button onClick={()=>countContextD.countDispatch('increment')}>Increment</button>
      <button onClick={()=>countContextD.countDispatch('decrement')}>decrement</button>
      <button onClick={()=>countContextD.countDispatch('reset')}>Reset</button>
    </div>
  );
}

export default ComponentD;
