import { Typography } from "@mui/material";
import MainNavigation from "../../components/mainNavigation/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />

      <Typography
        variant="h2"
        component="h3"
        className="font-color"
        sx={{
          textAlign: "center",
          marginTop: "150px",
        }}
      >
        Page not found!
      </Typography>
    </>
  );
};

export default ErrorPage;
