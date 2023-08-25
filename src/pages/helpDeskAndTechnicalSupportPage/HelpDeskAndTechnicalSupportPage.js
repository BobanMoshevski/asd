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
import { homePageVariant } from "../../util/animateVariants/animateVariants";

const HelpDeskAndTechnicalSupportPage = () => {
  const { pathname } = useLocation();
  const figureDetail = helpDeskAndTechnicalSupportFigure;
  const headingDetail = helpDeskAndTechnicalSupportHeading;
  const imageDetail = helpDeskAndTechnicalSupportImage;
  const textDetail = helpDeskAndTechnicalSupportText;
  const pageVariant = homePageVariant;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <motion.div
          variants={pageVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            width: "100%",
            minHeight: "90vh",
            overflow: "hidden",
          }}
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
