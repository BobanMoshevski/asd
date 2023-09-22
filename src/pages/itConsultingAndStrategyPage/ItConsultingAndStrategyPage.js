import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import {
  itConsultingFigureVariant,
  itConsultingHeadingVariant,
  itConsultingImageVariant,
  itConsultingTextVariant,
  pageVariant,
} from "../../util/animateVariants/animateVariants";
import {
  itConsultingAndStrategyFigure,
  itConsultingAndStrategyHeading,
  itConsultingAndStrategyImage,
  itConsultingAndStrategyText,
} from "../../util/data/dataDetails";

import FigureComponent from "../../components/figureComponent/FigureComponent";
import HeadingComponent from "../../components/headingComponent/HeadingComponent";
import ImageComponent from "../../components/imageComponent/ImageComponent";
import TextContent from "../../components/textContent/TextContent";
import "./ItConsultingAndStrategyPageStyle.css";

const ItConsultingAndStrategyPage = () => {
  const { pathname } = useLocation();
  const pageVariants = pageVariant;
  const figureVariant = itConsultingFigureVariant;
  const headingVariant = itConsultingHeadingVariant;
  const imageVariant = itConsultingImageVariant;
  const textVariant = itConsultingTextVariant;
  const figureDetail = itConsultingAndStrategyFigure;
  const headingDetail = itConsultingAndStrategyHeading;
  const imageDetail = itConsultingAndStrategyImage;
  const textDetail = itConsultingAndStrategyText;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <AnimatePresence>
          <motion.div
            key="it"
            className="it-consulting-wrapper bg-linear-color"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              variants={figureVariant}
              initial="initial"
              animate="animate"
              className={figureDetail.divClassName}
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

export default ItConsultingAndStrategyPage;
