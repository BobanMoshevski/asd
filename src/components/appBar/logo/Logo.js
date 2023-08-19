import { NavLink } from "react-router-dom";
import { appBarLogo } from "../../../util/data/dataDetails";
import "./LogoStyle.css";

const Logo = () => {
  const logo = appBarLogo;

  return (
    <NavLink
      to="/"
      style={{ paddingLeft: "25px", marginLeft: logo.logoMarginLeft }}
    >
      <img
        className={logo.logoClassName}
        src={logo.logoSrc}
        alt={logo.logoAlt}
      />
    </NavLink>
  );
};

export default Logo;
