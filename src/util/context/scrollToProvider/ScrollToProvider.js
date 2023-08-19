import { createContext, useState } from "react";

export const ScrollToContext = createContext();

const ScrollToContextProvider = (props) => {
  const [scrollTo, setScrollTo] = useState(0);

  return (
    <ScrollToContext.Provider value={{ scrollTo, setScrollTo }}>
      {props.children}
    </ScrollToContext.Provider>
  );
};

export default ScrollToContextProvider;
