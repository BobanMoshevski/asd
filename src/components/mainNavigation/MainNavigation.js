import { AppBar, Container, Toolbar } from "@mui/material";
import Logo from "../appBar/logo/Logo";
import AppBarLinks from "../appBar/appBarLinks/AppBarLinks";
import MobileMenuIcon from "../appBar/mobileMenuIcon/MobileMenuIcon";
import "./MainNavigationStyle.css";

const MainNavigation = () => {
  return (
    <AppBar className="nav-bg" position="fixed">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Logo />

          <AppBarLinks />

          <MobileMenuIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MainNavigation;
