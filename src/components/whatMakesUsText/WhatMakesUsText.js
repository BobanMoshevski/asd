import { Grid } from "@mui/material";
import TextComponent from "../textComponent/TextComponent";

const WhatMakesUsText = ({ textDetails }) => {
  return (
    <div className="what-makes-us-text-wrapper">
      <Grid container spacing={3} direction="row" justifyContent="space-around">
        <Grid
          item
          xs={8}
          md={4}
          sx={{
            marginTop: { md: "-10px", sm: "0" },
            marginLeft: {
              xs: "0",
              md: "170px",
              lg: "200px",
              xl: "200px",
            },
          }}
        >
          <TextComponent content={textDetails.leftText} alignLeft={"left"} />
        </Grid>

        <Grid
          item
          xs={8}
          md={4}
          sx={{
            marginTop: {
              xs: "70px",
              md: "-10px",
            },
            marginRight: {
              xs: "0",
              md: "100px",
              lg: "150px",
              xl: "200px",
            },
          }}
        >
          <TextComponent content={textDetails.rightText} alignRight="right" />
        </Grid>

        <Grid item xs={12}>
          <p className="font-color what-makes-us-bottom-text">
            Discover the power of what makes us different. Experience the
            difference it can make for your business.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default WhatMakesUsText;
