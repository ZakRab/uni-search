import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { logIn } = useContext(UserContext);
  const [passText, setPassText] = useState(false);

  const showPassword = () => {
    setPassText(!passText);
  };

  return (
    <>
      <div className="login-border login-margin width55p">
        <div className="animation">
          <img
            className="logo-login animation"
            src={require("./unisearch-logo.png")}
            alt="what"
          />
        </div>
        <h1 className="text-center margin-bottom40px">Sign in</h1>
        <div className="mb-3 container">
          <label htmlFor="userInput" className="form-label margin-left15p">
            Username
          </label>
          <input
            className="form-control width70p margin-auto "
            value={username}
            id="userInput"
            type={"text"}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="mb-3 container">
          <label htmlFor="passwordInput" className="form-label margin-left15p">
            Password
          </label>
          <input
            className="form-control width70p margin-auto"
            value={password}
            id="passwordInput"
            type={passText ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="">
          <button
            className="btn btn-primary margin-auto d-block width70p "
            onClick={showPassword}
          >
            Show Password
          </button>
          <button
            className="btn btn-primary margin-auto margin-bottom40px d-block width70p margin-top5px "
            onClick={() => {
              if (username.length > 0 && password.length > 0) {
                logIn(username);
                navigate("/search");
              }
            }}
          >
            Sign in
          </button>
{/* <div> */}
          {/* <button>or create a new account here</button></div> */}
        </div>
      </div>
    </>
  );
}

export default Login;
