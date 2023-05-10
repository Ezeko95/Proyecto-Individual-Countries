import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryId, cleanDetail } from "../../redux/actions";
import React from "react";

export default function Detail() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const countryDetail = useSelector((state) => state.countryDetail);
  console.log(countryDetail);

  useEffect(() => {
    dispatch(getCountryId(id));
  }, [dispatch, id]);
  return (
    <div>
      {countryDetail ? (
        <>
          <h1>{countryDetail.name}</h1>
          <img
            src={countryDetail.flag}
            alt={countryDetail.name}
            height="600"
            width="1000px"
          />
          <h2>{countryDetail.continent}</h2>
          <h2>{countryDetail.capital}</h2>
          <h2>{countryDetail.subregion}</h2>
          <h2>{countryDetail.area}</h2>
          <h2>{countryDetail.population}</h2>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
