import { useState, useEffect } from "react";
import { getCountries } from "../../redux/actions";
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
    country: [],
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setActivity({ ...activity, [property]: value });
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleSelect = (event) => {
    if (event.target.value !== "countries") {
      setActivity({
        ...activity,
        country: [...activity.country, event.target.value],
      });
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (
      !activity.name ||
      !activity.difficulty ||
      !activity.duration ||
      !activity.season ||
      activity.country.length === 0
    ) {
      alert("Los campos nos pueden estar incompletos");
      return;
    }
    try {
      await axios.post("http://localhost:3001/activities", activity);
      alert("Actividad creada exitósamente");
    } catch (error) {
      alert("Hubo un error al crear la actividad");
      console.error(error);
    }
  };

  const sortedCountries = countries.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  console.log(activity.country);

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
          <select name="difficulty" onChange={changeHandler}>
            <option value="">--Select Difficulty--</option>
            <option value="1">⭐ ☆ ☆ ☆ ☆</option>
            <option value="2">⭐⭐ ☆ ☆ ☆</option>
            <option value="3">⭐⭐⭐ ☆ ☆</option>
            <option value="4">⭐⭐⭐⭐ ☆</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>
        </div>
        <div>
          <label>Duración: </label>
          <input
            type="number"
            value={activity.duration}
            onChange={changeHandler}
            name="duration"
            min={1}
            max={5}
          />
        </div>
        <div>
          <label>Temporadas: </label>
          <select name="season" onChange={changeHandler}>
            <option value="">--Select Season--</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
          </select>
        </div>
        <div>
          <label>Paises: </label>
          <select name="country" onChange={handleSelect}>
            <option value="">--Elegir países--</option>
            {countries.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Países seleccionados:</label>
          <ul>
            {activity.country.map((selectedCountry, index) => (
              <li key={index}>{selectedCountry}</li>
            ))}
          </ul>
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}
