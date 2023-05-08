import "./App.css";
import Landing from "./Views/Landing/landing";
import Detail from "./Views/Detail/detail";
import Home from "./Views/Home/home";
import Form from "./Views/Form/form";
import NavBar from "./Components/NavBar/navBar";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <div>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />

        <Route path="/home" element={<Home />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
