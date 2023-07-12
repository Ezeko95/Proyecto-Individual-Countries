import style from "./landing.module.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className={style.landingContainer}>
      <div className={style.welcome}>
        <div className={style.h1}>
          <h1>Bienvenidos!</h1>
        </div>
        <div>
          <Link to="/home">
            <button className={style.button}>Click para entrar!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
