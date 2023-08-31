import { Container, Grid } from "@mui/material";
import WhyChooseCard from "../whyChooseCard/WhyChooseCard";

const WhyChooseUsCards = ({ cardsDetails }) => {
  return (
    <Container>
      <Grid
        container
        spacing={7}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "-380px",
        }}
      >
        {cardsDetails.map((cardDetail, index) => (
          <Grid
            item
            xs={9}
            sm={8}
            md={5}
            key={index}
            sx={{ marginBottom: "10px" }}
          >
            <WhyChooseCard cardDetail={cardDetail} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WhyChooseUsCards;
