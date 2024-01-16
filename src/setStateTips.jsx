import { useState } from "react";

/**
 * * when you use setState to update the state of a component, React doesn't immediately apply the update. Instead, it batches multiple state updates together for performance optimization. This process is asynchronous, and React waits until the next event loop to process the batched updates. During this process, it calculates the new state based on all the batched updates and then performs a minimal set of updates to the DOM. This batching mechanism helps improve performance by reducing the number of times React needs to interact with the DOM. If you have consecutive setState calls, be aware that the state may not be immediately updated, and consider using the functional form of setState to ensure updates are based on the latest state.
 */


const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    // !if you are trying to setState only once then this is the approach you should take.
    setCount(count + 1);

    /**
     * ? So, if you use a local variable like count and try to setState again and again.
     * ? As each setState will be scheduled for a change, the value of count will be same for each change, as we are using a local variable and not the actual state.
     */
    // ! if you are trying to setState multiple times one after the other then use this.
    /**
     * * Here, as we have mentioned the actual state thus on each change the actual state will be modified.
     */
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      Count : {count}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Counter;
