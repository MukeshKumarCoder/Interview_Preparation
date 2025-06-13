import React, { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const SharedStateParent = () => {
  const [sharedText, setSharedText] = useState("Initial");
  return (
    <div>
      <ChildA update={setSharedText} />
      <ChildB value={sharedText} />
    </div>
  );
};

export default SharedStateParent;
