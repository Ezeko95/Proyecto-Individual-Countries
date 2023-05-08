// import style from "./landing.module.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <Link to="/home">
        <button>Click to enter!</button>
      </Link>
    </div>
  );
}
