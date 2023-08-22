import { Grid } from "@mui/material";
import HomeTopFigures from "../../components/homeTopFigures/HomeTopFigures";
import WhatMakesUs from "../../components/whatMakesUs/WhatMakesUs";
import OurServices from "../../components/ourServices/OurServices";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
import ContactUs from "../../components/contactUs/ContactUs";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  return (
    <div>
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
    </div>
  );
};

export default HomePage;
