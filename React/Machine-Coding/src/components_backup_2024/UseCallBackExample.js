import React, { useCallback, useEffect, useState } from "react";

const UseCallBackExample = () => {
  const [data, setData] = useState([
    { id: 1, text: "product1" },
    { id: 2, text: "product2" },
  ]);
  const [count, setCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = useCallback(() => {
    setCartCount((cartCount) => (cartCount += 1));
  }, [cartCount]);

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={() => setCount((count) => (count += 1))}>
        Change Count
      </button>

      <p>Cart Item : {cartCount}</p>
      {data.map((product) => (
        <Product data={product} addToCart={addToCart} />
      ))}
    </>
  );
};

// React.memo helps or prevents re-render unneccesasrly when other part component's state changed

const Product = React.memo(({ data, addToCart }) => {
  console.log("Product Component Renders", data.id);
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "5px 0",
        width: "60%",
        display: "block",
      }}
    >
      <p>{data.text}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
});

export default UseCallBackExample;
