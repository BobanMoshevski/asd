import ScrollToContextProvider from "./util/context/scrollToProvider/ScrollToProvider";
import AnimateRoutes from "./components/animateRoutes.js/AnimateRoutes";
import "./App.css";

function App() {
  return (
    <ScrollToContextProvider>
      <AnimateRoutes />
    </ScrollToContextProvider>
  );
}

export default App;
