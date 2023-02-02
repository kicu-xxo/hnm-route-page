import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //db.jon 불러오는 함수
  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    // console.log(searchQuery);

    //바로 store로 가는 것이 아니라 productAction의 getProducts 함수를 거쳐서 감
    dispatch(productAction.getProducts(searchQuery));
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
