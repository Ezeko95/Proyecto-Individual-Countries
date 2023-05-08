import { useState, useEffect } from "react";
import { getCountries, postActivity } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Form() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  return (
    <div>
      <h1>Creá tu personaje</h1>
      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" value={input.name} name="name" />
        </div>
        <div>
          <label>Dificultad:</label>
          <input type="range" value={input.difficulty} name="difficulty" />
        </div>
        <div>
          <label>Duración</label>
          <input type="time" value={input.duration} name="duration" />
        </div>
        <div>
          <label>Temporadas:</label>
          <input type="text" value={input.season} name="season" />
        </div>
        <div>
          <label>Paises:</label>
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}
