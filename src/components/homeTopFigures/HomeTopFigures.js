import { Box } from "@mui/material";
import { homeTopFigures } from "../../util/data/dataDetails";
import "./HomeTopFiguresStyle.css";

const HomeTopFigures = () => {
  const topFigures = homeTopFigures;

  return (
    <Box id="home" className="figures-animate" sx={{ height: "115vh" }}>
      {topFigures.map((figure, index) => (
        <img
          key={index}
          className={figure.imageClassName}
          src={figure.imageSrc}
          alt={figure.imageAlt}
        />
      ))}
    </Box>
  );
};

export default HomeTopFigures;
