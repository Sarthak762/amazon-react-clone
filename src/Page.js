import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from "./Box";
import "./Page.css";
function Page() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res);
      setProducts(res.data);
    });
  }, []);
  return (
    <div className="page">
      <div className="page_top">
        <h2>Welcome to new Amazon</h2>
      </div>
      <div className="itemCont">
        {products.map((data) => (
          <Box
            imageUrl={data.image}
            name={data.title}
            price={data.price}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
