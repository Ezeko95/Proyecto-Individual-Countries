import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../redux/actions";
import { useEffect } from "react";
import "./activities.css";

export default function Activities() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);
  
  console.log(activities)
  return (
    <div className="background">
      <div className="topnav">
        <a className="active" href="/home">
          Home
        </a>
      </div>
      <h1 className="h1">Activities</h1>
      <div className="cardContainer">
        {activities ? (
          activities.map((activity) => {
            return (
              <>
                <div className="card" key={activity.id}>
                  <h1>Nombre: {activity.name}</h1>
                  <h2>Temporada: {activity.season}</h2>
                  <h3>Duración: {activity.duration}</h3>
                  <h3>Dificultad: {activity.difficulty}</h3>
                </div>
              </>
            );
          })
        ) : (
          <h1>No Activities found</h1>
        )}
      </div>
    </div>
  );
}
