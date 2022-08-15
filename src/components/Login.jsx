import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Swal from "sweetalert2";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { logIn, register } = useContext(UserContext);
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

        <button
          className="btn btn-primary margin-auto d-block width70p"
          onClick={showPassword}
        >
          Show Password
        </button>
        <button
          className="btn btn-primary margin-auto margin-bottom40px d-block width70p margin-top5px"
          onClick={() => {
            if (username.length > 0 && password.length > 0) {
              logIn(username, password);
              navigate("/search");
            } else {
              alert("you didnt put something in!");
            }
          }}
        >
          Sign in
        </button>

        <a
          className=""
          onClick={() => {
            if (username.length > 4 && password.length >= 8) {
              register(username, password);
              alert(
                "You have successfully registered an account. You can now Sign In"
              );
              Swal("Account Created", "You can now Sign In");
            }
          }}
        >
          Register Here
        </a>
      </div>
    </>
  );
}

export default Login;
