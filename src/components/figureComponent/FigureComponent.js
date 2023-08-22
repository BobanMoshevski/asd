import "./FigureComponentStyle.css";

const FigureComponent = ({ figureDetails }) => {
  return (
    <img
      src={figureDetails.figureImgSrc}
      alt={figureDetails.figureImgAlt}
      className={figureDetails.figureImgClassName}
    />
  );
};

export default FigureComponent;
