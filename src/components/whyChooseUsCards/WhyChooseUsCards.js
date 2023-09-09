import { Container, Grid } from "@mui/material";
import WhyChooseCard from "../whyChooseCard/WhyChooseCard";

const WhyChooseUsCards = ({ cardsDetails }) => {
  return (
    <Container>
      <Grid
        container
        spacing={10}
        sx={{
          padding: { md: "0 70px 0 30px" },
          display: "flex",
          justifyContent: "space-around",
          marginTop: "-400px",
        }}
      >
        {cardsDetails.map((cardDetail, index) => (
          <Grid
            item
            xs={10}
            sm={9}
            md={6}
            key={index}
            sx={{ marginBottom: { sm: "-20px", md: "10px" }, zIndex: 2 }}
          >
            <WhyChooseCard cardDetail={cardDetail} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WhyChooseUsCards;
