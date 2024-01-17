import ComponentReRender from "./componentReRender";
import ProductCardBetter from "./conditionalRender";
import ProductCard from "./conditionalRender";
import CustomHookExample from "./customHookExample";
import UseStateInfo from "./dontUseState";
import FormStateDemo from "./handleFormState";
import HandleNullObjects from "./handleNullObjects";
import CounterExample from "./setIntervalExample";
import Counter from "./setStateTips";
import UpdateObject from "./updateObjectState";

const App = () => {
  return (
    <div>
      {
        // setState Example:
      }
      <Counter />
      {
        // Conditional Rendering Example:
      }
      <ProductCardBetter id={2} />

      {
        // update an object inside a state
      }
      <UpdateObject />
      {
        // update form state
      }
      <FormStateDemo />
      {
        // Dont have to use state all the time
      }
      <UseStateInfo />
      {
        // When does a component re-renders?
      }
      <ComponentReRender />
      {
        // How to handle null objects?
      }
      <HandleNullObjects />
      {
        // custom hook example 

      }
      <CustomHookExample/>
      {
        // setInterval Example 
        <CounterExample/>

      }
    </div>
  );
};

export default App;
