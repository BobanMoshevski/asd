import { Box } from "@mui/material";
import {
  whyChooseUsCards,
  whyChooseUsFigure,
  whyChooseUsHeading,
} from "../../util/data/dataDetails";
import FigureComponent from "../figureComponent/FigureComponent";
import HeadingComponent from "../headingComponent/HeadingComponent";
import WhyChooseUsCards from "../whyChooseUsCards/WhyChooseUsCards";

const WhyChooseUs = () => {
  const figureDetail = whyChooseUsFigure;
  const headingDetail = whyChooseUsHeading;
  const cardsDetail = whyChooseUsCards;

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

      <HeadingComponent headingDetails={headingDetail} />

      <WhyChooseUsCards cardsDetails={cardsDetail} />
    </Box>
  );
};

export default WhyChooseUs;
