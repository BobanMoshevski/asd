import { Grid } from "@mui/material";
import { letsTalkFigure, letsTalkHeading } from "../../util/data/dataDetails";
import LetsTalkForm from "../../components/letsTalkForm/LetsTalkForm";
import FigureComponent from "../../components/figureComponent/FigureComponent";
import HeadingComponent from "../../components/headingComponent/HeadingComponent";
import "./LetsTalkPageStyle.css";

const LetsTalkPage = () => {
  const figureDetail = letsTalkFigure;
  const headingDetail = letsTalkHeading;

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

          <LetsTalkForm />
        </div>
      </Grid>
    </Grid>
  );
};

export default LetsTalkPage;
