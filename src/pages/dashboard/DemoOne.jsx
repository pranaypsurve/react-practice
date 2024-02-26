import React, { useMemo, useState } from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
function DemoOne({ test }) {
  const [count, setCount] = useState(0);
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };
  console.log("DemoOne");
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <>
      <div onClick={() => setCount(count + 1)}>DemoOne{count}</div>
      <h2>Expensive Calculation</h2>
      {calculation}
      {/* <h2 onClick={() => test()}>test</h2> */}
    </>
  );
}
export default React.memo(DemoOne);
