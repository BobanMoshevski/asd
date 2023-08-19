import { Box } from "@mui/material";
import FigureComponent from "../figureComponent/FigureComponent";
import { contactUsFigure, contactUsHeading } from "../../util/data/dataDetails";
import HeadingComponent from "../headingComponent/HeadingComponent";
import Contact from "../contact/Contact";
import HomeBottomFigures from "../homeBottomFigures/HomeBottomfigures";

const ContactUs = () => {
  const figureDetail = contactUsFigure;
  const headingDetail = contactUsHeading;

  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        height: "5300px",
        position: "absolute",
      }}
    >
      <FigureComponent figureDetails={figureDetail} />

      <HeadingComponent idScroll={"contact"} headingDetails={headingDetail} />

      <Contact />

      <HomeBottomFigures />
    </Box>
  );
};

export default ContactUs;
