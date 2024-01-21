import { Dispatch } from "react";

type Tcounter = {
    counter: number;
    setCounter: Dispatch<React.SetStateAction<number>>;
}
// lifting state up | 

const UseStateExample = ({counter,setCounter}:Tcounter)=>{


    return(
        <div>
            <h3>Counter : {counter}</h3>
            {/* <button onClick={()=>setCounter(counter+1)}>Increment</button>
            <button onClick={()=>setCounter(counter-1)}>Decrement</button> */}
            <button onClick={()=>setCounter((prevState)=>prevState+1)}>Increment</button>
            <button onClick={()=>setCounter((prevState)=>prevState-1)}>Decrement</button>
            <button onClick={()=>setCounter(0)}>Reset</button>

        </div>
    )
}
export default UseStateExample;