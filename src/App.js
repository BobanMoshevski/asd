import ScrollToContextProvider from "./util/context/scrollToProvider/ScrollToProvider";
import AnimateRoutes from "./components/animateRoutes.js/AnimateRoutes";

function App() {
  return (
    <ScrollToContextProvider>
      <AnimateRoutes />
    </ScrollToContextProvider>
  );
}

export default App;
