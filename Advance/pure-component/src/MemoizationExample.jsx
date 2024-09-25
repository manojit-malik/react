import React, { useState, useMemo } from 'react';

const ExpensiveComponent = ({ count }) => {
  // Simulating an expensive computation
  const computeExpensiveValue = (count) => {
    console.log('Computing expensive value...');
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += i;
    }
    return result;
  };

  // Memoize the result using useMemo
  const expensiveValue = useMemo(() => computeExpensiveValue(count), [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}</p>
    </div>
  );
};

const MemoizationExample = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Memoization Example</h2>
      <button onClick={incrementCount}>Increment Count</button>
      <ExpensiveComponent count={count} />
    </div>
  );
};

export default MemoizationExample;
