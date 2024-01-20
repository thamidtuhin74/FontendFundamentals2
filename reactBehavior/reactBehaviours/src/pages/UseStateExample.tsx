import { useState } from "react";

const UseStateExample = ()=>{

    const [counter, setCounter] = useState(0);

    return(
        <div>
            <h3>Counter : {counter}</h3>
            <button onClick={()=>setCounter(counter+1)}>Increment</button>
            <button onClick={()=>setCounter(counter-1)}>Decrement</button>
            <button onClick={()=>setCounter(0)}>Reset</button>

        </div>
    )
}
export default UseStateExample;