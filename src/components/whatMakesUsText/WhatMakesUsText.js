import { motion } from "framer-motion";
import { Box, Grid, Typography } from "@mui/material";
import TextComponent from "../textComponent/TextComponent";

const WhatMakesUsText = ({ textDetails }) => {
  return (
    <Box sx={{ marginTop: "-270px", position: "relative", zIndex: "1" }}>
      <Grid container spacing={3} direction="row" justifyContent="space-around">
        <Grid item xs={10} md={5}>
          <motion.div
          // initial={{ x: 120, opacity: 0 }}
          // whileInView={{ x: 40, opacity: 1 }}
          // transition={{ duration: 1.5, delay: 0.5 }}
          >
            <TextComponent content={textDetails.leftText} alignLeft={"left"} />
          </motion.div>
        </Grid>

        <Grid item xs={10} md={5}>
          <motion.div
          // initial={{ x: -120, opacity: 0 }}
          // whileInView={{ x: 0, opacity: 1 }}
          // transition={{ duration: 1.5, delay: 0.5 }}
          >
            <TextComponent content={textDetails.rightText} alignRight="right" />
          </motion.div>
        </Grid>

        <Grid item xs={10} lg={8}>
          <motion.div
          // initial={{ x: 180, opacity: 0 }}
          // whileInView={{ x: 80, opacity: 1 }}
          // transition={{ duration: 1.5, delay: 0.5 }}
          >
            <Typography
              variant="h5"
              component="p"
              sx={{
                color: "#fff",
                marginTop: "80px",
              }}
              className="text-font-style"
            >
              Discover the power of what makes us different. Experience the
              difference it can make for your business.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhatMakesUsText;
