import { NavLink } from "react-router-dom";
import { Box, Button, Card, Typography } from "@mui/material";

const ServicesCards = ({ cardDetail }) => {
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
        <img
          src={cardDetail.cardImageSrc}
          alt={cardDetail.cardName}
          style={{
            width: cardDetail.cardWidth,
            height: cardDetail.cardHeight,
            marginTop: cardDetail.cardImgMarginTop,
          }}
        />

        <Typography
          variant="h6"
          component="h4"
          className="font-color"
          sx={{
            fontWeight: "bold",
            marginTop: cardDetail.cardHeadingMarginTop,
            marginBottom: cardDetail.cardHeadingMarginBottom,
          }}
        >
          {cardDetail.cardName}
        </Typography>

        <Button variant="text" sx={{ marginLeft: "-8px" }}>
          <NavLink
            to={cardDetail.cardBtnPath}
            style={{
              textDecoration: "none",
              color: "#37bcb6",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Read Details
          </NavLink>
        </Button>
      </Card>
    </Box>
  );
};

export default ServicesCards;
