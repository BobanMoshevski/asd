import { Box } from "@mui/material";
import { appBarLinks } from "../../../util/data/dataDetails";
import NavbarLink from "../navbarLink/NavbarLink";
import classes from "./AppBarLinksStyle.module.css";

const AppBarLinks = () => {
  const links = appBarLinks;

  return (
    <Box sx={{ display: { xs: "none", md: "flex", paddingRight: "45px" } }}>
      <ul className={classes.list}>
        {links.map((navbarLink) => (
          <li key={navbarLink} className={classes["list-items"]}>
            <NavbarLink navbarLink={navbarLink} classes={classes.active} />
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default AppBarLinks;
