const FigureComponent = ({ figureDetails }) => {
  return (
    <img
      className={figureDetails.figureImgClassName}
      src={figureDetails.figureImgSrc}
      alt={figureDetails.figureImgAlt}
    />
  );
};

export default FigureComponent;
