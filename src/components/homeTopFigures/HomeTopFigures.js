import { motion } from "framer-motion";
import { homeTopFigures } from "../../util/data/dataDetails";
import "./HomeTopFiguresStyle.css";

const HomeTopFigures = () => {
  const topFigures = homeTopFigures;

  return (
    <div id="home">
      <div className="figures-animate">
        {topFigures.map((figure, index) => (
          <motion.div
            variants={figure.figureVariant}
            initial="hidden"
            animate="visible"
            key={index}
            className={figure.divClassName}
          >
            <motion.img
              variants={figure.figureVariant}
              className={figure.imageClassName}
              src={figure.imageSrc}
              alt={figure.imageAlt}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeTopFigures;
