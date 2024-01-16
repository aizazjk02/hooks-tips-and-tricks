import { useEffect, useState } from "react";

/**
 * ! Warning:
 * ? In some cases having conditionals before the hooks might not work...
 */
const ProductCard = ({ id }) => {
  if (!id) return "id is missing";
  const [product, setProduct] = useState(2);
  useEffect(() => {
    console.log("useEffect hook ran!");
  }, []);
  return (
    <div>
      <h2>id:</h2>
      {id /**product item */}
    </div>
  );
};

/**
 * * Better version
 */

const ProductCardBetter = ({ id }) => {
  const [product, setproduct] = useState(null);

  return <div>{id ? <h2>ID: {id}</h2> : <strong>"id is missing"</strong>}</div>;
};

export default ProductCardBetter;
