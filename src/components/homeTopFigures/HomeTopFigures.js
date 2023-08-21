import { motion } from "framer-motion";
import { homeTopFigures } from "../../util/data/dataDetails";
import "./HomeTopFiguresStyle.css";

const HomeTopFigures = () => {
  const topFigures = homeTopFigures;

  return (
    <div id="home">
      <div className="figures-animate">
        {topFigures.map((figure, index) => (
          <div key={index} className={figure.divClassName}>
            <motion.img
              variants={figure.divVariant}
              initial="hidden"
              animate="visible"
              className={figure.imageClassName}
              src={figure.imageSrc}
              alt={figure.imageAlt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTopFigures;
