import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryId } from "../../redux/actions";
import React from "react";
import style from "./detail.module.css";

export default function Detail() {
  const dispatch = useDispatch();

  let { id } = useParams();
  const countryDetail = useSelector((state) => state.countryDetail);

  useEffect(() => {
    dispatch(getCountryId(id));
  }, [dispatch, id]);

  return (
    <div className={style.background}>
      <div className={style.topnav}>
        <a className={style.active} href="/home">
          Home
        </a>
      </div>
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
                <h2>Continent: {countryDetail.continent}</h2>
                <h2>Capital: {countryDetail.capital}</h2>
                <h2>Subregion: {countryDetail.subregion}</h2>
              </div>
              <div className={style.columnRight}>
                <h2>Area: {countryDetail.area}km</h2>
                <h2>Poblation: {countryDetail.population}</h2>
              </div>
            </div>
            <h2>Activities:</h2>
            <div className={style.activitiesContainer}>
              {countryDetail.activities &&
              countryDetail.activities.length > 0 ? (
                countryDetail.activities.map((activity) => (
                  <div key={activity.id} className={style.activities}>
                    <h3>{activity.name}</h3>
                    <p>Difficulty: {activity.difficulty}</p>
                    <p>Duration: {activity.duration}</p>
                    <p>Season: {activity.season}</p>
                  </div>
                ))
              ) : (
                <p>No activities found.</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
