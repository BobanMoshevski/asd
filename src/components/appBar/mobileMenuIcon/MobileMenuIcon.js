import { useState } from "react";
import { Box } from "@mui/material";
import IconMenuButton from "../iconMenuButton/IconMenuButton";
import MobileDrawer from "../mobileDrawer/MobileDrawer";

const MobileMenuIcon = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box sx={{ display: { sm: "flex", md: "none" } }}>
      <IconMenuButton setIsDrawerOpen={setIsDrawerOpen} />

      <MobileDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </Box>
  );
};

export default MobileMenuIcon;
