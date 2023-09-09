import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./ButtonComponentStyle.css";

const ButtonComponent = ({ btnText, to, variant }) => {
  return (
    <Button
      variant={variant}
      sx={{ bgcolor: "#3fa7b0", "&:hover": { bgcolor: "#76baa5" } }}
    >
      <NavLink className="font-color link-style" to={to}>
        {btnText}
      </NavLink>
    </Button>
  );
};

export default ButtonComponent;
