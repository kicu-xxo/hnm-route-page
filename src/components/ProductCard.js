import React from "react";

const ProductCard = () => {
  return (
    //제품 사진
    //제품 이름
    //가격
    //인기상품
    //신제품
    <div className="card-area">
      <img src="https://lp2.hm.com/hmgoepprod?set=source[/af/50/af50afa939c28ba24fd263fb573b4ad5f0858b14.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"></img>
      <div className="info-box">
        <span className="title">슬림핏 맘 하이웨이스트 앵클 진</span>
        <span className="price">20000</span>
        <span className="choice">인기상품</span>
        <span className="new">신제품</span>
      </div>
    </div>
  );
};

export default ProductCard;
