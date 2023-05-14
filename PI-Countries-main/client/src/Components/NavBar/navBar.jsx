import style from "./navBar.module.css";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../redux/actions";
import { useState } from "react";

export default function NavBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (search.length) {
      dispatch(getCountryByName(search));
    }
  };

  return (
    <div className={style.topnav}>
      <a className={style.active} href="/home">
        Home
      </a>
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
