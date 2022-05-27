import React, { useState } from 'react';
import Welcome from './components/Welcome';

function App() {
  // Here we declare a state boolean variable "loggedIn" and a function to update it.
  const [loggedIn, setLoggedIn] = useState(false);
  const [count, setCount] = useState(0);

  // We return the Welcome component and pass loggedIn and setLoggedIn as props.
  return <Welcome loggedIn={loggedIn} setLoggedIn={setLoggedIn} count={count} setCount={setCount}/>;
}

export default App;
