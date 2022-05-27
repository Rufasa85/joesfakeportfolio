import React,{useState} from "react";

export default function Counter (){
    const [count,setCount] =useState(0)
    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
    }
   
    return (
        <div>
            <h1>Current clicks: {count}</h1>
            <button onClick={increment}>Click to add one! Current count: {count}</button>
            <button onClick={decrement}>Click to subtract one! Current count: {count}</button>
            <button onClick={()=>setCount(0)}>Click to reset to zero! Current count: {count}</button>

            {(new Array(count)).fill(<h2> Count again:{count}</h2>)}
        </div>
    )
}