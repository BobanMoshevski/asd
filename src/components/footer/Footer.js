import { Box, Typography } from "@mui/material";

const Footer = () => {
  const fullYear = new Date().getFullYear().toString();

  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        minHeight: "100vh",
        position: "absolute",
        textAlign: "center",
      }}
    >
      <Typography
        className="font-color"
        variant="h6"
        component="p"
        sx={{ marginTop: "5200px" }}
      >
        Copyright {fullYear} DARK FORCE | All rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
