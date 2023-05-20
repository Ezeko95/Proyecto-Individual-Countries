import { useState, useEffect } from "react";
import { getCountries } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import style from "./form.module.css";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useSelector((state) => state.countries);

  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: [],
  });
  console.log(activity);
  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setActivity({ ...activity, [property]: value });
    setErrors({ ...errors, [property]: value });
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
    try {
      await axios.post("/activities", activity);
      alert("Actividad creada exitósamente");
    } catch (error) {
      alert("Hubo un error al crear la actividad");
      console.error(error);
    }
  };
  const handleClick = () => {
    navigate("/home");
  };

  const sortedCountries = countries.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className={style.background}>
      <div className={style.div}>
        <div className={style.topnav}>
          <a className={style.active} onClick={handleClick}>
            Home
          </a>
        </div>
        <h1 className={style.h1}>Creá tu actividad</h1>
        <form onSubmit={submitHandler} className={style.formContainer}>
          <div className={style.div}>
            <label>Nombre: </label>
            <input
              type="text"
              value={activity.name}
              onChange={changeHandler}
              name="name"
              className={style.input}
            />
          </div>
          <div className={style.div}>
            <label>Dificultad: </label>
            <select
              id="country"
              name="difficulty"
              onChange={changeHandler}
              className={style.select}
            >
              <option value="">--Select Difficulty--</option>
              <option value="1">⭐ ☆ ☆ ☆ ☆</option>
              <option value="2">⭐⭐ ☆ ☆ ☆</option>
              <option value="3">⭐⭐⭐ ☆ ☆</option>
              <option value="4">⭐⭐⭐⭐ ☆</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
          </div>
          <div className={style.div}>
            <label>Duración (hs): </label>
            <input
              className={style.input}
              type="number"
              value={activity.duration}
              onChange={changeHandler}
              name="duration"
              min={1}
              max={5}
            />
          </div>
          <div className={style.div}>
            <label>Temporadas: </label>
            <select
              id="country"
              name="season"
              onChange={changeHandler}
              className={style.select}
            >
              <option value="">--Select Season--</option>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
            </select>
          </div>
          <div className={style.div}>
            <label>Paises: </label>
            <select
              name="country"
              onChange={handleSelect}
              className={style.select}
            >
              <option value="">--Elegir países--</option>
              {countries.map((country) => (
                <option id="country" key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className={style.div}>
            <label>Países seleccionados:</label>
            <ul>
              {activity.country.map((selectedCountry, index) => (
                <li key={index}>{selectedCountry}</li>
              ))}
            </ul>
          </div>
          <div className={style.div}>
            <input type="submit" value="submit" className={style.submit} />
          </div>
        </form>
      </div>
    </div>
  );
}
