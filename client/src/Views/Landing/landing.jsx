import style from "./landing.module.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className={style.landingContainer}>
      <div className={style.welcome}>
        <div className={style.h1}>
          <h1>Welcome!</h1>
        </div>
        <div>
          <Link to="/home">
            <button className={style.button}>Enter!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
