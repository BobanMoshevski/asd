import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { pageVariant } from "../../util/animateVariants/animateVariants";

const HelpDeskAndTechnicalSupportPage = () => {
  const { pathname } = useLocation();
  const pageVariants = pageVariant;
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
          <div className={figureDetail.divClassName}>
            <FigureComponent figureDetails={figureDetail} />
          </div>

          <HeadingComponent headingDetails={headingDetail} />

          <div className={imageDetail.divClassName}>
            <ImageComponent imageDetails={imageDetail} />
          </div>

          <TextContent textDetails={textDetail} />
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default HelpDeskAndTechnicalSupportPage;
