import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    //제품 사진
    //제품 이름
    //가격
    //인기상품
    //신제품
    <div className="card-area" onClick={goDetail}>
      <img src={item.img}></img>
      <div className="info-box">
        <div className="title">{item.title}</div>
        <span className="price">{item.price}</span>
        <span className="choice">
          {item.choice === true ? "Conscious Choice" : ""}
        </span>
        <span className="new">{item.new === true ? "new" : ""}</span>
      </div>
    </div>
  );
};

export default ProductCard;
