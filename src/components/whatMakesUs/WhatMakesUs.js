import { Box } from "@mui/material";
import {
  whatMakesUsFigure,
  whatMakesUsHeading,
  whatMakesUsText,
} from "../../util/data/dataDetails";
import FigureComponent from "../figureComponent/FigureComponent";
import HeadingComponent from "../headingComponent/HeadingComponent";
import WhatMakesUsText from "../whatMakesUsText/WhatMakesUsText";

const WhatMakesUs = () => {
  const figureDetail = whatMakesUsFigure;
  const headingDetail = whatMakesUsHeading;
  const textDetail = whatMakesUsText;

  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        minHeight: "100vh",
        position: "absolute",
      }}
    >
      <FigureComponent figureDetails={figureDetail} />

      <HeadingComponent idScroll={"about"} headingDetails={headingDetail} />

      <WhatMakesUsText textDetails={textDetail} />
    </Box>
  );
};

export default WhatMakesUs;
