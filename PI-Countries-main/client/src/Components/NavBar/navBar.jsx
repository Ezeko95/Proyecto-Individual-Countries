import style from "./navBar.module.css";
import { useDispatch } from "react-redux";
import { getCountries, getCountryByName } from "../../redux/actions";
import { useState } from "react";

export default function NavBar({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (search.length) {
      dispatch(getCountryByName(search));
      setCurrentPage(1);
    } else if (search.length === 0) {
      dispatch(getCountries());
    }
  };

  return (
    <div className={style.topnav}>
      <a className={style.active} href="/home">
        Home
      </a>
      <a href="/activities">Actividades</a>
      <a href="/about">Acerca de</a>
      <a href="/form">Crear</a>
      <div className={style.searchContainer}>
        <form>
          <input
            type="text"
            placeholder="Search.."
            name="search"
            value={search}
            autoComplete="on"
            onChange={handleSearch}
          />
          <button type="submit" onClick={handleSubmit}>
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
}
