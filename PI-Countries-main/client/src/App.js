import "./App.css";
import NavBar from "./Components/NavBar/navBar";
import { Landing, Home, Form, Detail } from "./Views";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
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
