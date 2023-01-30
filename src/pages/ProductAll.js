import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const navigate = useNavigate();

  //db.jon 불러오는 함수
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log(searchQuery);
    let url = `https://my-json-server.typicode.com/kicu-xxo/hnm-route-page/products?q=${searchQuery}`;
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
      <div className="product-cards-area">
        {productList.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductAll;
