import { Link } from "react-router-dom";
import style from "./card.module.css";

export default function Card({ id, name, flag, continent }) {
  return (
    <div>
      <img src={flag} alt={name} width="400" height="250" />
      <Link to={`/detail/${id}`}>
        <h2>Nombre:{name}</h2>
      </Link>
      <h2>Continente:{continent}</h2>
    </div>
  );
}
