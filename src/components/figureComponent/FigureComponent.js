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
      style={{
        width: figureDetails.figureImgWidth,
        height: figureDetails.figureImgHeight,
        marginLeft: figureDetails.figureImgMarginLeft,
        marginTop: figureDetails.figureImgMarginTop,
      }}
    />
  );
};

export default FigureComponent;
