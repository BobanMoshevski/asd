import {
  cardsDetail,
  ourServicesFigure,
  ourServicesHeading,
} from "../../util/data/dataDetails";
import FigureComponent from "../figureComponent/FigureComponent";
import HeadingComponent from "../headingComponent/HeadingComponent";
import OurServicesCards from "../ourServicesCards/OurServicesCards";
import "./OurServicesStyle.css";

const OurServices = () => {
  const figureDetail = ourServicesFigure;
  const headingDetail = ourServicesHeading;
  const cardsDetails = cardsDetail;

  return (
    <div className="our-services-wrapper">
      <div className={figureDetail.divClassName}>
        <FigureComponent figureDetails={figureDetail} />
      </div>

      <HeadingComponent idScroll={"services"} headingDetails={headingDetail} />

      <OurServicesCards cardsDetails={cardsDetails} />
    </div>
  );
};

export default OurServices;
