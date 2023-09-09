import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
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
        <motion.div
          className="it-consulting-wrapper"
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

export default ItConsultingAndStrategyPage;
