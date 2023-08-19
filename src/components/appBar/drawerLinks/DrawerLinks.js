import classes from "./DrawerLinksStyle.module.css";
import { appBarLinks } from "../../../util/data/dataDetails";
import NavbarLink from "../navbarLink/NavbarLink";

const DrawerLinks = ({ isDrawerOpen, setIsDrawerOpen }) => {
  return (
    <ul className={classes["drawer-list"]}>
      {appBarLinks.map((drawerLink) => (
        <li key={drawerLink} className={classes["drawer-list-items"]}>
          <NavbarLink
            navbarLink={drawerLink}
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
            classes={classes.active}
          />
        </li>
      ))}
    </ul>
  );
};

export default DrawerLinks;
