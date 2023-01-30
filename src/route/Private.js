import React from "react";
import { Navigate } from "react-router-dom";
import MyPage from "../pages/MyPage";

const Private = ({userName, authenticate }) => {
  return authenticate ? <MyPage userName={userName} /> : <Navigate to="/login"></Navigate>;
};

export default Private;
