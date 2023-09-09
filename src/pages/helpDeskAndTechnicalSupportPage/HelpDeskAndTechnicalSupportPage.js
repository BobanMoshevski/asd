import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import {
  helpDeskFigureVariant,
  helpDeskHeadingVariant,
  helpDeskImageVariant,
  helpDeskTextVariant,
  pageVariant,
} from "../../util/animateVariants/animateVariants";
import {
  helpDeskAndTechnicalSupportFigure,
  helpDeskAndTechnicalSupportHeading,
  helpDeskAndTechnicalSupportImage,
  helpDeskAndTechnicalSupportText,
} from "../../util/data/dataDetails";
import FigureComponent from "../../components/figureComponent/FigureComponent";
import HeadingComponent from "../../components/headingComponent/HeadingComponent";
import ImageComponent from "../../components/imageComponent/ImageComponent";
import TextContent from "../../components/textContent/TextContent";
import "./HelpDeskAndTechnicalSupportPageStyle.css";

const HelpDeskAndTechnicalSupportPage = () => {
  const { pathname } = useLocation();
  const pageVariants = pageVariant;
  const figureVariant = helpDeskFigureVariant;
  const headingVariant = helpDeskHeadingVariant;
  const imageVariant = helpDeskImageVariant;
  const textVariant = helpDeskTextVariant;
  const figureDetail = helpDeskAndTechnicalSupportFigure;
  const headingDetail = helpDeskAndTechnicalSupportHeading;
  const imageDetail = helpDeskAndTechnicalSupportImage;
  const textDetail = helpDeskAndTechnicalSupportText;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <motion.div
          className="help-desk-wrapper"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            variants={figureVariant}
            className={figureDetail.divClassName}
          >
            <FigureComponent figureDetails={figureDetail} />
          </motion.div>

          <motion.div variants={headingVariant}>
            <HeadingComponent headingDetails={headingDetail} />
          </motion.div>

          <motion.div
            variants={imageVariant}
            className={imageDetail.divClassName}
          >
            <ImageComponent imageDetails={imageDetail} />
          </motion.div>

          <motion.div variants={textVariant}>
            <TextContent textDetails={textDetail} />
          </motion.div>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default HelpDeskAndTechnicalSupportPage;
