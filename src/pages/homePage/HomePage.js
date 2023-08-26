import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import HomeTopFigures from "../../components/homeTopFigures/HomeTopFigures";
import WhatMakesUs from "../../components/whatMakesUs/WhatMakesUs";
import OurServices from "../../components/ourServices/OurServices";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
import ContactUs from "../../components/contactUs/ContactUs";
import Footer from "../../components/footer/Footer";
import { pageVariant } from "../../util/animateVariants/animateVariants";

const HomePage = () => {
  const { pathname } = useLocation();
  const pageVariants = pageVariant;

  useEffect(() => {
    if (pathname === "/") return window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Grid container>
        <Grid item xs={12}>
          <HomeTopFigures />
        </Grid>

        <Grid item xs={12}>
          <WhatMakesUs />
        </Grid>

        <Grid item xs={12}>
          <OurServices />
        </Grid>

        <Grid item xs={12}>
          <WhyChooseUs />
        </Grid>

        <Grid item xs={12}>
          <ContactUs />
        </Grid>
      </Grid>

      <Footer />
    </motion.div>
  );
};

export default HomePage;
