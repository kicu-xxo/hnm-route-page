import { useNavigate } from "react-router-dom";

const Login = ({ userName, setUserName, setAuthenticate }) => {
  const navigate = useNavigate();

  //로그인(submit)하면 로그인 상태로 바뀌기 + 메인 페이지로 이동
  const loginChange = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
    setUserName(event.target[0].value);
    console.log({ userName });
  };

  return (
    <div className="login-area">
      <form onSubmit={loginChange}>
        <label>
          아이디
          <input type="text" placeholder="carrot123" required></input>
        </label>
        <label>
          비밀번호
          <input type="password" placeholder="carrot12345*-!" required></input>
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
