import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const ServicesCards = ({ cardDetail }) => {
  return (
    <div className="our-services-card-wrapper">
      <div className="our-services-card">
        <img
          className={cardDetail.imageClassName}
          src={cardDetail.cardImageSrc}
          alt={cardDetail.cardName}
        />

        <h6
          className={`font-color heading-card ${cardDetail.headingClassName}`}
        >
          {cardDetail.cardName}
        </h6>

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
      </div>
    </div>
  );
};

export default ServicesCards;
