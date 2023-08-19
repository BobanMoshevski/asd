import { motion } from "framer-motion";

const ImageComponent = ({ imageDetails }) => {
  return (
    <motion.img
      initial={{ x: 800, opacity: 0 }}
      animate={{ x: -100, opacity: 1 }}
      transition={{ duration: 4, delay: 1 }}
      className={imageDetails.imageClassName}
      src={imageDetails.imageSrc}
      alt={imageDetails.imageAlt}
      style={{
        width: imageDetails.imageWidth,
        height: imageDetails.imageHeight,
        marginLeft: imageDetails.imageMarginLeft,
        marginTop: imageDetails.imageMarginTop,
      }}
    />
  );
};

export default ImageComponent;
