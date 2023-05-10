import { Link } from "react-router-dom";
import style from "./card.module.css";

export default function Card({ id, name, flag, continent }) {
  return (
    <div className={style.card}>
      <div className={style.flagContainer}>
        <img src={flag} alt={name} width="300" height="150" />
      </div>
      <Link to={`/detail/${id}`}>
        <h2 className={style.titulo}>{name}</h2>
      </Link>
      <h2>{continent}</h2>
    </div>
  );
}
