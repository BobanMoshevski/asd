import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import MainNavigation from "../mainNavigation/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />

      <Container disableGutters={true} maxWidth="false">
        <Outlet />
      </Container>
    </>
  );
};

export default RootLayout;
