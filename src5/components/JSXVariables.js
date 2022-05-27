import React from 'react';


function JSXVariables(props) {
  const num1 = 1;
  const num2 = 2;
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          {/* JavaScript expressions can be escaped inside of curly braces */}

          <h2>My cat's name is {props.obj.first} {props.obj.last} </h2>
          
          
          <h2>I can do math: {num1 + num2}.</h2>
          <h3>{["a","b","c"]}</h3>
          <h2>
            I can generate random numbers:
            {Math.floor(Math.random() * 10) + 1},
            {Math.floor(Math.random() * 10) + 1},
            {Math.floor(Math.random() * 10) + 1}.
          </h2>
          <h2>I can even reverse my name: {props.obj.first.split('').reverse().join("")}</h2>
        </div>
      </div>
      <hr/>
    </div>
  );
}

export default JSXVariables;
