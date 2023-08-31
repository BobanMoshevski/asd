import { appBarLinks } from "../../../util/data/dataDetails";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./DrawerLinksStyle.module.css";
import { Link } from "react-scroll";

const DrawerLinks = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const HomePage = useLocation();
  const links = appBarLinks;
  const isHomePage = HomePage.pathname === "/";

  return (
    <ul className={classes["drawer-list"]}>
      {links.map((drawerLink, index) => (
        <li key={index} className={classes["drawer-list-items"]}>
          {isDrawerOpen &&
            isHomePage &&
            drawerLink.pathName !== "LET'S TALK" && (
              <Link
                key={index}
                spy={true}
                smooth={true}
                offset={-150}
                duration={3000}
                to={drawerLink.scrollId}
                onClick={() => setIsDrawerOpen(false)}
              >
                {drawerLink.pathName}
              </Link>
            )}

          {isDrawerOpen &&
            isHomePage &&
            drawerLink.pathName === "LET'S TALK" && (
              <NavLink
                key={index}
                to={drawerLink.goTo}
                onClick={() => setIsDrawerOpen(false)}
              >
                {drawerLink.pathName}
              </NavLink>
            )}

          {isDrawerOpen &&
            !isHomePage &&
            (drawerLink.pathName === "HOME" ||
              drawerLink.pathName === "LET'S TALK") && (
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                key={drawerLink.goTo}
                to={drawerLink.goTo}
                onClick={() => setIsDrawerOpen(false)}
              >
                {drawerLink.pathName}
              </NavLink>
            )}
        </li>
      ))}
    </ul>
  );
};

export default DrawerLinks;
