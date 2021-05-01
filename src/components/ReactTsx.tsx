import React, { useState } from "react";

export default () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>Hello from react tsx {count}</p>
      <button onClick={() => setCount(count + 1)}>Going up!</button>
    </div>
  );
};
