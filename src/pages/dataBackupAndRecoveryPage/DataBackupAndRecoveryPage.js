import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import {
  dataBackupFigureVariant,
  dataBackupHeadingVariant,
  dataBackupImageVariant,
  dataBackupTextVariant,
  pageVariant,
} from "../../util/animateVariants/animateVariants";
import {
  dataBackupAndRecoveryFigure,
  dataBackupAndRecoveryHeading,
  dataBackupAndRecoveryImage,
  dataBackupAndRecoveryText,
} from "../../util/data/dataDetails";

import FigureComponent from "../../components/figureComponent/FigureComponent";
import HeadingComponent from "../../components/headingComponent/HeadingComponent";
import ImageComponent from "../../components/imageComponent/ImageComponent";
import TextContent from "../../components/textContent/TextContent";
import "./DataBackupAndRecoveryPageStyle.css";

const DataBackupAndRecoveryPage = () => {
  const { pathname } = useLocation();
  const pageVariants = pageVariant;
  const figureVariant = dataBackupFigureVariant;
  const headingVariant = dataBackupHeadingVariant;
  const imageVariant = dataBackupImageVariant;
  const textVariant = dataBackupTextVariant;
  const figureDetail = dataBackupAndRecoveryFigure;
  const headingDetail = dataBackupAndRecoveryHeading;
  const imageDetail = dataBackupAndRecoveryImage;
  const textDetail = dataBackupAndRecoveryText;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <AnimatePresence>
          <motion.div
            key="data"
            className="data-backup-wrapper bg-linear-color"
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

export default DataBackupAndRecoveryPage;
