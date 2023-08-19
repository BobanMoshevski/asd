import { RouterProvider } from "react-router-dom";
import { router } from "./util/routes/router";
import ScrollToContextProvider from "./util/context/scrollToProvider/ScrollToProvider";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  return (
    <ScrollToContextProvider>
      <RouterProvider router={router} />
    </ScrollToContextProvider>
  );
}

export default App;
