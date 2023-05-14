import Card from "../../Components/Card/card";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getCountryByName } from "../../redux/actions";
import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/navBar";
import style from "./home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [selectedContinent, setSelectedContinent] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const filteredCountries = selectedContinent
    ? countries.filter((country) => country.continent === selectedContinent)
    : countries;

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);

  const paginateCountries = filteredCountries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleContinentChange = (event) => {
    setSelectedContinent(event.target.value);
    setCurrentPage(1); // Reset current page when changing the continent filter
  };

  return (
    <>
      <NavBar />

      <div className={style.filter}>
        <label>Filter by Continent: </label>
        <select value={selectedContinent} onChange={handleContinentChange}>
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
        </select>
      </div>

      {/* Paginacion */}

      <div className={style.pages}>
        <button disabled={currentPage === 1} onClick={goToPreviousPage}>
          Previous
        </button>
        <button disabled={currentPage === totalPages} onClick={goToNextPage}>
          Next
        </button>
      </div>

      <div className={style.container}>
        {paginateCountries.map((country) => {
          return (
            <Card
              key={country.id}
              id={country.id}
              name={country.name}
              flag={country.flag}
              continent={country.continent}
            />
          );
        })}
      </div>
    </>
  );
}
