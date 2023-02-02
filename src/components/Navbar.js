import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "스포츠",
    "Sale",
    "지속가능성",
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authenticate = useSelector((state) => state.auth.authenticate);
  console.log(authenticate);

  const login = () => {
    authenticate ? dispatch(authenticateAction.logout()) : navigate("/login");
  };

  const goMain = () => {
    navigate("/");
  };

  const goMyPage = () => {
    navigate("/myPage");
  };

  const search = (event) => {
    let keyword = event.target.value;

    if (event.code === "Enter") {
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div className="navbar-area">
      <div className="btn-con">
        <div onClick={goMyPage} className="btn-box">
          <img src="https://cdn-icons-png.flaticon.com/512/2354/2354573.png"></img>
          <span>마이페이지</span>
        </div>
        <div onClick={login} className="btn-box">
          <img src="https://cdn-icons-png.flaticon.com/512/345/345535.png"></img>
          <span>{authenticate ? "로그아웃" : "로그인"}</span>
        </div>
      </div>
      <div className="logo-box">
        <img
          className="logo-img"
          onClick={goMain}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1920px-H%26M-Logo.svg.png"
        ></img>
      </div>
      <ul className="menu-area">
        {menuList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="search-box">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149852.png"></img>
        <input
          type="text"
          placeholder="제품 검색"
          onKeyDown={(event) => search(event)}
        ></input>
      </div>
    </div>
  );
};

export default Navbar;
