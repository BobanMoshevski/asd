import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import {
  networkSetupAndManagementFigure,
  networkSetupAndManagementHeading,
  networkSetupAndManagementImage,
  networkSetupAndManagementText,
} from "../../util/data/dataDetails";
import FigureComponent from "../../components/figureComponent/FigureComponent";
import HeadingComponent from "../../components/headingComponent/HeadingComponent";
import ImageComponent from "../../components/imageComponent/ImageComponent";
import TextContent from "../../components/textContent/TextContent";
import "./NetworkSetupAndManagementPageStyle.css";

const NetworkSetupAndManagementPage = () => {
  const pathname = useLocation();
  const figureDetail = networkSetupAndManagementFigure;
  const headingDetail = networkSetupAndManagementHeading;
  const imageDetail = networkSetupAndManagementImage;
  const textDetail = networkSetupAndManagementText;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        minHeight: "100vh",
        marginTop: "30px",
      }}
    >
      <FigureComponent figureDetails={figureDetail} />

      <HeadingComponent headingDetails={headingDetail} />

      <ImageComponent imageDetails={imageDetail} />

      <TextContent textDetails={textDetail} />
    </Box>
  );
};

export default NetworkSetupAndManagementPage;
