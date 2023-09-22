import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

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
        <AnimatePresence>
          <motion.div
            key="help"
            className="help-desk-wrapper bg-linear-color"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              className={figureDetail.divClassName}
              variants={figureVariant}
              initial="initial"
              animate="animate"
            >
              <FigureComponent figureDetails={figureDetail} />
            </motion.div>

            <motion.div
              variants={headingVariant}
              initial="initial"
              animate="animate"
            >
              <HeadingComponent headingDetails={headingDetail} />
            </motion.div>

            <motion.div
              className={imageDetail.divClassName}
              variants={imageVariant}
              initial="initial"
              animate="animate"
            >
              <ImageComponent imageDetails={imageDetail} />
            </motion.div>

            <motion.div
              variants={textVariant}
              initial="initial"
              animate="animate"
            >
              <TextContent textDetails={textDetail} />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </Grid>
    </Grid>
  );
};

export default HelpDeskAndTechnicalSupportPage;
