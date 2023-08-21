import {
  whatMakesUsFigure,
  whatMakesUsHeading,
  whatMakesUsText,
} from "../../util/data/dataDetails";
import FigureComponent from "../figureComponent/FigureComponent";
import HeadingComponent from "../headingComponent/HeadingComponent";
import WhatMakesUsText from "../whatMakesUsText/WhatMakesUsText";
import "./WhatMakesUsStyle.css";

const WhatMakesUs = () => {
  const figureDetail = whatMakesUsFigure;
  const headingDetail = whatMakesUsHeading;
  const textDetail = whatMakesUsText;

  return (
    <div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
          marginTop: "600px",
        }}
      >
        <div className={figureDetail.divClassName}>
          <FigureComponent figureDetails={figureDetail} />
        </div>

        <HeadingComponent idScroll={"about"} headingDetails={headingDetail} />

        <WhatMakesUsText textDetails={textDetail} />
      </div>
    </div>
  );
};

export default WhatMakesUs;
