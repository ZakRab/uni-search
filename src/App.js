import Login from "./components/Login";
import Menu from "./components/Menu";
import SearchForm from "./components/SearchForm";
import Saves from "./components/Saves";
import { UserContext, verify } from "./context/UserContext";
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
  // const { verify } = useContext(UserContext);
  // useEffect(() => {
  //   async function init() {
  //     await verify();
  //   }
  //   init();
  // }, []);

  return (
    <>
      <Router>
        <Menu></Menu>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/search" element={<SearchForm></SearchForm>}></Route>
          <Route path="/saves" element={<Saves></Saves>}></Route>
          <Route path="*" element={<Navigate to="/search" />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
