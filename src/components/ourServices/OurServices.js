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
    <div
      style={{
        position: "absolute",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        marginTop: "1200px",
        zIndex: 3,
      }}
    >
      <div className={figureDetail.divClassName}>
        <FigureComponent figureDetails={figureDetail} />
      </div>

      <HeadingComponent idScroll={"services"} headingDetails={headingDetail} />

      <OurServicesCards cardsDetails={cardsDetails} />
    </div>
  );
};

export default OurServices;
