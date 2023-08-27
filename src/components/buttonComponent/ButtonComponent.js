import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./ButtonComponentStyle.css";

const ButtonComponent = ({ btnText }) => {
  return (
    <Button className="custom-btn" variant="contained">
      <NavLink className="font-color link-style" to="/lets-talk">
        {btnText}
      </NavLink>
    </Button>
  );
};

export default ButtonComponent;
