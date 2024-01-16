import { useState } from "react";

const ComponentReRender = () => {
  const [user, setUser] = useState("");
  console.log("rendering...");
  const handleClick = () => {
    /**
     * ? If you pass a same primitive value of the prev state to setState, then the component will not re-render as the state has not changed.
     * ! Same is not true for the objects, as they store reference and not the actual value. So, everytime even if the actual oject is same. It's reference will be different.
     */
    setUser("");
  };
  return (
    <div>
      <h3>Trigger Re-render</h3>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default ComponentReRender;
