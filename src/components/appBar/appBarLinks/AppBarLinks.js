import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import { Box } from "@mui/material";
import { appBarLinks } from "../../../util/data/dataDetails";
import classes from "./AppBarLinksStyle.module.css";

const AppBarLinks = () => {
  const HomePage = useLocation();
  const links = appBarLinks;
  const isHomePage = HomePage.pathname === "/";

  return (
    <Box sx={{ display: { xs: "none", md: "flex", paddingRight: "45px" } }}>
      <ul className={classes.list}>
        {links.map((navbarLink, index) => (
          <li key={index} className={classes["list-item"]}>
            {isHomePage && navbarLink.pathName !== "LET'S TALK" && (
              <Link
                key={index}
                spy={true}
                smooth={true}
                offset={-160}
                duration={3000}
                to={navbarLink.scrollId}
              >
                {navbarLink.pathName}
              </Link>
            )}

            {isHomePage && navbarLink.pathName === "LET'S TALK" && (
              <NavLink key={index} to={navbarLink.goTo}>
                {navbarLink.pathName}
              </NavLink>
            )}

            {!isHomePage &&
              (navbarLink.pathName === "HOME" ||
                navbarLink.pathName === "LET'S TALK") && (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  key={navbarLink.goTo}
                  to={navbarLink.goTo}
                >
                  {navbarLink.pathName}
                </NavLink>
              )}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default AppBarLinks;
