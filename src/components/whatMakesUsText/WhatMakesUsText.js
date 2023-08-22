import { Grid } from "@mui/material";
import TextComponent from "../textComponent/TextComponent";

const WhatMakesUsText = ({ textDetails }) => {
  return (
    <div style={{ marginTop: "-410px", position: "relative", zIndex: "1" }}>
      <Grid container spacing={3} direction="row" justifyContent="space-around">
        <Grid
          item
          xs={10}
          md={4}
          sx={{
            marginLeft: { xs: "0", md: "120px" },
          }}
        >
          <TextComponent content={textDetails.leftText} alignLeft={"left"} />
        </Grid>

        <Grid
          item
          xs={10}
          md={4}
          sx={{
            marginRight: { xs: "0", md: "120px" },
          }}
        >
          <TextComponent content={textDetails.rightText} alignRight="right" />
        </Grid>

        <Grid item xs={12}>
          <p
            className="font-color"
            style={{
              marginTop: "80px",
              fontSize: "1.7rem",
              textAlign: "center",
            }}
          >
            Discover the power of what makes us different. Experience the
            difference it can make for your business.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default WhatMakesUsText;
