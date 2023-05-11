import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryId } from "../../redux/actions";
import React from "react";
import NavBar from "../../Components/NavBar/navBar";
import style from "./detail.module.css";

export default function Detail() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const countryDetail = useSelector((state) => state.countryDetail);

  useEffect(() => {
    dispatch(getCountryId(id));
  }, [dispatch, id]);
  return (
    <div>
      <NavBar />
      {countryDetail ? (
        <>
          <div className={style.detailContainer}>
            <div className={style.title}>
              <h1>{countryDetail.name}</h1>
              <img
                src={countryDetail.flag}
                alt={countryDetail.name}
                height="500px"
                width="800px"
              />
            </div>
            <div className={style.details}>
              <div className={style.columnLeft}>
                <h2>Continente: {countryDetail.continent}</h2>
                <h2>Capital: {countryDetail.capital}</h2>
                <h2>Subregion: {countryDetail.subregion}</h2>
              </div>
              <div className={style.columnRight}>
                <h2>Área: {countryDetail.area}km</h2>
                <h2>Población: {countryDetail.population}</h2>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
