import React from "react";

const Counter = ({ onSetCounter = (f) => f, counter = 0 }) => {
  return (
    <div>
      <p>{counter}</p>
      <p>
        <button onClick={() => onSetCounter(counter + 1)}>Count ++</button>
      </p>

      <p>
        <button onClick={() => onSetCounter(counter - 1)}>Counter - </button>
      </p>
    </div>
  );
};

export default Counter;
