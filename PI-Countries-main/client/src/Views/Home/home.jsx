import Card from "../../Components/Card/card";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, getCountries } from "../../redux/actions";
import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/navBar";
import style from "./home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);
  const [selectedActivity, setSelectedActivity] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("");
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  const handleActivityChange = (event) => {
    setSelectedActivity(event.target.value);
    setCurrentPage(1);
  };

  const filteredCountries = selectedContinent
    ? countries.filter((country) => country.continent === selectedContinent)
    : countries;

  const filteredCountriesByActivity = selectedActivity
    ? filteredCountries.filter((country) =>
        country.activities.some(
          (activity) => activity.name === selectedActivity
        )
      )
    : filteredCountries;

  const sortedCountries = sortCountries(filteredCountriesByActivity, sortOrder);

  const totalPages = Math.ceil(sortedCountries.length / itemsPerPage);

  const paginateCountries = sortedCountries
    ? sortedCountries.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    : [];

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
      <NavBar setCurrentPage={setCurrentPage}> </NavBar>
      <div className={style.background}>
        <div className={style.filter}>
          <label>
            Filtrar por
            <br />
            actividad:{" "}
          </label>
          <select value={selectedActivity} onChange={handleActivityChange}>
            <option value="">--Todos--</option>
            {activities ? (
              activities.map((activity) => (
                <option key={activity.name} value={activity.name}>
                  {activity.name}
                </option>
              ))
            ) : (
              <h1>loading...</h1>
            )}
          </select>

          <label>
            Filtrar por
            <br />
            continente:
          </label>
          <select value={selectedContinent} onChange={handleContinentChange}>
            <option value="">--Todos--</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="North America">America del Norte</option>
            <option value="Oceania">Oceania</option>
            <option value="South America">America del sur</option>
          </select>
          <label>
            Ordenar
            <br />
            por:{" "}
          </label>
          <select value={sortOrder} onChange={handleSortChange}>
            <option value="">--Ordenar--</option>
            <option value="ascName">Nombre (A-Z)</option>
            <option value="descName">Nombre (Z-A)</option>
            <option value="ascPopulation">Población (Menor a Mayor)</option>
            <option value="descPopulation">Población (Mayor a Menor)</option>
          </select>
        </div>

        <div className={style.pages}>
          <button disabled={currentPage === 1} onClick={goToPreviousPage}>
            Anterior
          </button>
          <button disabled={currentPage === totalPages} onClick={goToNextPage}>
            Siguiente
          </button>
        </div>

        <div className={style.container}>
          {paginateCountries ? (
            paginateCountries.map((country) => {
              return (
                <Card
                  key={country.id}
                  id={country.id}
                  name={country.name}
                  flag={country.flag}
                  continent={country.continent}
                />
              );
            })
          ) : (
            <h1>loading...</h1>
          )}
        </div>
      </div>
    </>
  );
}
