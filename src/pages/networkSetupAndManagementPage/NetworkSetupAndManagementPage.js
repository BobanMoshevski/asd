import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import {
  networkSetupAndManagementFigure,
  networkSetupAndManagementHeading,
  networkSetupAndManagementImage,
  networkSetupAndManagementText,
} from "../../util/data/dataDetails";
import {
  networkSetupFigureVariant,
  networkSetupHeadingVariant,
  networkSetupImageVariant,
  networkSetupTextVariant,
  pageVariant,
} from "../../util/animateVariants/animateVariants";
import FigureComponent from "../../components/figureComponent/FigureComponent";
import HeadingComponent from "../../components/headingComponent/HeadingComponent";
import ImageComponent from "../../components/imageComponent/ImageComponent";
import TextContent from "../../components/textContent/TextContent";
import "./NetworkSetupAndManagementPageStyle.css";

const NetworkSetupAndManagementPage = () => {
  const { pathname } = useLocation();
  const pageVariants = pageVariant;
  const figureVariant = networkSetupFigureVariant;
  const headingVariant = networkSetupHeadingVariant;
  const imageVariant = networkSetupImageVariant;
  const textVariant = networkSetupTextVariant;
  const figureDetail = networkSetupAndManagementFigure;
  const headingDetail = networkSetupAndManagementHeading;
  const imageDetail = networkSetupAndManagementImage;
  const textDetail = networkSetupAndManagementText;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <motion.div
          className="network-setup-wrapper"
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

export default NetworkSetupAndManagementPage;
