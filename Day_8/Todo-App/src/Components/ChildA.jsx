import React from "react";

const ChildA = ({ update }) => {
  return (
    <button onClick={() => update("Updated from Child A")}>Update State</button>
  );
};

export default ChildA;
