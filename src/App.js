import React from "react";
import Child from "./Child";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counterActions";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <p>Parent Component</p>
      <button onClick={() => dispatch(decrement())}>-</button>
      {counter}
      <button onClick={() => dispatch(increment())}>+</button>

      <br />

      <p>Child Component</p>
      <Child count={counter} />
    </div>
  );
};

export default App;
