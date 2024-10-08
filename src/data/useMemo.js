import usememo from '../assets/image/usememo.png';
const Redux = {
  image: usememo,
  title: ['useMemo'],
  principles: [
    'It is used to re-render specific part of component on the change of dependency like [count]',
   
  ],
  Howitworks: [
    'useMemo takes two arguments: a function that computes a value, and an array of dependencies.',
    'React will only recompute the memoized value when one of the dependencies has changed.',
  ],
  paragraph: [
    `useMemo is used to memoize the result of a computation, preventing expensive calculations on every render unless the dependencies change. It helps optimize performance, especially in cases where calculations are costly or if re-rendering would be problematic.`,
  ],
  example: ['Let’s break down the example 👨‍💻'],
  code: [
    "import React, { useMemo, useState } from 'react';",
    '',
    'function ExpensiveComputationComponent({ number }) {',
    '  // Memoize the result of the expensive computation',
    '  const computedValue = useMemo(() => {',
    "    console.log('Computing...');",
    '    let sum = 0;',
    '    for (let i = 0; i < number * 1000000; i++) {',
    '      sum += i;',
    '    }',
    '    return sum;',
    '  }, [number]);',
    '',
    '  return <div>Computed Value: {computedValue}</div>;',
    '}',
    '',
    'function App() {',
    '  const [number, setNumber] = useState(1);',
    '  const [increment, setIncrement] = useState(0);',
    '',
    '  return (',
    '    <div>',
    '      <ExpensiveComputationComponent number={number} />',
    '      <button onClick={() => setIncrement(increment + 1)}>Increment</button>',
    '      <button onClick={() => setNumber(number + 1)}>Change Number</button>',
    '    </div>',
    '  );',
    '}',
    '',
    'export default App;',
  ],
};
export default Redux;
