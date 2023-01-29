import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  let { id } = useParams();
  // console.log(id);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/kicu-xxo/hnm-route-page/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data?", data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="product-details-con">
      <img src={product?.img}></img>
      <div>
        <span className="product-title">{product?.title}</span>
        <span className="product-price">&#8361;{product?.price}</span>
        <select>
          <option className="checked" defaultChecked>사이즈 선택</option>
          <option>S</option>
          <option>M</option>
          <option>R</option>
        </select>
        <button>
          추가
          </button>
      </div>
    </div>
  );
};

export default ProductDetails;
