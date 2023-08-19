import { Container, Grid } from "@mui/material";
import WhyChooseCard from "../whyChooseCard/WhyChooseCard";

const WhyChooseUsCards = ({ cardsDetails }) => {
  return (
    <Container>
      <Grid container spacing={7}>
        {cardsDetails.map((cardDetail, index) => (
          <Grid item lg={6} key={index} sx={{ marginBottom: "10px" }}>
            <WhyChooseCard cardDetail={cardDetail} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WhyChooseUsCards;
