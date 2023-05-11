import style from "./landing.module.css";
import { Link } from "react-router-dom";
import bg from "../../assets/worlds_political_map_wallpaper_by_miiikstais_d5r5r52-fullview.jpg";

export default function Landing() {
  return (
    <div>
      <div className={style.h1}>
        <h1>Bienvenidos!</h1>
      </div>
      <div>
        <Link to="/home">
          <button>Click to enter!</button>
        </Link>
      </div>
      <div>
        <img classname={style.bg} src={bg} alt="bg" />
      </div>
    </div>
  );
}
