import { homeTopFigures } from "../../util/data/dataDetails";
import HomeHeading from "../homeHeading/HomeHeading";
import "./HomeTopFiguresStyle.css";

const HomeTopFigures = () => {
  const topFigures = homeTopFigures;

  return (
    <div id="home" className="figures-animate bg-linear-color">
      <HomeHeading />

      {topFigures.map((figure, index) => (
        <div key={index} className={figure.divClassName}>
          <img
            className={figure.imageClassName}
            src={figure.imageSrc}
            alt={figure.imageAlt}
          />
        </div>
      ))}
    </div>
  );
};

export default HomeTopFigures;
