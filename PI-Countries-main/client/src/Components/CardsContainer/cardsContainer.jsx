import Card from "../Card/card";
import style from "./cards.module.css";
export default function CardsContainer({ countries }) {
  return (
    <div className={style.container}>
      {/* {countries.map((country) => {
        return (
          // <Card
          //   key={country.id}
          //   id={country.id}
          //   name={country.name}
          //   flag={country.flag}
          //   continent={country.continent}
          //   capital={country.capital}
          //   subregion={country.subregion}
          //   area={country.area}
          //   population={country.population}
          // />
        );
      })} */}
    </div>
  );
}
