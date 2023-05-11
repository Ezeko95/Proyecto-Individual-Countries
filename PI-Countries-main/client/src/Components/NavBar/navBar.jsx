import { Link } from "react-router-dom";
import style from "./navBar.module.css";

export default function NavBar() {
  return (
    <ul>
      <Link to={"/form"}>
        <li>
          <a href="default.asp" className={style.active}>
            Create activity
          </a>
        </li>
      </Link>
      <Link to={"/about"}>
        <li>
          <a href="about.asp">About</a>
        </li>
      </Link>
    </ul>
  );
}
