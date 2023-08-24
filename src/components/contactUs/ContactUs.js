import { contactUsFigure, contactUsHeading } from "../../util/data/dataDetails";
import FigureComponent from "../figureComponent/FigureComponent";
import HeadingComponent from "../headingComponent/HeadingComponent";
import Contact from "../contact/Contact";
import HomeBottomFigures from "../homeBottomFigures/HomeBottomfigures";
import "./ContactUsStyle.css";

const ContactUs = () => {
  const figureDetail = contactUsFigure;
  const headingDetail = contactUsHeading;

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "1550px",
        overflow: "hidden",
        marginTop: "3750px",
        zIndex: 1,
      }}
    >
      <div className={figureDetail.divClassName}>
        <FigureComponent figureDetails={figureDetail} />
      </div>

      <HeadingComponent idScroll={"contact"} headingDetails={headingDetail} />

      <Contact />

      <HomeBottomFigures />
    </div>
  );
};

export default ContactUs;
