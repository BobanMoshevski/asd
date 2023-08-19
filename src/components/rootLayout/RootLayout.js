import { Outlet } from "react-router-dom";
import MainNavigation from "../mainNavigation/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />

      <Outlet />
    </>
  );
};

export default RootLayout;
