import { Box } from "@mui/material";
import Logo from "../logo/Logo";
import DrawerLinks from "../drawerLinks/DrawerLinks";

const MenuIconDrawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  return (
    <Box flexDirection="column">
      <Logo />

      <DrawerLinks
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </Box>
  );
};

export default MenuIconDrawer;
