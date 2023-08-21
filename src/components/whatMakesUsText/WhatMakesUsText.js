import { motion } from "framer-motion";
import { Box, Grid } from "@mui/material";
import TextComponent from "../textComponent/TextComponent";

const WhatMakesUsText = ({ textDetails }) => {
  return (
    <Box sx={{ marginTop: "-430px", position: "relative", zIndex: "1" }}>
      <Grid container spacing={3} direction="row" justifyContent="space-around">
        <Grid item xs={10} md={5}>
          <TextComponent content={textDetails.leftText} alignLeft={"left"} />
        </Grid>

        <Grid item xs={10} md={5}>
          <TextComponent content={textDetails.rightText} alignRight="right" />
        </Grid>

        <Grid item xs={10} lg={8}>
          <motion.p
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 20, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="font-color"
            style={{ marginTop: "80px", fontSize: "1.7rem" }}
          >
            Discover the power of what makes us different. Experience the
            difference it can make for your business.
          </motion.p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhatMakesUsText;
