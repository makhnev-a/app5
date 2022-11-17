import React from "react";

export const Counter = ({ onSetCounter = (f) => f, counter = 0 }) => {
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

export const TestBlackBlock = () => {
  return (
    <div style={{
      width: "320px",
      height: "568px",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "black"
    }}/>
  )
}
