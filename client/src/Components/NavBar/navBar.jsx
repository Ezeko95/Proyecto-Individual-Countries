import style from "./navBar.module.css";
import { useDispatch } from "react-redux";
import { getCountries, getCountryByName } from "../../redux/actions";
import { useState, useEffect } from "react";

export default function NavBar({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.length) {
      dispatch(getCountryByName(search));
      setCurrentPage(1);
    } else if (search.length === 0) {
      dispatch(getCountries());
    }
  }, [search, dispatch, setCurrentPage]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className={style.topnav}>
      <a className={style.active} href="/home">
        Home
      </a>
      <div id="#MyLinks" className={style.links}>
        <a href="/activities">Activities</a>
        <a href="/about">About</a>
        <a href="/form">Create</a>
      </div>
      <form>
        <input
          type="text"
          placeholder="Buscar países..."
          name="search"
          value={search}
          onChange={handleSearch}
        />
      </form>
    </div>
  );
}
