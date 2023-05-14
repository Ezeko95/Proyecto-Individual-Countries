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
  const [sortOrder, setSortOrder] = useState(""); // Track the sort order
  const itemsPerPage = 15;

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const filteredCountries = selectedContinent
    ? countries.filter((country) => country.continent === selectedContinent)
    : countries;

  const sortedCountries = sortCountries(filteredCountries, sortOrder);

  const totalPages = Math.ceil(sortedCountries.length / itemsPerPage);

  const paginateCountries = sortedCountries.slice(
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
    setCurrentPage(1);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  function sortCountries(countries, sortOrder) {
    switch (sortOrder) {
      case "ascName":
        return countries.sort((a, b) => a.name.localeCompare(b.name));
      case "descName":
        return countries.sort((a, b) => b.name.localeCompare(a.name));
      case "ascPopulation":
        return countries.sort((a, b) => a.population - b.population);
      case "descPopulation":
        return countries.sort((a, b) => b.population - a.population);
      default:
        return countries;
    }
  }

  return (
    <>
      <NavBar />

      <div className={style.filter}>
        <label>Filter by Continent: </label>
        <select value={selectedContinent} onChange={handleContinentChange}>
          <option value="">Todos</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
        </select>
        <label>Sort by: </label>
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="">--Ordenar--</option>
          <option value="ascName">Nombre (A-Z)</option>
          <option value="descName">Nombre (Z-A)</option>
          <option value="ascPopulation">Población (Menor a Mayor)</option>
          <option value="descPopulation">Población (Mayor a Menor)</option>
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
