import React, { useState } from 'react';

export default () => {
  const [count, setCount ] = useState(0)
  return <div>
    <p>Hello from react jsx {count}</p>
    <button onClick={() => setCount(count+1)}>Going up!</button>
  </div>;
};
