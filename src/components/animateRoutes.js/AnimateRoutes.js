import { RouterProvider } from "react-router-dom";
import { router } from "../../util/routes/router";
import { AnimatePresence } from "framer-motion";

const AnimateRoutes = () => {
  const routes = router;

  return (
    <AnimatePresence>
      <RouterProvider router={routes} />
    </AnimatePresence>
  );
};

export default AnimateRoutes;
