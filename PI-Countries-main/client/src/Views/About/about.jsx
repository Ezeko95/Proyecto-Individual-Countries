import { useNavigate } from "react-router-dom";
import style from "./about.module.css";

export default function About() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className={style.background}>
      <div className={style.topnav}>
        <a className={style.active} onClick={handleClick}>
          Home
        </a>
      </div>
      <div className={style.about}>
        <div className={style.titulo}>
          <h1>Proyecto Countries por: Gianluca Cianchi</h1>
        </div>
        <div className={style.parrafo}>
          <p>
            This SPA was created using React.js, Redux, Node.js, Express and
            Sequelize. It´s has been a challlenging project and I´m proud to
            announce that is already finished.
          </p>
        </div>
      </div>
    </div>
  );
}
