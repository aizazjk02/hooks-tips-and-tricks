import ProductCardBetter from "./conditionalRender";
import ProductCard from "./conditionalRender";
import Counter from "./setStateTips";

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
  </div>;
};

export default App;
