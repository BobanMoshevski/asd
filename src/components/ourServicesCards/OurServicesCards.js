import { Container, Grid } from "@mui/material";
import ServicesCards from "../servicesCards/ServicesCards";

const OurServicesCards = ({ cardsDetails }) => {
  return (
    <Container>
      <Grid
        container
        spacing={7}
        sx={{
          marginTop: {
            xs: "10px",
            md: "-50px",
          },
          display: "flex",
          justifyContent: "center",
        }}
      >
        {cardsDetails.map((cardDetail, index) => (
          <Grid
            item
            xs={10}
            sm={5}
            lg={4}
            key={index}
            sx={{
              marginBottom: "40px",
            }}
          >
            <ServicesCards cardDetail={cardDetail} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurServicesCards;
