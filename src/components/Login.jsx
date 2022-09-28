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
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
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
        <hr></hr>
        <div className="d-flex justify">
          <div className="flex-grow">
            <h2 className="text-center margin-bottom40px">Register</h2>
            <div>
              <div className="mb-3 container">
                <label
                  htmlFor="userInput"
                  className="form-label margin-left15p"
                >
                  Username
                </label>
                <input
                  className="form-control width70p margin-auto "
                  value={regUsername}
                  id="userInput"
                  type={"text"}
                  onChange={(e) => setRegUsername(e.target.value)}
                ></input>
              </div>
              <div className="mb-3 container">
                <label
                  htmlFor="passwordInput"
                  className="form-label margin-left15p"
                >
                  Password
                </label>
                <input
                  className="form-control width70p margin-auto"
                  value={regPassword}
                  id="passwordInput"
                  type={passText ? "text" : "password"}
                  onChange={(e) => setRegPassword(e.target.value)}
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
                onClick={async () => {
                  if (username.length > 4 && password.length >= 8) {
                    let res = await register(regUsername, regPassword);
                    if (res) {
                      new Swal(
                        "Successfully Registered",
                        "You Can Sign In Now ;)",
                        "success"
                      );
                    } else {
                      new Swal(
                        "Username already taken",
                        "Please pick a different username",
                        "error"
                      );
                    }
                  }
                }}
              >
                Register
              </button>
            </div>
          </div>
          <div className="flex-grow">
            <h2 className="text-center margin-bottom40px">Sign in</h2>
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
              <label
                htmlFor="passwordInput"
                className="form-label margin-left15p"
              >
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
