import { Grid } from "@mui/material";
import HomeTopFigures from "../../components/homeTopFigures/HomeTopFigures";
// import WhatMakesUs from "../../components/whatMakesUs/WhatMakesUs";
// import OurServices from "../../components/ourServices/OurServices";
// import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
// import ContactUs from "../../components/contactUs/ContactUs";
// import Footer from "../../components/footer/Footer";
// import { useEffect, useContext } from "react";
// import { useLocation } from "react-router-dom";
// import { useContext, useEffect } from "react";
// import { ScrollToContext } from "../../util/context/scrollToProvider/ScrollToProvider";

const HomePage = () => {
  // const location = useLocation();
  // const { scrollTo } = useContext(ScrollToContext);

  // useEffect(() => {
  //   console.log("asfsdfs");
  //   window.scrollTo({
  //     left: 0,
  //     top: scrollTo,
  //   });
  // }, [scrollTo, location]);

  // useEffect(() => {
  //   window.scrollTo(0, scrollTo);
  // }, [location, scrollTo]);

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <HomeTopFigures />
        </Grid>
      </Grid>

      {/* <WhatMakesUs />

      <OurServices />

      <WhyChooseUs />

      <ContactUs /> */}

      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
