import React from "react";
import ProductCard from "../components/ProductCard";

const ProductAll = () => {
  return (
    <div className="all-area">
      <div className="search-box">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149852.png"></img>
        <input type="text" placeholder="제품 검색"></input>
      </div>
      <div className="product-cards-area">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductAll;
