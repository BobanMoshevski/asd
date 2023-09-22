import { Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import { pageVariant } from "../../util/animateVariants/animateVariants";
import { letsTalkFigure, letsTalkHeading } from "../../util/data/dataDetails";

import LetsTalkForm from "../../components/letsTalkForm/LetsTalkForm";
import FigureComponent from "../../components/figureComponent/FigureComponent";
import HeadingComponent from "../../components/headingComponent/HeadingComponent";
import "./LetsTalkPageStyle.css";

const LetsTalkPage = () => {
  const pageVariants = pageVariant;
  const figureDetail = letsTalkFigure;
  const headingDetail = letsTalkHeading;

  return (
    <Grid container>
      <Grid item xs={12}>
        <AnimatePresence>
          <motion.div
            key="lets"
            className="lets-talk-wrapper bg-linear-color"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className={figureDetail.divClassName}>
              <FigureComponent figureDetails={figureDetail} />
            </div>

            <HeadingComponent headingDetails={headingDetail} />

            <LetsTalkForm />
          </motion.div>
        </AnimatePresence>
      </Grid>
    </Grid>
  );
};

export default LetsTalkPage;
