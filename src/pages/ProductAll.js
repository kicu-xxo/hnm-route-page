import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  //db.jon 불러오는 함수
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/kicu-xxo/hnm-route-page/products?q${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log('data?', data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className="all-area">
      <div className="search-box">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149852.png"></img>
        <input type="text" placeholder="제품 검색"></input>
      </div>
      <div className="product-cards-area">
        {productList.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductAll;
