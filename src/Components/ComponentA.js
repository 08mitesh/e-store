import React,{useContext} from 'react';
import { countContext } from '../App';


function ComponentA() {

  const countContextA = useContext(countContext)
  return (
    <div>
      Component A
      <button onClick={()=>countContextA.countDispatch('increment')}>Increment</button>
      <button onClick={()=>countContextA.countDispatch('decrement')}>decrement</button>
      <button onClick={()=>countContextA.countDispatch('reset')}>Reset</button>
    </div>
  );
}

export default ComponentA;
