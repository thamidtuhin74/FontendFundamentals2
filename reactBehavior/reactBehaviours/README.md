# React Fundamentals

## StrictMode - [Details](https://react.dev/reference/react/StrictMode)

- Strict mode is a set of ```development tools``` that help you ```catch potential problems in your code before they become actual bugs```. When you enable strictmode in your React application, you're essentially telling React to turn on a bunch of extra checks and warnings that are designed to help you write better code. 
- Strict Mode calls some of your functions (only the ones that should be pure) twice in development. This includes:

    - Your component ```function body``` (only top-level logic, so this doesn’t include code inside event handlers)
    - ```Functions that you pass``` to useState, set functions, useMemo, or useReducer
    - Some ```class component methods``` like constructor, render,shouldComponentUpdate ([see the whole list](https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects))

## useState 

## lifting state up : [read more](https://react.dev/learn/sharing-state-between-components)

- Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up, and it’s one of the most common things you will do writing React code.
app.tsx
```
  function App() {
    // const [count, setCount] = useState(0);
    const [counter, setCounter] = useState(0);

    console.log('React Fundamentals')
    return (
      <>
        <h1>React Fundamentals</h1>
        <UseStateExample counter={counter} setCounter={setCounter}/>
      </>
    )
  }
```

```
import { Dispatch } from "react";
type Tcounter = {
    counter: number;
    setCounter: Dispatch<React.SetStateAction<number>>;
}
// lifting state up | 

const UseStateExample = ({counter,setCounter}:Tcounter)=>{

  // move state from there.
    return(
        <div>
            <h3>Counter : {counter}</h3>
            <button onClick={()=>setCounter((prevState)=>prevState+1)}>Increment</button>
            <button onClick={()=>setCounter((prevState)=>prevState-1)}>Decrement</button>
            <button onClick={()=>setCounter(0)}>Reset</button>

        </div>
    )
}

```