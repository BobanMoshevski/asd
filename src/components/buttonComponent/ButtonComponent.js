import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const ButtonComponent = ({ btnText }) => {
  return (
    <Button
      variant="contained"
      sx={{
        fontSize: "1.1rem",
        fontWeight: "bold",
        bgcolor: "#3FA3B2",
        "&:hover": { bgcolor: "#76BAA5" },
      }}
    >
      <NavLink
        className="font-color"
        style={{ textDecoration: "none", padding: "5px 10px" }}
        to="/lets-talk"
      >
        {btnText}
      </NavLink>
    </Button>
  );
};

export default ButtonComponent;
