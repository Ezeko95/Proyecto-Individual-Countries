import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/home">HOME</Link>
      <Link to="/create">FORM</Link>
      {/* <div>
        <form action="search">
          <input
            placeholder="Busqueda"
            type="search"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" onClick={handleSubmit}>
            Search...
          </button>
        </form>
      </div> */}
    </div>
  );
}
