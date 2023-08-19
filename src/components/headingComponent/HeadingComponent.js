import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import "./HeadingComponentStyle.css";

const HeadingComponent = ({ headingDetails, idScroll }) => {
  return (
    <motion.div
      variants={headingDetails.headingVariant}
      initial="hidden"
      whileInView="visible"
    >
      <Typography
        id={idScroll}
        className={headingDetails.headingClassName}
        variant="h4"
        component="h2"
        sx={{
          marginLeft: headingDetails.headingMarginLeft,
          marginTop: headingDetails.headingMarginTop,
          marginBottom: headingDetails.headingMarginBottom,
        }}
      >
        {headingDetails.heading}
      </Typography>
    </motion.div>
  );
};

export default HeadingComponent;
