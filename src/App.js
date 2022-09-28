import Login from "./components/Login";
import Menu from "./components/Menu";
import SearchForm from "./components/SearchForm";
import Saves from "./components/Saves";

import AuthorizedRoute from "./components/AuthorizedRoute";
import UnauthorizedRoute from "./components/UnauthorizedRoute";
import { UserContext } from "./context/UserContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/Footer";
import { useEffect, useContext } from "react";

function App() {
  const { verify } = useContext(UserContext);
  useEffect(() => {
    async function init() {
      await verify();
    }
    init();
  }, []);

  return (
    <>
      <Router>
        <Menu></Menu>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route
            path="/login"
            element={<UnauthorizedRoute comp={<Login />} />}
          />
          <Route
            path="/search"
            element={<AuthorizedRoute comp={<SearchForm />} />}
          />
          <Route path="/saves" element={<AuthorizedRoute comp={<Saves />} />} />
          <Route path="*" element={<Navigate to="/login"></Navigate>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
