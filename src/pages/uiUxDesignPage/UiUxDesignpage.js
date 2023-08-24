import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
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
    <Grid container>
      <Grid item xs={12}>
        <div
          style={{
            width: "100%",
            minHeight: "90vh",
            overflow: "hidden",
          }}
        >
          <div className={figureDetail.divClassName}>
            <FigureComponent figureDetails={figureDetail} />
          </div>

          <HeadingComponent headingDetails={headingDetail} />

          <div className={imageDetail.divClassName}>
            <ImageComponent imageDetails={imageDetail} />
          </div>

          <TextContent textDetails={textDetail} />
        </div>
      </Grid>
    </Grid>
  );
};

export default UiUxDesignPage;
