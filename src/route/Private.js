import React from "react";
import { Navigate } from "react-router-dom";
import MyPage from "../pages/MyPage";

const Private = ({ authenticate }) => {
  return authenticate === true ? <MyPage /> : <Navigate to="/login"></Navigate>;
};

export default Private;
