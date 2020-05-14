import React,{useContext} from 'react';
import { countContext } from '../App';


function ComponentF() {

  const countContextF = useContext(countContext)
  return (
    <div>
      Component F
      <button onClick={()=>countContextF.countDispatch('increment')}>Increment</button>
      <button onClick={()=>countContextF.countDispatch('decrement')}>decrement</button>
      <button onClick={()=>countContextF.countDispatch('reset')}>Reset</button>
    </div>
  );
}

export default ComponentF;
