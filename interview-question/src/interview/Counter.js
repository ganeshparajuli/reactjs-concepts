import  React from "react";
const {useState} = React;
export default function Counter() {
  const [counter, setCounter] = useState(0); 
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>
        {counter}
      </p>
      <button onClick={() => {
        setCounter(counter + 1);
      }}>Increase Counter</button>
    </div>
  )}