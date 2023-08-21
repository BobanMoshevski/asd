import { motion } from "framer-motion";
import "./HeadingComponentStyle.css";

const HeadingComponent = ({ headingDetails, idScroll }) => {
  return (
    <motion.h2
      variants={headingDetails.headingVariant}
      initial="hidden"
      whileInView="visible"
      id={idScroll}
      className={headingDetails.headingClassName}
    >
      {headingDetails.heading}
    </motion.h2>
  );
};

export default HeadingComponent;
