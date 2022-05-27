import React from "react";
import List from "./components/List";
import Counter from "./components/Counter";

const groceries = [
  {
    id: 1,
    name: "Milk",
    purchased: true
  },
  {
    id: 2,
    name: "Eggs",
    purchased: true
  },
  {
    id: 3,
    name: "Cheese",
    purchased: false
  },
  {
    id: 4,
    name: "Cake Mix",
    purchased: false
  },
  {
    id: 5,
    name: "Carrots",
    purchased: false
  },
  {
    id: 6,
    name: "Juice",
    purchased: true
  }
];

function App() {
  return (
    <div>
      <Counter/>
  <List groceries={groceries} />
    </div>
  );
}

export default App;
