import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "./redux/counter";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <p>Parent Component</p>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>
        -
      </button>
      {counter}
      <button onClick={() => dispatch(counterSlice.actions.increment())}>
        +
      </button>

      <br />
      {/* 
      <p>Child Component</p>
      <Child count={counter} /> */}
    </div>
  );
};

export default App;
