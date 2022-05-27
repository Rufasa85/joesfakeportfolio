import React from 'react';

// Here we destructure our props into their own distinct variables
export default function Welcome({ loggedIn, setLoggedIn,count,setCount }) {
  // Lets log our our loggedIn variable to see it change in real time
  console.log('Welcome -> loggedIn', loggedIn);
  const displayCounter = ()=>{
    if(count>0){
      return <h1>this is a positive number</h1>
    } else if(count<0){
      return <h1>this is a negative number</h1>
    } else {
      return <h1>this is zero!</h1>
    }
  }
  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <div>
      {/* Conditional (ternary) operator is checking to see if loggedIn is true. If so render the following: */}
      {loggedIn ? (
        <div>
          <span role="img" aria-label="tada">
            🎉
          </span>
          <h3>You are signed in!</h3>
          <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
            Log out
          </button>
        </div>
      ) : (
        // If we are logged out, render this:
        <div>
          <span role="img" aria-label="stopsign">
            🛑
          </span>
          <h3>You are currently logged out</h3>
          <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
            Log in
          </button>
        </div>
      )}
      {displayCounter()}
        <button onClick={()=>setCount(count+1)}>Add One</button>
        <button onClick={()=>setCount(count-1)}>Subtract One</button>
    </div>
  );
}
