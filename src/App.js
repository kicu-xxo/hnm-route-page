import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import ProductAll from "./pages/ProductAll";
import ProductDetails from "./pages/ProductDetails";
import Private from "./route/Private";

// 1. 메인 페이지 O, 상세 상품 페이지 O, 로그인 페이지 O, 마이 페이지 O 필요
// 2. 모든 페이지에 동알한 navbar 적용 O
// 2. 마이페이지 클릭 시 로그인 상태 -> 마이페이지로 이동, 로그아웃 상태 -> 로그인 페이지로 이동 O
// 3. 제품의 이름으로 상품을 검색할 수 있음
// 4. 로그인 상태 -> 로그아웃 버튼 보이기, 로그아웃 상태 -> 로그인 버튼 보이기 O

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />}></Route>
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        ></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route
          path="/myPage"
          element={<Private authenticate={authenticate} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
