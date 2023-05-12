import style from "./search.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getCountryByName } from "../../redux/actions";

export default function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };
  const handleSubmit = () => {
    if (search.length) {
      dispatch(getCountryByName(search));
      document.getElementById("search").value = "";
    }
  };
  return (
    <div>
      <div>
        <input
          id="search"
          type="search"
          name="search"
          placeholder="Search..."
          onChange={(event) => handleSearch(event)}
          value={search}
          autoComplete="on"
        />
        <button type="submit" onClick={(event) => handleSubmit(event)}>
          Search
        </button>
      </div>
    </div>
  );
}
