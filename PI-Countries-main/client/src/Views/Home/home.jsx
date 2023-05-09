// import CardsContainer from "../../Components/CardsContainer/cardsContainer";
import Card from "../../Components/Card/card";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import { useEffect } from "react";
import style from "./home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  return (
    <div className={style.container}>
      <Card countries={countries} />
    </div>
  );
}
