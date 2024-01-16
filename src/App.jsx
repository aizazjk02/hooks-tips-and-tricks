import ProductCardBetter from "./conditionalRender";
import ProductCard from "./conditionalRender";
import UseStateInfo from "./dontUseState";
import FormStateDemo from "./handleFormState";
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
    </div>
  );
};

export default App;
