import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import {
  uiUxDesignFigure,
  uiUxDesignHeading,
  uiUxDesignImage,
  uiUxDesignText,
} from "../../util/data/dataDetails";
import FigureComponent from "../../components/figureComponent/FigureComponent";
import HeadingComponent from "../../components/headingComponent/HeadingComponent";
import ImageComponent from "../../components/imageComponent/ImageComponent";
import TextContent from "../../components/textContent/TextContent";
import "./UiUxDesignPageStyle.css";

const UiUxDesignPage = () => {
  const { pathname } = useLocation();
  const figureDetail = uiUxDesignFigure;
  const headingDetail = uiUxDesignHeading;
  const imageDetail = uiUxDesignImage;
  const textDetail = uiUxDesignText;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        minHeight: "90vh",
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

export default UiUxDesignPage;
