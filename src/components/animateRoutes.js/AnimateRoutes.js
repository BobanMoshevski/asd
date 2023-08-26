import { RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { router } from "../../util/routes/router";

const AnimateRoutes = () => {
  const routes = router;

  return (
    <AnimatePresence>
      <RouterProvider router={routes} />
    </AnimatePresence>
  );
};

export default AnimateRoutes;
