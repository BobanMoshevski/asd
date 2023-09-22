import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import {
  pageVariant,
  uiUxDesignFigureVariant,
  uiUxDesignHeadingVariant,
  uiUxDesignImageVariant,
  uiUxDesignTextVariant,
} from "../../util/animateVariants/animateVariants";
import {
  uiUxDesignFigure,
  uiUxDesignHeading,
  uiUxDesignImage,
  uiUxDesignText,
} from "../../util/data/dataDetails";

import FigureComponent from "../../components/figureComponent/FigureComponent";
import HeadingComponent from "../../components/headingComponent/HeadingComponent";
import ImageComponent from "../../components/imageComponent/ImageComponent";
import TextContent from "../../components/textContent/TextContent";
import "./UiUxDesignPageStyle.css";

const UiUxDesignPage = () => {
  const { pathname } = useLocation();
  const pageVariants = pageVariant;
  const figureVariant = uiUxDesignFigureVariant;
  const headingVariant = uiUxDesignHeadingVariant;
  const imageVariant = uiUxDesignImageVariant;
  const textVariant = uiUxDesignTextVariant;
  const figureDetail = uiUxDesignFigure;
  const headingDetail = uiUxDesignHeading;
  const imageDetail = uiUxDesignImage;
  const textDetail = uiUxDesignText;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <AnimatePresence>
          <motion.div
            key="uiUx"
            className="ui-ux-wrapper bg-linear-color"
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

export default UiUxDesignPage;
