import React from "react";
import { useLoaderData } from "react-router-dom";
import Pro from "../Component/Pro";
const Product = () => {
  const products = useLoaderData();
  const productes = products.products;

  return (
    <div>
      <h1>Total Productes of {productes.length}</h1>
      
        <div className="grid grid-cols-4 gap-5">
          {productes.map((item) => (
            <Pro item={item}></Pro>
          ))}
        </div>
   
    </div>
  );
};

export default Product;
