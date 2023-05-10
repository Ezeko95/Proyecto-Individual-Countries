import { useState, useEffect } from "react";
import { getCountries, postActivity } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import style from "./form.module.css";

export default function Form() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setActivity({ ...activity, [property]: value });
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/activities", activity);
  };

  return (
    <div className={style.formContainer}>
      <h1>Creá tu personaje</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            value={activity.name}
            onChange={changeHandler}
            name="name"
          />
        </div>
        <div>
          <label>Dificultad: </label>
          <input
            type="number"
            value={activity.difficulty}
            onChange={changeHandler}
            name="difficulty"
          />
        </div>
        <div>
          <label>Duración: </label>
          <input
            type="text"
            value={activity.duration}
            onChange={changeHandler}
            name="duration"
          />
        </div>
        <div>
          <label>Temporadas: </label>
          <input
            type="text"
            value={activity.season}
            onChange={changeHandler}
            name="season"
          />
        </div>
        <div>
          <label>Paises: </label>
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}
