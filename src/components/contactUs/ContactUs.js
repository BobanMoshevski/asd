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
    <div className="contact-us-wrapper">
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
