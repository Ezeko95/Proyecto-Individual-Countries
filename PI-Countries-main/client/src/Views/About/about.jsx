import style from "./about.module.css";

export default function About() {
  return (
    <div className={style.background}>
      <div className={style.topnav}>
        <a className={style.active} href="/home">
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
