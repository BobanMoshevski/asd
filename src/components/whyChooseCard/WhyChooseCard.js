import { Box, Card, Typography } from "@mui/material";

const WhyChooseCard = ({ cardDetail }) => {
  return (
    <Box
      sx={{
        padding: "0",
        width: "100%",
        height: "100%",
        border: "1px solid white",
        borderRadius: "0 35% 0 0",
      }}
    >
      <Card
        sx={{
          background: "none",
          padding: "10px 40px",
          width: "100%",
          height: "100%",
          marginLeft: "7px",
          marginTop: "7px",
          border: "1px solid white",
          borderRadius: "0 30% 0 0",
          overflow: "visible",
        }}
      >
        <Typography variant="h6" component="h4" className="font-color">
          {cardDetail.cardHeading}
        </Typography>

        <Typography variant="subtitle1" component="h6" className="font-color">
          {cardDetail.cardText}
        </Typography>
      </Card>
    </Box>
  );
};

export default WhyChooseCard;
