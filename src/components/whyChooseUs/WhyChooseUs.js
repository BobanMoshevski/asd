import {
  whyChooseUsCards,
  whyChooseUsFigure,
  whyChooseUsHeading,
} from "../../util/data/dataDetails";
import FigureComponent from "../figureComponent/FigureComponent";
import HeadingComponent from "../headingComponent/HeadingComponent";
import WhyChooseUsCards from "../whyChooseUsCards/WhyChooseUsCards";
import "./WhyChooseUsStyle.css";

const WhyChooseUs = () => {
  const figureDetail = whyChooseUsFigure;
  const headingDetail = whyChooseUsHeading;
  const cardsDetail = whyChooseUsCards;

  return (
    <div className="why-choose-wrapper">
      <div className={figureDetail.divClassName}>
        <FigureComponent figureDetails={figureDetail} />
      </div>

      <HeadingComponent headingDetails={headingDetail} />

      <WhyChooseUsCards cardsDetails={cardsDetail} />
    </div>
  );
};

export default WhyChooseUs;
