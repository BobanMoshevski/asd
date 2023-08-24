const ImageComponent = ({ imageDetails }) => {
  return (
    <img
      className={imageDetails.imageClassName}
      src={imageDetails.imageSrc}
      alt={imageDetails.imageAlt}
    />
  );
};

export default ImageComponent;
