import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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
      <h1 className="text-center">Login</h1>
      <div className="mb-3 container">
        <label htmlFor="userInput" className="form-label">
          Username
        </label>
        <input
          className="form-control"
          value={username}
          id="userInput"
          type={"text"}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div className="mb-3 container">
        <label htmlFor="passwordInput" className="form-label">
          Password
        </label>
        <input
          className="form-control"
          value={password}
          id="passwordInput"
          type={passText ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div>
        <button className="btn btn-primary" onClick={showPassword}>
          Show Password
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            if (username.length > 0 && password.length > 0) {
              logIn(username);
              navigate("/search");
            }
          }}
        >
          Login
        </button>
      </div>
    </>
  );
}

export default Login;
