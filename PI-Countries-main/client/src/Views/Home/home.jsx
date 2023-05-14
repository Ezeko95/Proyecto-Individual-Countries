import Card from "../../Components/Card/card";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getCountryByName } from "../../redux/actions";
import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/navBar";
import style from "./home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  ////////////////////////////pagintation/////////////////////////////////////////

  const totalPages = Math.ceil(countries.length / itemsPerPage);

  const paginateCountries = countries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <NavBar />

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
