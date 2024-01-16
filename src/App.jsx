import ProductCardBetter from "./conditionalRender";
import ProductCard from "./conditionalRender";
import Counter from "./setStateTips";
import UpdateObject from "./updateObjectState";

const App = () => {
  return <div>
   {
    // setState Example: 
   }
    <Counter/>
  {
    // Conditional Rendering Example:
  }
    <ProductCardBetter id={2}/>

    {
      // update an object inside a state

    }
    <UpdateObject/>
  </div>;
};

export default App;
