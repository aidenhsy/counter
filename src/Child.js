import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counterActions";

const Child = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      {counter}
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Child;
