import Card from "../../Components/Card/card";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import { useEffect } from "react";
import NavBar from "../../Components/NavBar/navBar";
import style from "./home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <NavBar />
      {countries.map((country) => {
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
  );
}
