import "./App.css";
import { Landing, Home, Form, Detail, About } from "./Views";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Landing />} />

        <Route path="/home" element={<Home />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/about" element={<About />} />

        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
