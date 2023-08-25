import { homeTopFigures } from "../../util/data/dataDetails";
import "./HomeTopFiguresStyle.css";

import HomeHeading from "../homeHeading/HomeHeading";

const HomeTopFigures = () => {
  const topFigures = homeTopFigures;

  return (
    <div id="home" className="figures-animate">
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
