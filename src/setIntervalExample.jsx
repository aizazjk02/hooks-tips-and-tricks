import { useEffect, useState } from "react";

const CounterExample = () => {
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       console.log("interval function running...");
  //       setCount(count + 1); //* Here we execute this setState after every interval.
  //     }, 1000);

  //     return () => clearInterval(interval) //* This is a cleanup function which runs after every interval to cleanup the previous interval to avoid memory leaks.

  //   }, [count]); //** we are re-running the useEffect if the count is changed as we want new value for each setInterval. */

  useEffect(() => {
    //* if you want to avoid all the unecessary code from the above example.
    //*Just use prev state to update the count.
    //* Count variable will not update as it will be same all the time in current execution context of the function.

    const interval = setInterval(() => {
      console.log("interval running...");
      setCount((prev) => prev + 1);
    }, 1000);

    // return () => clearInterval(interval)
  }, []);
  return <div>Count : {count}</div>;
};

export default CounterExample;
