import { Link } from "react-router-dom";
import style from "./card.module.css";

export default function Card({ id, name, flag, continent }) {
  return (
    <Link to={`/detail/${id}`}>
      <div className={style.card}>
        <img
          src={flag}
          alt="flag"
          className={style.cardImage}
          height="200"
          width="320"
        />
        <div className={style.container}>
          <h4>
            <b>{name}</b>
          </h4>
          <p>{continent}</p>
        </div>
      </div>
    </Link>
  );
}
