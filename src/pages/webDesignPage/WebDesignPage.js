import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import {
  pageVariant,
  webDesignFigureVariant,
  webDesignHeadingVariant,
  webDesignImageVariant,
  webDesignTextVariant,
} from "../../util/animateVariants/animateVariants";
import {
  webDesignFigure,
  webDesignHeading,
  webDesignImage,
  webDesignText,
} from "../../util/data/dataDetails";
import FigureComponent from "../../components/figureComponent/FigureComponent";
import HeadingComponent from "../../components/headingComponent/HeadingComponent";
import ImageComponent from "../../components/imageComponent/ImageComponent";
import TextContent from "../../components/textContent/TextContent";
import "./WebDesignPageStyle.css";

const WebDesignPage = () => {
  const { pathname } = useLocation();
  const pageVariants = pageVariant;
  const figureVariant = webDesignFigureVariant;
  const headingVariant = webDesignHeadingVariant;
  const imageVariant = webDesignImageVariant;
  const textVariant = webDesignTextVariant;
  const figureDetail = webDesignFigure;
  const headingDetail = webDesignHeading;
  const imageDetail = webDesignImage;
  const textDetail = webDesignText;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <motion.div
          className="web-design-wrapper"
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

export default WebDesignPage;
