import { Box, Drawer } from "@mui/material";
import MenuIconDrawer from "../menuIconDrawer/MenuIconDrawer";

const MobileDrawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  return (
    <Drawer
      anchor="top"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
    >
      <Box
        p={2}
        role="presentation"
        textAlign="center"
        sx={{
          bgcolor: "#191919",
        }}
      >
        <MenuIconDrawer
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
