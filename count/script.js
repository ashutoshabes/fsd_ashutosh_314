import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
    console.log("decrement clicked", count);
  };

  const increment = () => {
    setCount(count + 1);
    console.log("increment clicked", count);
  };

  const reset = () => {
    setCount(0);
    console.log("reset clicked", count);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <div>{count}</div>

      <button onClick={decrement}>-</button>
      <button onClick={reset}>RESET</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default App;