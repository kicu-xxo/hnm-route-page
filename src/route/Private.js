import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import MyPage from "../pages/MyPage";

const Private = () => {
  const authenticate = useSelector((state) => state.auth.authenticate);
  return authenticate ? <MyPage /> : <Navigate to="/login"></Navigate>;
};

export default Private;
