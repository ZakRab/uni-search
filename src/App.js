import Login from "./components/Login";
import Menu from "./components/Menu";
import SearchForm from "./components/SearchForm";
import Saves from "./components/Saves";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Menu></Menu>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/search" element={<SearchForm></SearchForm>}></Route>
          <Route path="/saves" element={<Saves></Saves>}></Route>
          <Route path="*" element={<Navigate to="/search" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
