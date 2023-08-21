import { motion } from "framer-motion";
import "./FigureComponentStyle.css";

const FigureComponent = ({ figureDetails }) => {
  return (
    <motion.img
      variants={figureDetails.figureVariant}
      initial="hidden"
      whileInView="visible"
      src={figureDetails.figureImgSrc}
      alt={figureDetails.figureImgAlt}
      className={figureDetails.figureImgClassName}
    />
  );
};

export default FigureComponent;
