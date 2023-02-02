import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const MyPage = () => {
  //map 적용할 menuList
  const username = useSelector((state) => state.auth.id);
  const menuList = [
    {
      id: 0,
      name: "나의 주문",
      img: "https://cdn-icons-png.flaticon.com/512/2900/2900216.png",
    },
    {
      id: 1,
      name: "계정 설정",
      img: "https://cdn-icons-png.flaticon.com/512/126/126548.png",
    },
    {
      id: 2,
      name: "나의 포인트 내역",
      img: "https://cdn-icons-png.flaticon.com/512/1790/1790829.png",
    },
    {
      id: 3,
      name: "멤버십",
      img: "https://cdn-icons-png.flaticon.com/512/2354/2354573.png",
    },
    {
      id: 4,
      name: "문의하기",
      img: "https://cdn-icons-png.flaticon.com/512/3249/3249451.png",
    },
    {
      id: 5,
      name: "평점 & 리뷰",
      img: "https://cdn-icons-png.flaticon.com/512/126/126482.png",
    },
    {
      id: 6,
      name: "로그아웃",
      img: "https://cdn-icons-png.flaticon.com/512/5123/5123858.png",
    },
    {
      id: 7,
      name: "친구 초대하기",
      img: "https://cdn-icons-png.flaticon.com/512/3443/3443459.png",
    },
  ];

  return (
    <div className="my-page-area">
      {/* info-container */}
      <div className="info-con">
        <div className="user-info-box">
          <span>안녕하세요, {username} 님</span>
          <img src="https://cdn-icons-png.flaticon.com/512/126/126548.png"></img>
        </div>

        <div className="point-box">
          <span className="user-point-text">
            <span>10</span> 포인트
          </span>
          <input type="range" value="20" readOnly></input>
          <span className="point-info">
            다음 보너스 쿠폰을 밭으려면 90 포인트, 플러스 등급이 되기 위해서는
            290 포인트가 필요합니다.
            <br />
            쿠폰은 포인트 적립 후 30일 이후에 발행됩니다.
          </span>
          <div className="user-id-box">
            <img src="https://cdn-icons-png.flaticon.com/512/39/39881.png"></img>
            <span>회원 ID 보기</span>
          </div>
        </div>
        {/* info-container END */}

        {/* info-list */}
        <ul className="info-list-box">
          {menuList.map((item) => (
            <li key={item.id}>
              <div className="menu-item">
                <img src={item.img}></img>
                {item.name}
              </div>
              <img
                className="arrow-ico"
                src="https://cdn-icons-png.flaticon.com/512/6423/6423875.png"
              ></img>
            </li>
          ))}
        </ul>
      </div>
      {/* info-list END */}

      {/* purchase-list-con */}
      <div className="purchase-list-con">
        <span className="title">모든 구매 내역</span>
        <div className="purchase-box">
          <span>배송완료</span>
          <span className="date">2023년 01월 01일</span>
          <img src="https://cdn-icons-png.flaticon.com/512/6423/6423875.png"></img>
        </div>
        <div className="purchase-box">
          <span className="purchase-list-text">모든 구매 내역 보기</span>
          <img src="https://cdn-icons-png.flaticon.com/512/6423/6423875.png"></img>
        </div>
      </div>
      {/* purchase-list-con END */}
    </div>
  );
};

export default MyPage;
