import { homeBottomFigures } from "../../util/data/dataDetails";
import "./HomeBottomFiguresStyle.css";

const HomeBottomFigures = () => {
  const bottomFigures = homeBottomFigures;

  return bottomFigures.map((imgDetail, index) => (
    <img
      key={index}
      className={imgDetail.figureClassName}
      src={imgDetail.figureImgSrc}
      alt={imgDetail.figureImgAlt}
    />
  ));
};

export default HomeBottomFigures;
