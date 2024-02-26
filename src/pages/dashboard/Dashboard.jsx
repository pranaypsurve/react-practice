import React from "react";
import { Link, Outlet } from "react-router-dom";
const DemoOne = React.lazy(() => import("./DemoOne"));
import { Suspense, useCallback, useState } from "react";

const Dashboard = () => {
  const [count, setCount] = useState(0);
  const [sc, setc] = useState(true);
  const test = useCallback(() => {
    () => {
      console.log("test");
    };
  }, []);
  return (
    <>
      <div onClick={() => setCount(count + 1)}>Dashboard {count}</div>
      <div onClick={() => setc(!sc)}>toogle </div>
      <div>{sc ? "ssssss" : "wwwwwww"}</div>
      <Link to="detail/1">Id</Link>
      <Suspense fallback={<div>loading</div>}>
        <DemoOne test={test} />
      </Suspense>
      {/* <Demo2 /> */}
      <Outlet />
      <div
        onClick={() => {
          import("../../utlis/functions").then((test) => {
            alert(test.add(2, 1));
          });
        }}
      >
        Add
      </div>
    </>
  );
};

export default Dashboard;
