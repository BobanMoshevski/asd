import { Box } from "@mui/material";
import {
  cardsDetail,
  ourServicesFigure,
  ourServicesHeading,
} from "../../util/data/dataDetails";
import FigureComponent from "../figureComponent/FigureComponent";
import HeadingComponent from "../headingComponent/HeadingComponent";
import OurServicesCards from "../ourServicesCards/OurServicesCards";

const OurServices = () => {
  const figureDetail = ourServicesFigure;
  const headingDetail = ourServicesHeading;
  const cardsDetails = cardsDetail;

  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        minHeight: "100vh",
        position: "absolute",
        zIndex: "2",
      }}
    >
      <FigureComponent figureDetails={figureDetail} />

      <HeadingComponent headingDetails={headingDetail} idScroll={"services"} />

      <OurServicesCards cardsDetails={cardsDetails} />
    </Box>
  );
};

export default OurServices;
