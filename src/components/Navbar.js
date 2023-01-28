import React from "react";
import { Link, useNavigate } from "react-router-dom";

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
        "지속가능성"
    ]
  const navigate = useNavigate();

  const goMain = () => {
    navigate("/");
  };
  const goLogin = () => {
    navigate("/login");
  };

  const goMyPage = () => {
    navigate("/myPage");
  };

  return (
    <div className="navbar-area">
      <div className="btn-con">
        <div onClick={goMyPage} className="btn-box">
          <img src="https://cdn-icons-png.flaticon.com/512/2354/2354573.png"></img>
          <span>마이페이지</span>
        </div>
        <div onClick={goLogin} className="btn-box">
          <img src="https://cdn-icons-png.flaticon.com/512/345/345535.png"></img>
          <span>로그인</span>
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
        {menuList.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
};

export default Navbar;
