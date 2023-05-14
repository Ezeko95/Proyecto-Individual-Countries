import { useNavigate } from "react-router-dom";
import style from "./search.module.css";

export default function Search() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/results");
  };
  return (
    <div>
      <div className={style.searchContainer}>
        <input
          type="text"
          placeholder="Search.."
          name="search"
          autoComplete="on"
        />
        <button type="submit" onClick={handleClick}>
          Buscar
        </button>
      </div>
    </div>
  );
}
