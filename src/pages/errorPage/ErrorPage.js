import { Grid } from "@mui/material";
import MainNavigation from "../../components/mainNavigation/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />

      <Grid container>
        <Grid item xs={12}>
          <p
            className="font-color"
            style={{
              fontSize: "1.8rem",
              textAlign: "center",
              marginTop: "150px",
            }}
          >
            Page not found!
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default ErrorPage;
