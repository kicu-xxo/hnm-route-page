import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";
import { useState } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //로그인(submit)하면 로그인 상태로 바뀌기 + 메인 페이지로 이동
  const loginChange = (event) => {
    event.preventDefault();
    dispatch(authenticateAction.login(id, password));
    navigate("/");
  };

  return (
    <div className="login-area">
      <form onSubmit={loginChange}>
        <label>
          아이디
          <input
            type="text"
            placeholder="carrot123"
            required
            onChange={(event) => {
              setId(event.target.value);
            }}
          ></input>
        </label>
        <label>
          비밀번호
          <input
            type="password"
            placeholder="carrot12345*-!"
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
        </label>
        <input
          className="login-submit-btn"
          type="submit"
          value="로그인"
        ></input>
      </form>
    </div>
  );
};

export default Login;
